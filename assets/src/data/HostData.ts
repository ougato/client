/*
 * Author       : ougato
 * Date         : 2021-10-29 17:39:28
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 11:22:04
 * FilePath     : /client/assets/src/data/HostData.ts
 * Description  : 主机数据
 */

import BaseData from "../core/base/BaseData";

export default class HostData extends BaseData {

    // 登陆主机
    public loginHost: string = null;
    // 游戏主机
    public gameHost: string = null;
    // 下载 APP 主机
    public appHost: string = null;
    // 热更主机
    public hotUpdateHost: string = null;
    // 支付主机
    public payHost: string = null;
    // 资源服主机
    public resHost: string = null;

    constructor() {
        super();

    }

    public destroy(): void {
        this.loginHost = null;
        this.gameHost = null;
        this.appHost = null;
        this.hotUpdateHost = null;
        this.payHost = null;
        this.resHost = null;
    }

}