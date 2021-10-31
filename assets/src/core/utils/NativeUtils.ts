/*
 * Author       : ougato
 * Date         : 2021-10-12 00:55:14
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 02:20:37
 * FilePath     : /client/assets/src/core/utils/NativeUtils.ts
 * Description  : 原生工具
 */

export default class MathUtils {

    /**
     * 获取电池电量（0-100）百分比
     * @returns {number} 电池电量
     */
    public static getBattery(): number {
        let value: number = 100;

        if (cc.sys.isNative) {
            // cocos 提供了获取电量的接口、暂且使用官方电量获取、如有需求可重写此接口
            value = Math.floor(cc.sys.getBatteryLevel() * 100);
        }

        return value;
    }

    /**
     * 获取网络连接类型
     * @returns {cc.sys.NetworkType} 网络连接类型
     */
    public static getNetType(): cc.sys.NetworkType {
        let value: cc.sys.NetworkType = cc.sys.NetworkType.LAN;

        if (cc.sys.isNative) {
            value = cc.sys.getNetworkType();
        }

        return value;
    }

    /**
     * 存储设备唯一码
     * @param uuid {string} 设备唯一码
     */
    public static saveUUID(uuid: string): void {
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }

        // TODO: 暂停使用本地存储，后面需要删除
        G.LocalStorageMgr.setItem("LOCAL_UUID", uuid);
        
    }

    /**
     * 获取设备唯一码
     * @returns {string} 设备唯一码
     */
    public static getUUID(): string {
        let value: string = null;
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }

        // TODO: 暂停使用本地存储，后面需要删除
        value = G.LocalStorageMgr.getItem("LOCAL_UUID") as string;

        return value;
    }

    /**
     * 获取系统
     * @returns {string} 系统
     */
    public static getOS(): string {
        let value: string = null;
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }
        return value;
    }

    /**
     * 获取系统版本号
     * @returns {string} 系统版本号
     */
    public static getOSVersion(): string {
        let value: string = null;
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }
        return value;
    }

}