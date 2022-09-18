/*
 * Author       : ougato
 * Date         : 2021-11-02 15:15:06
 * LastEditors  : ougato
 * LastEditTime : 2022-09-18 18:38:13
 * FilePath     : /client/assets/src/data/WebSocketData.ts
 * Description  : 网络长连接数据
 */

import BaseData from "../core/base/BaseData";
import ClassDecorator from "../core/decorator/ClassDecorator";
import { NetworkInterface } from "../core/interface/NetworkInterface";

@ClassDecorator.classname
export default class WebSocketData extends BaseData {

    // 当前游戏长连接服务器下标
    private index: number = null;

    // 游戏长连接服务器列表
    public webSocketPartList: NetworkInterface.WebSocketPart[] = null;

    constructor() {
        super();

        // 测试代码，正式删除
        if (CC_DEV) {
            // this.webSocketPartList = [
            //     {
            //         protocol: "ws",
            //         // host: "192.168.11.239",
            //         host: "192.168.11.213",
            //         port: "9403",
            //     }
            // ]
        }
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