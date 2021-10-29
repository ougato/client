/*
 * Author       : ougato
 * Date         : 2021-08-04 01:27:48
 * LastEditors  : ougato
 * LastEditTime : 2021-08-04 01:40:02
 * FilePath     : /client/assets/src/core/define/EventDefine.ts
 * Description  : 事件定义
 */

// 资源事件
export enum ResEvent {
    // 资源加载完成事件
    RES_LOAD_COMPLETE = "RES_LOAD_COMPLETE",
    // 资源释放完成事件
    RES_RELEASE_COMPLETE = "RES_RELEASE_COMPLETE",
    // 资源热更新进度
    RES_UPDATE_PROGRESS = "RES_UPDATE_PROGRESS",
}

// 系统事件
export enum NetEvent {
    // 网络正在连接
    NET_WS_CONNECTING = "NET_WS_CONNECTING",
    // 网络连接成功
    NET_WS_CONNECTED = "NET_WS_CONNECTED",
    // 网络连接错误
    NET_WS_ERROR = "NET_WS_ERROR",
    // 网络正在断开
    NET_WS_CLOSING = "NET_WS_CLOSING",
    // 网络连接断开
    NET_WS_CLOSED = "NET_WS_CLOSED",
    // 网络消息超时
    NET_WS_MESSAGE_TIMEOUT = "NET_WS_MESSAGE_TIMEOUT",
    // 网络消息正常
    NET_WS_MESSAGE_NORMAL = "NET_WS_MESSAGE_NORMAL",
    // 网络心跳超时
    NET_WS_PING_TIMEOUT = "NET_WS_PING_TIMEOUT",
    // Http 请求超时
    NET_HTTP_TIMEOUT = "NET_HTTP_TIMEOUT",
    // Http 请求错误
    NET_HTTP_ERROR = "NET_HTTP_ERROR",
    // Http 请求结果错误
    NET_HTTP_CODE_ERROR = "NET_HTTP_CODE_ERROR",
}
