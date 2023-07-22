/*
 * Author       : ougato
 * Date         : 2021-11-01 16:09:58
 * LastEditors  : ougato
 * LastEditTime : 2022-09-18 18:34:01
 * FilePath     : /client/assets/src/core/interface/NetworkInterface.ts
 * Description  : 网络接口
 */

export namespace NetworkInterface {

    export interface WebSocketPart {
        // 协议
        protocol?: WebSocketProtocol,
        // 主机
        host: string,
        // 端口
        port: string,
    }

    // 传输数据
    export interface TransmitData {
        // 协议名
        action: string,
        // 序列号（客户端请求 A 协议时自增的值，服务端响应 A 协议时返回相同的值）
        serial: number,
        // 协议号对应的包序列化后的二进制数组
        packet: Uint8Array,
    }

    // 转换数据
    export interface TransferData {
        // 协议名
        msgName: string,
        // 序列号（客户端请求 A 协议时自增的值，服务端响应 A 协议时返回相同的值）
        serial: number,
        // 协议号对应的包序列化后的二进制数组
        msgData?: any,
    }

    // 消息类
    export interface ProtoClass {
        prototype?: any,
        name: string,
        create: (properties?: any) => any;
        encode: (m: any, w?: any) => any;
        encodeDelimited: (message: any, writer?: any) => any;
        decode: (r: (any | Uint8Array), l?: number) => any;
        decodeDelimited: (reader: (any | Uint8Array)) => any;
        verify: (m: { [k: string]: any }) => (string | null);
    }

}