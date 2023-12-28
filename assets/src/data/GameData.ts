/*
 * Author       : ougato
 * Date         : 2021-10-29 17:37:24
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 15:09:48
 * FilePath     : /client/assets/src/data/GameData.ts
 * Description  : 游戏数据
 */

import BaseData from "../core/base/BaseData";
import ClassDecorator from "../core/decorator/ClassDecorator";

@ClassDecorator.classname
export default class GameData extends BaseData {

    // 版本号
    public version: string = null;
    // 动态校验码
    public token: string = null;
    // 静态校验码
    public refreshToken: string = null;
    // 渠道号
    public channel: string = null;
    // 客户端与服务器的动态时差
    public timeDifference: number = null;
    // 客户端与服务器的首次时差（第一次心跳回来的时间差值）
    public timeDifferenceFirst: number = null;

    constructor() {
        super();

    }

    public destroy(): void {
        this.version = null;
        this.token = null;
        this.refreshToken = null;
        this.channel = null;
        this.timeDifference = null;
        this.timeDifferenceFirst = null;
    }

}