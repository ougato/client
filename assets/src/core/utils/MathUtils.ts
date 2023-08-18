/*
 * Author       : ougato
 * Date         : 2021-08-26 01:42:32
 * LastEditors  : ougato
 * LastEditTime : 2022-11-25 18:32:49
 * FilePath     : /client/assets/src/core/utils/MathUtils.ts
 * Description  : 数学工具
 */

export default class MathUtils {

    /**
     * 随机值
     * @param min {number} 最小值
     * @param max {number} 最大值
     * @returns {number} 随机值
     */
    public static random(min: number, max: number): number {
        return Math.floor(min + Math.random() * (max - min));
    }

}