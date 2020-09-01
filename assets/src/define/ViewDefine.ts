/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:03:13
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-01 23:23:44
 * @FilePath     : \client242\assets\src\define\ViewDefine.ts
 * @Description  : 视图路径定义
 */

// 通用视图
enum CommonViewDefine {
    // 滚动公告视图（跑马灯）
    RollNoticeView = "prefab/notice/RollNoticeView",
}

// 自定义的视图都放这里
enum CustomViewDefine {
    // 登陆视图
    LoginView = "prefab/LoginView",

    Test1 = "prefab/test/Test1",
    Test2 = "prefab/test/Test2",
}

// 视图定义
export default { ...CommonViewDefine, ...CustomViewDefine };