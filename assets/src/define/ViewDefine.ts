/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:03:13
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-24 16:20:03
 * @FilePath     : \client242\assets\src\define\ViewDefine.ts
 * @Description  : 视图定义
 */

// 系统视图
export enum SystemViewDefine {
    // 转菊花等待
    LoadingView = "prefab/LoadingView",
    // 锁屏
    LockScreenView = "prefab/LockScreenView",
    // 进度加载
    ProgressView = "prefab/ProgressView",
}

// 自定义的视图都放这里
export enum CustomViewDefine {

}

// 视图定义
export const ViewDefine = { ...SystemViewDefine, ...CustomViewDefine };

// 层级间隔
const ORDER_INTERVAL: number = 100;

// 层级定义
export enum Order {
    BOTTOM = 0,
    UI = 1 * ORDER_INTERVAL,
    POPUP = 2 * ORDER_INTERVAL,
    TOP = 3 * ORDER_INTERVAL,
    SYSTEM = 4 * ORDER_INTERVAL,

}