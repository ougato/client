/*
 * Author       : ougato
 * Date         : 2021-11-19 15:45:23
 * LastEditors  : ougato
 * LastEditTime : 2021-11-19 16:07:45
 * FilePath     : /client/assets/src/core/utils/UnitUtils.ts
 * Description  : 单位转换
 */

import { ConverUtils } from "./ConverUtils";

export default class UnitUtils {

    /**
     * 通过字节流大小 转换 文件单位
     * @param bytesSize {number} 字节大小（保留 2 位小数）
     * @return {string} 带文件单位的大小
     */
    public static bytesToFileUnit(bytesSize: number): string {
        // 进位数
        const CARRY: number = 1024;
        // 文件大小单位
        const SYMBOLS: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let value: number = bytesSize;
        let unit: string = SYMBOLS[0];
        let index: number = 0;
        while (index < (SYMBOLS.length - 1) && (value / CARRY) >= 1) {
            value /= CARRY;
            unit = SYMBOLS[++index];
        }

        return `${ConverUtils.toFixed(value)} ${unit}`;
    }

}