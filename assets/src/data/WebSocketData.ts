/*
 * Author       : ougato
 * Date         : 2021-11-02 15:15:06
 * LastEditors  : ougato
 * LastEditTime : 2021-11-02 15:42:27
 * FilePath     : /client/assets/src/data/WebSocketData.ts
 * Description  : 网络长连接数据
 */

import BaseData from "../core/base/BaseData";
import * as NetworkInterface from "../core/interface/NetworkInterface";

export default class WebSocketData extends BaseData {

    // 当前游戏长连接服务器下标
    private index: number = null;

    // 游戏长连接服务器列表
    public webSocketPartList: NetworkInterface.WebSocketPart[] = null;

    constructor() {
        super();

    }

    public getWebSocketPart(): NetworkInterface.WebSocketPart {
        let webSocketPart: NetworkInterface.WebSocketPart = null;
        if (this.webSocketPartList === null) {
            return webSocketPart;
        }
        
        if (this.webSocketPartList.length <= 0) {
            return webSocketPart;
        }

        if (this.index === null) {
            this.index = 0;
        }

        return this.webSocketPartList[this.index];
    }

    public switchWebSocketPart(): NetworkInterface.WebSocketPart {
        let webSocketPart: NetworkInterface.WebSocketPart = null;
        if (this.webSocketPartList === null) {
            return webSocketPart;
        }

        if (this.webSocketPartList.length <= 0) {
            return webSocketPart;
        }

        if (this.index === null) {
            this.index = 0;
        } else {
            ++this.index % this.webSocketPartList.length;
        }

        return this.webSocketPartList[this.index];
    }

}