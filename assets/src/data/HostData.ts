/*
 * Author       : ougato
 * Date         : 2021-10-29 17:39:28
 * LastEditors  : ougato
 * LastEditTime : 2021-11-19 16:06:43
 * FilePath     : /client/assets/src/data/HostData.ts
 * Description  : 主机数据
 */

import BaseData from "../core/base/BaseData";
import ClassDecorator from "../core/decorator/ClassDecorator";

@ClassDecorator.classname
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

    /**
     * 获取不同平台的 app 整包链接
     * @return {string} 整包链接
     */
    public getAppURL(): string {
        let appURL: string = ""
        switch (cc.sys.os) {
            case cc.sys.OS_ANDROID:
                appURL = "这里需要填写对应下载链接";
                break;
            case cc.sys.OS_IOS:
                appURL = "这里需要填写对应下载链接";
                break;
            default:
                console.warn(`当前平台 ${cc.sys.os} 未定义整包下载链接`);
                break;
        }
        return appURL;
    }

    /**
     * 获取不同平台的商店链接
     * @return {string} 商城链接
     */
     public getAppStoreURL(): string {
        let appStoreURL: string = ""
        switch (cc.sys.os) {
            case cc.sys.OS_ANDROID:
                appStoreURL = "这里需要填写对应商城链接";
                break;
            case cc.sys.OS_IOS:
                appStoreURL = "这里需要填写对应商城链接";
                break;
            default:
                console.warn(`当前平台 ${cc.sys.os} 未定义整包下载链接`);
                break;
        }
        return appStoreURL;
    }

}