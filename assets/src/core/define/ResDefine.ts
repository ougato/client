/*
 * Author       : ougato
 * Date         : 2021-07-10 01:38:34
 * LastEditors  : ougato
 * LastEditTime : 2021-07-10 04:13:59
 * FilePath     : /client/assets/src/core/define/ResDefine.ts
 * Description  : 资源定义
 */

// 加载方式
export enum LoadMode {
    // 本地加载
    LOCAL = 0,
    // 远程加载
    REMOTE = 1,
}

// 资源状态
export enum ResState {
    // 正在加载
    LOADING = 0,
    // 已经加载
    LOADED = 1,
}