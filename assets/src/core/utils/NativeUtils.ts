/*
 * Author       : ougato
 * Date         : 2021-10-12 00:55:14
 * LastEditors  : ougato
 * LastEditTime : 2021-10-12 01:06:26
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

}