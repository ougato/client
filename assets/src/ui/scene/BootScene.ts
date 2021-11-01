/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 14:58:08
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import LoginScene from "../view/LoginScene";
import HttpRequest from "../../core/http/HttpRequest";
import LockScreenPersist from "../persist/LockScreenPersist";
import LoadingPersist from "../persist/LoadingPersist";
import WaitingPersist from "../persist/WaitingPersist";
import DialogPersist from "../persist/DialogPersist";
import HostData from "../../data/HostData";
import NativeUtils from "../../core/utils/NativeUtils";
import DeviceData from "../../data/DeviceData";
import HttpUtils from "../../utils/HttpUtils";
import HallController from "../../controller/HallController";
import * as URLConfig from "../../config/URLConfig";
import * as HttpInterface from "../../core/interface/HttpInterface";
import * as HttpParamInterface from "../../interface/HttpParamInterface";

// 请求获取动态主机最大次数
const GET_DYNAMIC_HOST_MAX_COUNT: number = 3;
// 请求获取动态备用主机最大次数
const GET_DYNAMIC_HOST_BACKUP_MAX_COUNT: number = 3;
// 请求获取设备唯一码最大次数
const GET_UUID_MAX_COUNT = 3;

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
        });
    }

    /**
     * 初始化游戏中用到的动态主机配置
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
                    if (HttpUtils.isOK(responseInfo)) {
                        let responseData: HttpParamInterface.HttpDynamicHostResponse = responseInfo.body.data;
                        let hostData: HostData = G.DataMgr.add(HostData);
                        hostData.loginHost = responseData.loginURL;
                        hostData.gameHost = responseData.gameURL;
                        hostData.appHost = responseData.appURL;
                        hostData.hotUpdateHost = responseData.hotUpdateURL;
                        hostData.payHost = responseData.payURL;
                        hostData.resHost = responseData.resURL;
                        count = 0;
                        resolve();
                    } else {
                        if (++count < GET_DYNAMIC_HOST_MAX_COUNT) {
                            return getDynamicHost(URLConfig.GET_DYNAMIC_HOST_URL);
                        } else if (count >= GET_DYNAMIC_HOST_MAX_COUNT && count < GET_DYNAMIC_HOST_MAX_COUNT + GET_DYNAMIC_HOST_BACKUP_MAX_COUNT) {
                            return getDynamicHost(URLConfig.GET_DYNAMIC_HOST_URL_BACKUP);
                        } else {
                            // TODO: 弹窗重试
                            G.LogMgr.error("获取动态主机失败");
                        }
                    }
                });
            }

            getDynamicHost(URLConfig.GET_DYNAMIC_HOST_URL);
        });
    }

    /**
     * 初始化设备数据
     */
    public async initDevice(): Promise<void> {
        /**
         * 初始化设备唯一码
         */
        let initUUID: () => Promise<string> = async (): Promise<string> => {
            return new Promise((resolve: (value: string | PromiseLike<string>) => void, reject: (reason?: any) => void) => {
                // 获取设备唯一码次数
                let count: number = 0
                let getUUID: Function = () => {
                    G.ControllerMgr.get(HallController).uuidRequest().then((responseInfo: HttpInterface.ResponseInfo) => {
                        if (HttpUtils.isOK(responseInfo)) {
                            count = 0;
                            let responseData: HttpParamInterface.HttpGetUUIDResponse = responseInfo.body.data;
                            resolve(responseData.deviceId);
                        } else {
                            if (++count < GET_UUID_MAX_COUNT) {
                                return getUUID();
                            } else {
                                // TODO: 弹窗重试
                                G.LogMgr.error("获取设备唯一码失败");
                            }
                        }
                    });
                }


                let uuid: string = NativeUtils.getUUID();
                if (uuid !== null) {
                    resolve(uuid);
                } else {
                    getUUID();
                }
            });
        }

        let deviceData: DeviceData = G.DataMgr.get(DeviceData);
        deviceData.uuid = await initUUID();
        deviceData.os = NativeUtils.getOS();
        deviceData.osVersion = NativeUtils.getOSVersion();
    }

    /**
     * 游戏启动
     */
    private async launch(): Promise<void> {
        await this.initPersist();
        await this.initHost();
        await this.initDevice();

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

}