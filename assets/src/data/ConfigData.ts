/*
 * Author       : ougato
 * Date         : 2021-10-29 17:39:28
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 18:32:22
 * FilePath     : /client/assets/src/data/ConfigData.ts
 * Description  : 配置数据
 */

import BaseData from "../core/base/BaseData";

export default class ConfigData extends BaseData {

    // 登陆地址
    public loginURL: string = null;
    // 下载 APP 地址
    public appURL: string = null;
    // 热更地址
    public hotUpdateURL: string = null;
    // 支付地址
    public payURL: string = null;
    // 资源服地址
    public resURL: string = null;

    constructor() {
        super();

    }

    public destroy(): void {
        this.loginURL = null;
        this.appURL = null;
        this.hotUpdateURL = null;
        this.payURL = null;
        this.resURL = null;
    }

}