/*
 * Author       : ougato
 * Date         : 2021-11-19 15:46:54
 * LastEditors  : ougato
 * LastEditTime : 2021-11-19 15:46:54
 * FilePath     : /client/assets/src/core/utils/CommonUtils.ts
 * Description  : 公用工具
 */

import TypeUtils from "./TypeUtils";

export default class CommonUtils {

    /**
     * 保留小数点后的位数（不四舍五入）
     * @param value {number | string} 需要保留的小数
     * @param digit {number} 小数后的位数（默认 2 位）
     * @return {number} 转换后的值
     */
    public static toFixed(value: number | string, digit: number = 2): number {
        if (digit <= 0) {
            console.warn(`bit 参数位数错误：${digit}`);
            return null;
        }

        let num: number = Number(value)
        if (TypeUtils.isNull(value) || isNaN(num)) {
            return null;
        }

        let multiple: number = 1;
        for (let i: number = 0; i < digit; ++i) {
            multiple *= 10;
        }

        let result: number = Math.floor(num * multiple) / multiple;
        return result;
    }

}