/*
 * Author       : ougato
 * Date         : 2021-11-01 16:16:42
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 16:16:42
 * FilePath     : /client/assets/src/core/define/NetworkDefine.ts
 * Description  : 网络定义
 */

export namespace NetworkDefine {

    // 网络断开状态
    export enum CloseState {
        // 报错后断开
        ERROR_CLOSE = 0,
        // 客户端断开
        CLIENT_CLOSE = 1,
        // 服务器断开
        SERVER_CLOSE = 2,
    }

}