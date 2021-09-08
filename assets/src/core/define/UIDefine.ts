/*
 * Author       : ougato
 * Date         : 2021-07-07 00:56:31
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 01:49:57
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

// 画布级的层
export enum CanvasLayer {
    // 场景层（大厅、游戏）
    SCENE = 0 * LAYER_INTERVAL,
    // 常驻层（防触摸、加载转圈、转场进度、跑马灯）
    PERSIST = 1 * LAYER_INTERVAL,
}

// 视图级的层
export enum ViewLayer {
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