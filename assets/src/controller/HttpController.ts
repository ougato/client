/*
 * Author       : ougato
 * Date         : 2021-10-30 21:42:07
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 02:49:04
 * FilePath     : /client/assets/src/controller/HttpController.ts
 * Description  : Http 控制器
 */

import * as HttpParamInterface from "../interface/HttpParamInterface";

import BaseController from "../core/base/BaseController";
import HttpRequest from "../core/http/HttpRequest";
import HostData from "../data/HostData";
import * as APIConfig from "../config/APIConfig";
import * as HttpInterface from "../core/interface/HttpInterface";
import * as HttpDefine from "../core/define/HttpDefine";
import GameData from "../data/GameData";
import DeviceData from "../data/DeviceData";
import NativeUtils from "../core/utils/NativeUtils";

export default class HttpController extends BaseController {

    constructor() {
        super();


    }

    /**
     * 获取唯一码请求
     * @returns {Promise<HttpInterface.ResponseInfo>} 响应数据
     */
    public async uuidRequest(): Promise<HttpInterface.ResponseInfo> {
        let hostData: HostData = G.DataMgr.get(HostData);
        let url: string = hostData.loginHost + APIConfig.GET_UUID;
        let responseInfo: HttpInterface.ResponseInfo = await HttpRequest.get(url);
        if (responseInfo.state === HttpDefine.StateType.OK && responseInfo.body.code === 0) {
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
        let hostData: HostData = G.DataMgr.get(HostData);
        let url: string = hostData.loginHost + APIConfig.LOGIN;
        let responseInfo: HttpInterface.ResponseInfo = await HttpRequest.post(url, JSON.stringify(requestData));
        if (responseInfo.state === HttpDefine.StateType.OK && responseInfo.body.code === 0) {
            let responseData: HttpParamInterface.HttpLoginResponse = responseInfo.body.data;
            let gameData: GameData = G.DataMgr.get(GameData);
            gameData.token = responseData.token;
            gameData.refreshToken = responseData.refresh_token;
        }
        return responseInfo;
    }

    /**
     * 获取长链接请求
     * @returns {Promise<HttpInterface.ResponseInfo>} 响应数据
     */
    public async getWebSocketRequest(header: HttpParamInterface.HttpGetWebSocketHeader): Promise<HttpInterface.ResponseInfo> {
        let requestHeader: Map<string, string> = new Map();
        requestHeader.set("Jy-Game-Access-Token", header.token);
        if (header.clientVersion === null) {
            requestHeader.set("Jy-Game-Version", "");
        }
        if (header.channel === null) {
            requestHeader.set("Jy-Game-Utm-Source", "");
        }
        if (header.os === null) {
            requestHeader.set("Jy-Game-Os", "");
        }

        let requestParam: HttpInterface.RequestParam = {
            requestHeader: requestHeader,
        }
        let hostData: HostData = G.DataMgr.get(HostData);
        let url: string = hostData.loginHost + APIConfig.GET_WEBSOCKET_URL;
        let responseInfo: HttpInterface.ResponseInfo = await HttpRequest.get(url, requestParam);
        if (responseInfo.state === HttpDefine.StateType.OK && responseInfo.body.code === 0) {
            console.log("");
        }
        return responseInfo;
    }

}