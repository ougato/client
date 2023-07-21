/*
 * Author       : ougato
 * Date         : 2021-11-18 15:08:18
 * LastEditors  : ougato
 * LastEditTime : 2023-07-19 14:27:15
 * FilePath     : /client/assets/src/core/utils/DateUtils.ts
 * Description  : 日期时间工具
 */

export default class DateUtils {

    /** 
     * 时间戳转换日期格式
     * @param format {string} 日期格式字符串
     * @param timestamp {number} 时间戳（单位：秒/毫秒）
     * @returns {string} 格式化后的日期时间
     */
    public static timestampToFormat(format: string = "YYYY-MM-DD hh:mm:ss.SSS", timestamp?: number): string {
        let date = new Date();

        if (timestamp !== null && timestamp !== undefined) {
            date.setTime(timestamp);
        }

        return format
            .replace("YYYY", date.getFullYear().toString())
            .replace("MM", (date.getMonth() + 1).toString().padStart(2, "0"))
            .replace("DD", (date.getDate()).toString().padStart(2, "0"))
            .replace("hh", (date.getHours()).toString().padStart(2, "0"))
            .replace("mm", (date.getMinutes()).toString().padStart(2, "0"))
            .replace("ss", (date.getSeconds()).toString().padStart(2, "0"))
            .replace("SSS", date.getMilliseconds().toString().padStart(3, "0"));
    }

}