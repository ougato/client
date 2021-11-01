/*
 * Author       : ougato
 * Date         : 2021-11-01 16:09:58
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 16:13:59
 * FilePath     : /client/assets/src/core/interface/NetworkInterface.ts
 * Description  : 网络接口
 */

export interface WebSocketPart {
    // 协议
    protocol?: string,
    // 主机
    host: string,
    // 端口
    port: number,
}

export interface TransmitData {
    // 协议名
    action : string,
    // 序列号（客户端请求 A 协议时自增的值，服务端响应 A 协议时返回相同的值）
    serial: number,
    // 协议号对应的包序列化后的二进制数组
    packet: ArrayBuffer,
}