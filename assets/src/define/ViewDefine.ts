/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:03:13
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 00:44:08
 * @FilePath     : \client242\assets\src\define\ViewDefine.ts
 * @Description  : 视图路径定义
 */

// 常驻视图
export enum PersistViewDefine {
    LoadingView = "prefab/persist/LoadingView",
    LockTouchView = "prefab/persist/LockTouchView",
    ProgressView = "prefab/persist/ProgressView",
}

// 通用视图
export enum CommonViewDefine {
    // 弹窗视图
    PopupsView = "prefab/common/PopupsView",
    // 提示视图
    TipsView = "prefab/common/TipsView",
    // 滚动公告视图（跑马灯）
    RollNoticeView = "prefab/common/RollNoticeView",
}

// 自定义的视图都放这里
export enum CustomViewDefine {
    // // 登陆视图
    // LoginView = "prefab/LoginView",

    Test1 = "prefab/test/Test1",
    Test2 = "prefab/test/Test2",
}

// 视图定义
export default { ...PersistViewDefine, ...CommonViewDefine, ...CustomViewDefine };