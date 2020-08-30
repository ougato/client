/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:03:13
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 17:29:17
 * @FilePath     : \client242\assets\src\define\ViewDefine.ts
 * @Description  : 视图定义
 */

// 通用视图
enum CommonViewDefine {
    // 滚动公告视图（跑马灯）
    RollNoticeView = "prefab/RollNoticeView",
}

// 自定义的视图都放这里
enum CustomViewDefine {
    // 登陆视图
    LoginView = "prefab/LoginView",
}

// 视图定义
export default { ...CommonViewDefine, ...CustomViewDefine };

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