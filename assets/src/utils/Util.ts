/*
 * @Author       : ougato
 * @Date         : 2020-09-04 16:04:51
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 23:30:11
 * @FilePath     : \client242\assets\src\utils\Util.ts
 * @Description  : 工具类
 */

import Logger from "../core/machine/Logger";

export default class Util {

    /**
     * 保留小数点后的位数（不四舍五入）
     * @param value {number | string} 需要保留的小数
     * @param bit {number} 小数后的位数（默认 2 位）
     * @return {number}
     */
    public static toFixed(value: number | string, bit: number = 2): number {
        if (bit <= 0) {
            Logger.getInstance().warn(`bit 参数位数错误：${bit}`);
            return null;
        }

        let num: number = Number(value)
        if (value === null || value === undefined || isNaN(num)) {
            return null;
        }

        let multiple: number = 1;
        for (let i: number = 0; i < bit; ++i) {
            multiple *= 10;
        }

        let result: number = Math.floor(num * multiple) / multiple;
        return result;
    }
}