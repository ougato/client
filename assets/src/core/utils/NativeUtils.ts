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
     * 本机电量（0-100）
     */
    public static getBattery(): number {
        let value: number = 100;

        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_IOS) {
                
            } else if (cc.sys.os === cc.sys.OS_ANDROID) {

            }
        }

        return value;
    }

}