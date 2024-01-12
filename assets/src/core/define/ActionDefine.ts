/*
 * Author       : ougato
 * Date         : 2023-12-28 11:29:36
 * LastEditors  : ougato
 * LastEditTime : 2024-01-12 20:33:12
 * FilePath     : /client/assets/src/core/define/ActionDefine.ts
 * Description  : 用户行为定义
 */

export namespace ActionDefine {

    // 行为类型
    export enum Type {
        TOUCH_START = 0,
        TOUCH_MOVE,
        TOUCH_END,
        TOUCH_CANCEL,
    }

}