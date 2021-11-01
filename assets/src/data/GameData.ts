/*
 * Author       : ougato
 * Date         : 2021-10-29 17:37:24
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 15:16:26
 * FilePath     : /client/assets/src/data/GameData.ts
 * Description  : 游戏数据
 */

import BaseData from "../core/base/BaseData";
import * as WebSocketInterface from "../core/interface/WebSocketInterface";

export default class GameData extends BaseData {

    // 版本号
    public version: string = null;
    // 动态校验码
    public token: string = null;
    // 静态校验码
    public refreshToken: string = null;
    // 渠道号
    public channel: string = null;
    // 游戏长连接服务器列表
    public webSocketList: WebSocketInterface.PartInfo[] = null;

    constructor() {
        super();

    }

    public destroy(): void {
        this.version = null;
        this.token = null;
        this.refreshToken = null;
        this.channel = null;
        this.webSocketList = null;
    }

}