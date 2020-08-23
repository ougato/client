/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:03:13
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-22 16:41:59
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

// 视图加载完成返回
export type CompleteCallback = () => void;

// 视图加载百分返回
export type ProgressCallback = () => void;