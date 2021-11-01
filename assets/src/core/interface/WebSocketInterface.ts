/*
 * Author       : ougato
 * Date         : 2021-11-01 15:08:47
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 15:16:56
 * FilePath     : /client/assets/src/core/interface/WebSocketInterface.ts
 * Description  : WebSocket 接口
 */

export interface PartInfo {
    // 协议
    protocol?: string,
    // 主机
    host: string,
    // 端口
    port: number,
}