/*
 * @Author       : ougato
 * @Date         : 2020-08-18 12:02:49
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 16:29:44
 * @FilePath     : \client242\assets\src\define\SceneDefine.ts
 * @Description  : 场景名定义
 */

// 系统场景
export enum SystemSceneDefine {
    // 启动场景
    BootScene = "BootScene",
}

// 自定义的游戏场景都放这里
export enum CustomSceneDefine {
    AccountScene = "AccountScene",
}

// 场景定义
export default { ...SystemSceneDefine, ...CustomSceneDefine };