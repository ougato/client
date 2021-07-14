/*
 * Author       : ougato
 * Date         : 2021-07-07 00:56:31
 * LastEditors  : ougato
 * LastEditTime : 2021-07-14 23:09:14
 * FilePath     : /client/assets/src/core/define/UIDefine.ts
 * Description  : 界面定义
 */

// 风格
export enum Style {
    // 默认
    DEFAULT = 0,
}

// 层级间隔
export const LAYER_INTERVAL: number = 100;

// 层级
export enum Layer {
    // 底层
    BOTTOM = 0,
    // 视图层
    VIEW = 1 * LAYER_INTERVAL,
    // 弹窗层
    POPUP = 2 * LAYER_INTERVAL,
    // 顶层
    TOP = 3 * LAYER_INTERVAL,
    // 系统层
    SYSTEM = 4 * LAYER_INTERVAL,
}