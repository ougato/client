export default class TypeUtils {

    /**
     * 判断是否数组
     * @param data {any} 数据
     * @returns 是否数组
     */
    public static isArray(data: any): boolean {
        if (Array.isArray) {
            return Array.isArray(data);
        } else {
            return Object.prototype.toString.call(data) === '[object Array]';
        }
    }

    /**
     * 判断是否为空
     * @param data {any} 数据
     * @returns 是否为空
     */
    public static isNull(data: any): boolean {
        return data === undefined || data === null;
    }

}