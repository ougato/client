/*
 * Author       : ougato
 * Date         : 2022-11-25 18:31:24
 * LastEditors  : ougato
 * LastEditTime : 2022-11-25 18:40:53
 * FilePath     : /client/assets/src/core/utils/ConverUtils.ts
 * Description  : 转换工具
 */

export class ConverUtils {

    /**
     * 枚举 Key 转成数组
     * @param data {T} 枚举数据
     * @returns {string[]} Key 数组
     */
    public static converEnumToArrayGetKey<T>(data: T): string[] {
        let array: any[] = Object.keys(data).map((key, index) => {
            return data[key];
        });

        return array.slice(0, array.length / 2);
    }

    /**
     * 枚举 Value 转成数组
     * @param data {K} 枚举数据
     * @returns {V[]} Value 数组
     */
    public static converEnumToArrayGetValue<K, V>(data: K): V[] {
        let array: any[] = Object.keys(data).map((key, index) => {
            return data[key];
        });

        return array.slice(array.length / 2, array.length);
    }

    /**
     * 保留小数点后的位数（不四舍五入）
     * @param value {number | string} 需要保留的小数
     * @param digit {number} 小数后的位数（默认 2 位）
     * @return {number} 转换后的值
     */
    public static toFixed(value: number | string, digit: number = 2): number {
        if (digit <= 0) {
            digit = 2;
        }

        let num: number = Number(value)
        if (value === null || value === undefined || isNaN(num)) {
            return num;
        }

        let multiple: number = 1;
        for (let i: number = 0; i < digit; ++i) {
            multiple *= 10;
        }

        let result: number = Math.floor(num * multiple) / multiple;
        return result;
    }

    /**
     * 小数点后填充 0 
     * @param value {number | string} 数字
     * @param digit {number} 小数点后位数
     * @returns {string} 填充后的值
     */
    public static fill0(value: number | string, digit: number): string {
        const POINT: string = ".";
        const ZERO: string = "0";
        let strResult: string = ""
        if (typeof (value) === "string") {
            strResult = value;
        } else {
            strResult = value.toString();
        }
        let pointIndex = strResult.indexOf(POINT);
        let perchCount: number = 0;
        if (pointIndex < 0) {
            perchCount = digit;
            strResult += POINT;
        } else {
            perchCount = digit - (strResult.length - (pointIndex + 1));
        }

        for (let i: number = 0; i < perchCount; ++i) {
            strResult += ZERO;
        }

        return strResult;
    }

}