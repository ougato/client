/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-10-30 03:10:48
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import LoginScene from "../view/LoginScene";
import * as URLConfig from "../../config/URLConfig";
import * as HttpInterface from "../../core/interface/HttpInterface";
import HttpRequest from "../../core/http/HttpRequest";
import LockScreenPersist from "../persist/LockScreenPersist";
import LoadingPersist from "../persist/LoadingPersist";
import WaitingPersist from "../persist/WaitingPersist";
import DialogPersist from "../persist/DialogPersist";
import * as HttpDefine from "../../core/define/HttpDefine";
import * as WebParamInterface from "../../interface/WebParamInterface";
import HostData from "../../data/HostData";

// 动态请求主机最大次数
const DYNAMIC_GET_HOST_MAX_COUNT: number = 3;
// 动态请求备用主机最大次数
const DYNAMIC_GET_HOST_BACKUP_MAX_COUNT: number = 3;

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends BaseScene {

    protected onLoad(): void {
        super.onLoad();

    }

    protected start(): void {
        super.start();

        this.launch();
    }

    /**
     * 初始化常驻
     * @returns {Promise<void>}
     */
    public async initPersist(): Promise<void> {
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            Promise.all([G.UIMgr.addPersist(LockScreenPersist), G.UIMgr.addPersist(LoadingPersist), G.UIMgr.addPersist(WaitingPersist), G.UIMgr.addPersist(DialogPersist)]).then(() => {
                resolve();
            }).catch((reason: any) => {
                // TODO: 弹窗重试
                G.LogMgr.error("初始化常驻失败");
            });
        })
    }

    /**
     * 动态初始化游戏中用到的所有主机配置
     * @returns {Promise<void>}
     */
    public async initHost(): Promise<void> {
        return new Promise(async (resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            // 获取动态主机次数
            let count: number = 0;

            /**
             * 获取主机
             * @param url {string} 获取动态主机链接
             */
            let getDynamicHost: Function = (url: string) => {
                HttpRequest.get(url).then((responseInfo: HttpInterface.ResponseInfo) => {
                    if (responseInfo.state === HttpDefine.StateType.OK &&
                        responseInfo.body.code === 0) {
                        let responseData: WebParamInterface.WebDynamicHostResponse = responseInfo.body.data;
                        let hostData: HostData = G.DataMgr.add(HostData);
                        hostData.loginHost = responseData.loginURL;
                        hostData.appHost = responseData.appURL;
                        hostData.hotUpdateHost = responseData.hotUpdateURL;
                        hostData.payHost = responseData.payURL;
                        hostData.resHost = responseData.resURL;
                        count = 0;
                        resolve();
                    } else {
                        ++count;
                        if (count < DYNAMIC_GET_HOST_MAX_COUNT) {
                            return getDynamicHost(URLConfig.DYNAMIC_GET_HOST_URL);
                        } else if (count >= DYNAMIC_GET_HOST_MAX_COUNT && count < DYNAMIC_GET_HOST_MAX_COUNT + DYNAMIC_GET_HOST_BACKUP_MAX_COUNT) {
                            return getDynamicHost(URLConfig.DYNAMIC_GET_HOST_URL_BACKUP);
                        } else {
                            // TODO: 弹窗重试
                            G.LogMgr.error("动态获取所有主机失败");
                        }
                    }
                });
            }

            getDynamicHost(URLConfig.DYNAMIC_GET_HOST_URL);
        });
    }

    /**
     * 游戏启动
     */
    private async launch(): Promise<void> {
        await this.initPersist();
        await this.initHost();

        this.into();
    }

    /**
     * 进入游戏
     */
    private into(): void {
        G.UIMgr.openScene({
            sceneClass: LoginScene,
        });
    }

    private onClickOpenWaiting(): void {
        G.UIMgr.openWaiting();
    }

}