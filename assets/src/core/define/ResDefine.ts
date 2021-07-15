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

// 加载类型
export enum LoadType {
    // 资源
    ASSET = 0,
    // 目录
    DIR = 1,
    // 场景 （ 不包含在资源类型内 ）
    SCENE = 2,
}