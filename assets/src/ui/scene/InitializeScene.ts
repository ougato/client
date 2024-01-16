/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2024-01-16 15:24:20
 * FilePath     : /client/assets/src/ui/scene/InitializeScene.ts
 * Description  : 登陆场景
 */

import BaseScene from "../../core/base/BaseScene";
import HallController from "../../controller/HallController";
import DeviceData from "../../data/DeviceData";
import { RecordDefine } from "../../core/define/RecordDefine";
import BlockPersist from "../persist/BlockPersist";
import DialogPersist from "../persist/DialogPersist";
import LoadingPersist from "../persist/LoadingPersist";
import WaitingPersist from "../persist/WaitingPersist";
import HttpRequest from "../../core/http/HttpRequest";
import { HttpInterface } from "../../core/interface/HttpInterface";
import { HttpParamInterface } from "../../interface/HttpParamInterface";
import HttpUtils from "../../utils/HttpUtils";
import HostData from "../../data/HostData";
import { URLConfig } from "../../config/URLConfig";
import { UpdateDefine } from "../../core/define/UpdateDefine";
import { UpdateInterface } from "../../core/interface/UpdateInterface";
import TypeUtils from "../../core/utils/TypeUtils";
import NativeUtils from "../../core/utils/NativeUtils";
import ExampleScene from "./ExampleScene";

// 请求获取动态主机最大次数
const GET_DYNAMIC_HOST_MAX_COUNT: number = 3;
// 请求获取动态备用主机最大次数
const GET_DYNAMIC_HOST_BACKUP_MAX_COUNT: number = 3;
// 请求获取设备唯一码最大次数
const GET_UUID_MAX_COUNT = 3;

const { ccclass, property } = cc._decorator;

@ccclass
export default class InitializeScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "prefab/scene/InitializeScene";

    @property(cc.Label)
    private labDesc: cc.Label = null;

    @property(cc.ProgressBar)
    private pgbPercent: cc.ProgressBar = null;

    onLoad() {
        super.onLoad();

        this.init();
    }

    start() {

    }

    protected register(): void {

    }

    protected async init(): Promise<void> {
        await this.initDB();
        await this.initRecord();
        await this.initPersist();
        await this.initUpdate();
        await this.initHost();
        await this.initDevice();
    }

    private async initDB(): Promise<void> {
        this.labDesc.string = "初始化数据库";
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            G.DBMgr.init().then((isOK: boolean) => {
                if (!isOK) {
                    this.labDesc.string = "初始化数据库失败";
                }
                resolve();
            });
        });
    }

    private initRecord(): Promise<void> {
        this.labDesc.string = "初始化录像";
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            G.RecordMgr.start(RecordDefine.RecordType.VIDEO);
            resolve();
        });
    }

    /**
     * 初始化常驻
     * @returns {Promise<void>}
     */
    private async initPersist(): Promise<void> {
        this.labDesc.string = "初始化常驻节点";
        G.UIMgr.openTouch();
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            Promise.all([G.UIMgr.addPersist(BlockPersist), G.UIMgr.addPersist(DialogPersist), G.UIMgr.addPersist(LoadingPersist), G.UIMgr.addPersist(WaitingPersist)]).then(() => {
                resolve();
            }).catch((reason: any) => {
                // TODO: 弹窗重试
                this.labDesc.string = "初始化常驻节点失败";
            });
        });
    }

    /**
     * 初始化游戏中用到的动态主机配置
     * @returns {Promise<void>}
     */
    private async initHost(): Promise<void> {
        this.labDesc.string = "初始化服务配置";
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
                        let hostData: HostData = G.DataMgr.get(HostData);
                        hostData.loginHost = responseData.loginURL;
                        hostData.gameHost = responseData.gameURL;
                        hostData.appHost = responseData.appURL;
                        hostData.hotUpdateHost = responseData.hotUpdateURL;
                        hostData.payHost = responseData.payURL;
                        hostData.resHost = responseData.resURL;
                        count = 0;
                        resolve();
                    } else {
                        ++count
                        if (count < GET_DYNAMIC_HOST_MAX_COUNT) {
                            return getDynamicHost(URLConfig.GET_DYNAMIC_HOST_URL);
                        } else if (count < GET_DYNAMIC_HOST_MAX_COUNT + GET_DYNAMIC_HOST_BACKUP_MAX_COUNT) {
                            return getDynamicHost(URLConfig.GET_DYNAMIC_HOST_URL_BACKUP);
                        } else {
                            // TODO: 弹窗重试
                            this.labDesc.string = "初始化服务配置失败";
                            G.UIMgr.openDialog({
                                content: "是否重新加载？",
                                confirmCallback: () => {
                                    G.UIMgr.openScene({
                                        sceneClass: InitializeScene,
                                        isForce: true,
                                    })
                                }
                            })
                        }
                    }
                });
            }

            getDynamicHost(URLConfig.GET_DYNAMIC_HOST_URL);
        });
    }

    /**
     * 初始化更新
     */
    private async initUpdate(): Promise<void> {
        if (!cc.sys.isNative) {
            // G.LogMgr.log("非原生平台不进行文件热更新");
            return;
        }

        this.labDesc.string = "初始化更新";
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            /**
             * 闭包错误
             * @param state 
             */
            let error: (state: UpdateDefine.ErrorState) => void = (state: UpdateDefine.ErrorState) => {
                let strError: string = "";
                switch (state) {
                    case UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST:
                    case UpdateDefine.ErrorState.DOWNLOAD_MANIFEST:
                    case UpdateDefine.ErrorState.PARSE_MANIFEST:
                    case UpdateDefine.ErrorState.DECOMPRESS_FILE:
                    case UpdateDefine.ErrorState.DOWNLOAD_FILE:
                    case UpdateDefine.ErrorState.VERIFY_FILE:
                    case UpdateDefine.ErrorState.RETRY:
                        strError = "下载失败，是否重试？"
                        break;
                    default:
                        return;
                }

                // TODO: 弹窗
                // G.ViewMgr.openPopups("错误", strError, this.node, async () => {
                //     let updateResult: UpdateInterface.UpdateResult = await G.UpdateMgr.retry();
                //     if (!TypeUtils.isNull(updateResult.error)) {
                //         return error(updateResult.error);
                //     }

                //     if (TypeUtils.isNull(updateResult.state)) {
                //         reject("热更重试结果异常");
                //     }

                //     switch (updateResult.state) {
                //         case UpdateDefine.UpdateState.UPDATE_FINISH:
                //             cc.game.restart();
                //             break;
                //         case UpdateDefine.UpdateState.ALREADY_NEW:
                //             resolve();
                //             break;
                //         case UpdateDefine.UpdateState.AGENT:
                //             check();
                //             break;
                //         default:
                //             console.warn("重试返回状态异常");
                //             break;
                //     }
                // });
            }

            /**
             * 闭包更新
             */
            let update: Function = async () => {
                G.LogMgr.log("正在下载资源");
                // G.UIMgr.openView(ViewDefine.UpdateView);

                let updateResult: UpdateInterface.UpdateResult = await G.UpdateMgr.update();
                if (!TypeUtils.isNull(updateResult.error)) {
                    return error(updateResult.error);
                }

                if (TypeUtils.isNull(updateResult.state)) {
                    reject("热更更新结果异常");
                }

                switch (updateResult.state) {
                    case UpdateDefine.UpdateState.UPDATE_FINISH:
                        cc.game.restart();
                        break;
                    case UpdateDefine.UpdateState.ALREADY_NEW:
                        resolve();
                        break;
                    case UpdateDefine.UpdateState.AGENT:
                        check();
                        break;
                    default:
                        console.warn("更新返回状态异常");
                        break;
                }
            }

            /**
             * 闭包检查
             */
            let check: Function = async () => {
                G.LogMgr.log("正在检测版本信息");

                if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
                    G.LogMgr.warn("网络错误");
                    // TODO: 弹窗
                    // return G.ViewMgr.openPopups("错误", `网络异常，请检查网络后重试`, this.node, () => {
                    //     check();
                    // });
                }

                let checkResult: UpdateInterface.CheckResult = await G.UpdateMgr.check();

                if (!TypeUtils.isNull(checkResult.error)) {
                    return error(checkResult.error);
                }

                if (TypeUtils.isNull(checkResult.state)) {
                    reject("热更检测结果异常");
                }

                switch (checkResult.state) {
                    case UpdateDefine.CheckState.NOT:
                        resolve();
                        break;
                    case UpdateDefine.CheckState.QUIET: {
                        update();
                    }
                        break;
                    case UpdateDefine.CheckState.PROMPT: {
                        // TODO: 弹窗
                        // G.ViewMgr.openPopups("资源下载", `当前使用流量下载: ${UnitUtils.bytesToFileUnit(checkResult.downloadBytes)}`, this.node, () => {
                        //     update();
                        // });
                    }
                        break;
                    case UpdateDefine.CheckState.URL: {
                        G.LogMgr.log("正在下载安装包");
                        cc.sys.openURL(G.DataMgr.get(HostData).getAppURL());
                    }
                        break;
                    case UpdateDefine.CheckState.STORE: {
                        G.LogMgr.log("需要商店下载");
                        // TODO: 弹窗
                        // G.ViewMgr.openPopups("版本下载", `需要到商店下载 APP`, this.node, () => {
                        //     cc.sys.openURL(G.DataMgr.get(HostData).getAppStoreURL());
                        // });
                    }
                        break;
                    default: {
                        console.warn(`无法找到热更检测结果 ${checkResult.state}`);
                    }
                        break;
                }
            }

            check();
        })

    }

    /**
     * 初始化设备数据
     */
    private async initDevice(): Promise<void> {
        this.labDesc.string = "初始化设备";

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

    // update (dt) {}
}
