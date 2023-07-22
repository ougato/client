/*
 * Author       : ougato
 * Date         : 2022-09-18 19:15:52
 * LastEditors  : ougato
 * LastEditTime : 2022-11-25 18:32:17
 * FilePath     : /client/assets/src/core/utils/TypeUtils.ts
 * Description  : 
 */

export default class TypeUtils {

    /**
     * 判断是否数组
     * @param data {T} 数据
     * @returns 是否数组
     */
    public static isArray<T>(data: T): boolean {
        if (Array.isArray) {
            return Array.isArray(data);
        } else {
            return Object.prototype.toString.call(data) === '[object Array]';
        }
    }

    /**
     * 判断是否为空
     * @param data {T} 数据
     * @returns 是否为空
     */
    public static isNull<T>(data: T): boolean {
        return data === undefined || data === null;
    }

}