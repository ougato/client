/*
 * @Author       : ougato
 * @Date         : 2020-08-10 15:59:46
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-23 01:06:53
 * @FilePath     : \client242\assets\src\define\EventDefine.ts
 * @Description  : 事件定义
 */

// 系统事件定义 范围从 0-10000
export enum SystemEventDefine {
    // 网络连接成功
    WEB_SOCKET_CONNECTED = 0,
    // 网络连接错误
    WEB_SOCKET_ERROR,
    // 网络断开连接
    WEB_SOCKET_CLOSED,
}

// 游戏事件定义 范围从 10001~ 开始
export enum GameEventDefine {
    // 开始游戏
    STRAT_GAME = 10001,
}

export default { ...SystemEventDefine, ...GameEventDefine };