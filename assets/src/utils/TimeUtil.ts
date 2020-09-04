/*
 * @Author       : ougato
 * @Date         : 2020-08-10 17:16:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 23:19:22
 * @FilePath     : \client242\assets\src\utils\TimeUtil.ts
 * @Description  : 时间工具
 */

export default class TimeUtil {

    /**
     * 记录运行时间
     * @param timestamp 上一个运行时间戳（毫秒）
     * @return {number} 当前时间戳（毫秒）| 运行时间（毫秒）
     */
    public static markTime(timestamp?: number): number {
        let currTime: number = performance.now();
        if (timestamp === undefined) {
            // 开始标记
            return currTime;
        } else {
            // 结束标记
            return currTime - timestamp;
        }
    }
}