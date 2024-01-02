/*
 * Author       : ougato
 * Date         : 2021-07-07 00:56:31
 * LastEditors  : ougato
 * LastEditTime : 2024-01-02 11:24:45
 * FilePath     : /client/assets/src/core/define/UIDefine.ts
 * Description  : 界面定义
 */

export namespace UIDefine {

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
        // 常驻层（防点击、加载转圈、转场进度、跑马灯，触摸）
        PERSIST = 1 * LAYER_INTERVAL,
    }

    // 视图级的层
    export enum ViewLayer {
        // 底层
        BOTTOM = 0,
        // 视图层
        VIEW = 1 * LAYER_INTERVAL,
        // 顶层
        TOP = 2 * LAYER_INTERVAL,
        // 弹窗层
        POPUP = 3 * LAYER_INTERVAL,
        // 系统层
        SYSTEM = 4 * LAYER_INTERVAL,
    }

    // 常驻层级
    export enum PersistLayer {
        // 防点击
        BLOCK = 0,
        // 对话框
        DIALOG,
        // 等待
        WAITING,
        // 加载
        LOADING,
        // 模拟触摸
        SIMULATE,
        // 触摸
        TOUCH,
    }

    // 对话框模式
    export enum DialogMode {
        // 队列（如果当前有对话框显示，则当前加入的排到队列后面）
        REAR = 0,
        // 插入（挂起当前对话框，把现在插入的展示出来）
        FRONT = 1,
    }

}