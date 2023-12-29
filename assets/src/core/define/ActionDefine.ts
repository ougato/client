/*
 * Author       : ougato
 * Date         : 2023-12-28 11:29:36
 * LastEditors  : ougato
 * LastEditTime : 2023-12-29 17:57:21
 * FilePath     : /client/assets/src/core/define/ActionDefine.ts
 * Description  : 用户行为定义
 */

export namespace ActionDefine {

    // 移动频率间隔（单位：毫秒）
    export const MOVE_INTERVAL_TIME: number = 100;

    // 行为类型
    export enum Type {
        TOUCH_START = 0,
        TOUCH_MOVE,
        TOUCH_END,
        TOUCH_CANCEL,
    }

}