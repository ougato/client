/*
 * Author       : ougato
 * Date         : 2021-10-30 23:12:46
 * LastEditors  : ougato
 * LastEditTime : 2021-11-02 15:50:18
 * FilePath     : /client/assets/src/controller/HallController.ts
 * Description  : 大厅控制器
 */

import BaseController from "../core/base/BaseController";
import HttpRequest from "../core/http/HttpRequest";
import HostData from "../data/HostData";
import GameData from "../data/GameData";
import DeviceData from "../data/DeviceData";
import NativeUtils from "../core/utils/NativeUtils";
import HttpUtils from "../utils/HttpUtils";
import * as APIConfig from "../config/APIConfig";
import * as HttpInterface from "../core/interface/HttpInterface";
import * as HttpParamInterface from "../interface/HttpParamInterface";
import * as NetworkInterface from "../core/interface/NetworkInterface";
import WebSocketData from "../data/WebSocketData";
import * as EventDefine from "../core/define/EventDefine";

// 请求登陆最大次数
const LOGIN_MAX_COUNT: number = 3;
// 请求获取长连接最大次数
const GET_WEBSOCKET_MAX_COUNT: number = 3;

export default class HallController extends BaseController {

    constructor() {
        super();

    }

    public register(): void {
        super.register();

        G.EventMgr.on(EventDefine.NetEvent.NET_WS_CONNECTED, this, this.onNetWsConnected);
    }

    public unregister(): void {
        super.unregister();

    }

    /**
     * 获取唯一码请求
     * @returns {Promise<HttpInterface.ResponseInfo>} 响应数据
     */
    public async uuidRequest(): Promise<HttpInterface.ResponseInfo> {
        let hostData: HostData = G.DataMgr.get(HostData);
        let url: string = hostData.loginHost + APIConfig.GET_UUID;
        let responseInfo: HttpInterface.ResponseInfo = await HttpRequest.get(url);
        if (HttpUtils.isOK(responseInfo)) {
            let responseData: HttpParamInterface.HttpGetUUIDResponse = responseInfo.body.data;
            let deviceData: DeviceData = G.DataMgr.get(DeviceData);
            deviceData.uuid = responseData.deviceId;
            NativeUtils.saveUUID(deviceData.uuid);
        }
        return responseInfo;
    }

    /**
     * 登陆请求
     * @param requestData {HttpParamInterface.HttpLoginRequest} 请求数据
     * @returns {Promise<HttpInterface.ResponseInfo>} 响应数据
     */
    public async loginRequest(requestData: HttpParamInterface.HttpLoginRequest): Promise<HttpInterface.ResponseInfo> {
        return new Promise((resolve: (value: HttpInterface.ResponseInfo | PromiseLike<HttpInterface.ResponseInfo>) => void, reject: (reason?: any) => void) => {
            // 登陆次数
            let count: number = 0
            let loginRequest: Function = () => {
                let hostData: HostData = G.DataMgr.get(HostData);
                let url: string = hostData.loginHost + APIConfig.LOGIN;

                HttpRequest.post(url, JSON.stringify(requestData)).then((responseInfo: HttpInterface.ResponseInfo) => {
                    if (HttpUtils.isOK(responseInfo)) {
                        let responseData: HttpParamInterface.HttpLoginResponse = responseInfo.body.data;
                        let gameData: GameData = G.DataMgr.get(GameData);
                        gameData.token = responseData.token;
                        gameData.refreshToken = responseData.refresh_token;
                        count = 0;
                        resolve(responseInfo);
                    } else {
                        if (++count < LOGIN_MAX_COUNT) {
                            loginRequest();
                        } else {
                            // TODO: 弹窗重试
                            G.LogMgr.error(`登陆失败 +${count}`);
                        }
                    }
                });
            }

            loginRequest();
        });
    }

    /**
     * 获取长链接请求
     * @returns {Promise<HttpInterface.ResponseInfo>} 响应数据
     */
    public async getWebSocketRequest(headerData: HttpParamInterface.HttpGetWebSocketHeader): Promise<HttpInterface.ResponseInfo> {
        return new Promise((resolve: (value: HttpInterface.ResponseInfo | PromiseLike<HttpInterface.ResponseInfo>) => void, reject: (reason?: any) => void) => {
            // 获取长链接次数
            let count: number = 0
            let getWebSocketRequest: Function = () => {
                let requestHeader: Map<string, string> = new Map();
                requestHeader.set("Jy-Game-Access-Token", headerData.token);
                if (headerData.clientVersion === null) {
                    requestHeader.set("Jy-Game-Version", "");
                }
                if (headerData.channel === null) {
                    requestHeader.set("Jy-Game-Utm-Source", "");
                }
                if (headerData.os === null) {
                    requestHeader.set("Jy-Game-Os", "");
                }

                let requestParam: HttpInterface.RequestParam = {
                    requestHeader: requestHeader,
                }

                let hostData: HostData = G.DataMgr.get(HostData);
                let url: string = hostData.gameHost + APIConfig.GET_WEBSOCKET_URL;
                HttpRequest.get(url, requestParam).then((responseInfo: HttpInterface.ResponseInfo) => {
                    if (HttpUtils.isOK(responseInfo)) {
                        count = 0;
                        let webSocketData: WebSocketData = G.DataMgr.get(WebSocketData);
                        webSocketData.webSocketPartList = responseInfo.body.data;
                        resolve(responseInfo);
                    } else {
                        if (++count < GET_WEBSOCKET_MAX_COUNT) {
                            getWebSocketRequest();
                        } else {
                            // TODO: 弹窗重试
                            G.LogMgr.error(`获取长连接失败 +${count}`);
                        }
                    }
                });
            }

            getWebSocketRequest();
        });
    }

    /**
     * 连接游戏服务器
     * @param isSwitchWebSocket {boolean} 是否更换线路
     */
    public connect(isSwitchWebSocket: boolean = false): void {
        let webSocketData: WebSocketData = G.DataMgr.get(WebSocketData);
        let webSocketPart: NetworkInterface.WebSocketPart = null;

        if (isSwitchWebSocket) {
            webSocketPart = webSocketData.switchWebSocketPart();
        } else {
            webSocketPart = webSocketData.getWebSocketPart();
        }

        if (webSocketPart === null) {
            // TODO: 错误弹窗
            G.LogMgr.error(`没有可连接的 WebSocket 地址`);
            return;
        }

        G.NetworkMgr.connect(webSocketPart.protocol, webSocketPart.host, webSocketPart.port);
    }

    /**
     * 网络连接成功
     */
    private onNetWsConnected(): void {

    }
    
}