/*
 * Author       : ougato
 * Date         : 2021-11-01 15:57:27
 * LastEditors  : ougato
 * LastEditTime : 2021-11-02 16:43:03
 * FilePath     : /client/assets/src/core/manager/network/NetworkManager.ts
 * Description  : 网络管理器
 */

import BaseManager from "../../base/BaseManager";
import NetworkMessageTimer from "./NetworkMessageTimer";
import * as NetworkInterface from "../../../core/interface/NetworkInterface";
import * as NetworkDefine from "../../define/NetworkDefine";
import * as EventDefine from "../../../core/define/EventDefine";
import Proto = require("../../../protobuf/Proto");

// 序列号 占用字节大小（4 byte）
const SERIAL_LENGTH_BYTE_SIZE: number = 1;
// 协议名长度 占用字节大小（1 byte）
const MSG_NAME_LENGTH_BYTE_SIZE: number = 1;
// 消息响应超时时间（单位：秒）
const MSG_RESPONSE_TIMEOUT_SEC: number = 1;
// 消息超时等待时间（单位：秒）
const MSG_WAIT_TIMEOUT_SEC: number = 3;
// 心跳超时时间（单位：秒）
const PING_TIMEOUT_SEC: number = 10;
// 最大序列号
const MAX_SERIAL: number = 254;

export default class NetworkManager extends BaseManager {

    private static s_instance: NetworkManager = null;

    // WebSocket
    private m_websocket: WebSocket = null;
    // 网络注册结构 Mao<消息名, Map<注册脚本对象, 回调方法>>
    private m_messageCallbackMap: Map<string, Map<any, Function>> = null;
    // 消息响应超时定时器
    private m_networkMessageTimer: NetworkMessageTimer = null;
    // 心跳超时定时器 ID
    private m_pingTimerId: NodeJS.Timeout = null;
    // 消息超时等待定时器 ID
    private m_messageWaitTimerId: NodeJS.Timeout = null;
    // 发送累加序列号
    private m_serial: number = 0;
    // 请求数据列表 Map<序列号, 网络数据结构>
    private m_requestDataMap: Map<number, NetworkInterface.TransferData> = null;
    // 网络消息超时 Map<序列号, 网络数据结构>
    private m_messageTimeoutMap: Map<number, NetworkInterface.TransferData> = null;
    // 网络断开状态
    private m_closeState: NetworkDefine.CloseState = null;

    public static getInstance(): NetworkManager {
        if (this.s_instance === null) {
            this.s_instance = new NetworkManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    constructor() {
        super();

        this.m_messageCallbackMap = new Map();
        this.m_networkMessageTimer = new NetworkMessageTimer(this.onMessageTimeout.bind(this));
        this.m_requestDataMap = new Map();
        this.m_messageTimeoutMap = new Map();
    }

    private initClose(): void {
        this.m_websocket = null;
        this.m_closeState = null;
        this.m_serial = 0;
        this.stopAllTimer();
        this.m_requestDataMap.clear();
        this.m_messageTimeoutMap.clear();
    }

    /**
     * 注册网络
     * @param msgClass {any} 消息类
     * @param caller {any} 注册者的 this 对象
     * @param callback {Function} 监听回调函数
     */
    public on(msgClass: any, caller: any, callback: Function): void {
        let msgName: string = msgClass.name;
        if (this.m_messageCallbackMap === null) {
            G.LogMgr.warn(`注册 ${msgName} 网络失败`);
            return;
        }

        let listenMap: Map<any, Function> | undefined = this.m_messageCallbackMap.get(msgName);

        if (listenMap === undefined) {
            listenMap = new Map<any, Function>();
            this.m_messageCallbackMap.set(msgName, listenMap);
        }

        let value: Function | undefined = listenMap.get(caller);

        if (value !== undefined && value !== null) {
            G.LogMgr.warn(`${caller.name} 类中，重复注册网络 ${msgName}`);
            return;
        }

        listenMap.set(caller, callback);
    }

    /**
     * 释放网络
     * @param msgClass {any} 消息类
     * @param caller {any} 注册者的 this 对象
     */
    public off(msgClass: any, caller: any): void {
        let msgName: string = msgClass.name;
        if (this.m_messageCallbackMap === null) {
            G.LogMgr.warn(`释放 ${msgName} 网络失败`);
            return;
        }

        let listenMap: Map<any, Function> | undefined = this.m_messageCallbackMap.get(msgName);
        if (listenMap === undefined || listenMap === null) {
            return;
        }

        if (listenMap.has(caller)) {
            listenMap.delete(caller);
        }
    }

    /**
     * 消息超时回调
     * @param serial {number} 超时序列号
     */
    private onMessageTimeout(serial: number): void {
        if (this.m_messageTimeoutMap.size <= 0) {
            G.EventMgr.emit(EventDefine.NetEvent.NET_WS_MESSAGE_TIMEOUT);
            this.startMessageWait();
        }

        let networkData: NetworkInterface.TransferData | undefined = this.m_requestDataMap.get(serial);

        if (networkData === undefined) {
            G.LogMgr.error(`网络超时数据不存在，由于没有任何地方可以删除数据，所以在这里必须有数据`);
            return;
        }

        this.m_messageTimeoutMap.set(serial, networkData);

        G.LogMgr.warn(`消息超时，序列号：[${networkData.serial}] 消息名：[${networkData.msgName}]`);
    }

    /**
     * 心跳超时回调
     */
    private onPingTimeout(): void {
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_PING_TIMEOUT);
        this.stopAllTimer();
        this.close();

        G.LogMgr.warn(`心跳超时，消息名：[${Proto.PingRequest.name}]`);

    }

    /**
     * 连接成功回调
     */
    private onOpen(ev: Event): void {
        G.LogMgr.log(`网络连接成功`);
        this.sendPing();
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CONNECTED);
    }

    /**
     * 接收数据回调
     */
    private onMessage(ev: MessageEvent): void {
        let responseData: NetworkInterface.TransferData = this.decodeData(ev.data);

        // 处理弱网超时消息
        if (this.m_messageTimeoutMap.has(responseData.serial)) {
            this.m_messageTimeoutMap.delete(responseData.serial);
            if (this.m_messageTimeoutMap.size <= 0) {
                this.stopMessageWait();
                G.EventMgr.emit(EventDefine.NetEvent.NET_WS_MESSAGE_NORMAL);
            }
        }

        G.LogMgr.log(`消息接收，序列号：[${responseData.serial}] 消息名：[${responseData.msgName}] 数据：[${JSON.stringify(responseData.msgData)}]`);

        if (responseData.msgName === Proto.PingResponse.name) {
            this.resetPing();
            return;
        }

        this.m_networkMessageTimer.off(responseData.serial);
        if (this.m_requestDataMap.has(responseData.serial)) {
            this.m_requestDataMap.delete(responseData.serial);
        }

        let listenMap: Map<any, Function> | undefined = this.m_messageCallbackMap.get(responseData.msgName);
        if (listenMap !== undefined) {
            listenMap.forEach((callback: Function, caller: any) => {
                callback.call(caller, responseData.msgName);
            });
        }
    }

    /**
     * 连接断开回调
     */
    private onClose(ev: CloseEvent): void {
        if (this.m_closeState === null) {
            this.m_closeState = NetworkDefine.CloseState.SERVER_CLOSE;
        }

        let closeState: NetworkDefine.CloseState = this.m_closeState;
        this.initClose();
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CLOSED, closeState);
        G.LogMgr.log(`网络断开连接`);
    }

    /**
     * 连接错误回调
     */
    private onError(ev: Event): void {
        this.m_closeState = NetworkDefine.CloseState.ERROR_CLOSE;
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_ERROR);
        G.LogMgr.log(`网络连接错误`);
    }

    /**
     * 建立连接
     * @param protocol {WebSocketProtocol} 协议
     * @param host {string} 地址
     * @param port {string} 端口
     * 
     * @param wsURL {string} 连接地址
     */
    public connect(protocol: WebSocketProtocol, host: string, port: string): void;
    public connect(wsURL: string): void;
    public connect(...args: any[]): void {
        if (this.m_websocket !== null && this.m_websocket.readyState !== WebSocket.CLOSED) {
            G.LogMgr.warn("网络连接未关闭，请不要重复建立连接");
            return;
        }

        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CONNECTING);

        let url: string = null;
        if (args.length === 3 && typeof (args[0]) === "string" && typeof (args[1]) === "string" && typeof (args[2]) === "string") {
            url = `${args[0]}://${args[1]}:${args[2]}`;
        } else if (args.length === 1 && typeof (args[0]) === "string") {
            url = args[0];
        } else {
            G.LogMgr.warn("连接网络参数错误，请检查传入参数");
            return;
        }

        this.m_websocket = new WebSocket(url);
        this.m_websocket.binaryType = "arraybuffer";
        this.m_websocket.onopen = this.onOpen.bind(this);
        this.m_websocket.onmessage = this.onMessage.bind(this);
        this.m_websocket.onclose = this.onClose.bind(this);
        this.m_websocket.onerror = this.onError.bind(this);

        G.LogMgr.log(`正在连接网络：${url}`);
    }

    /**
     * 重新链接
     * @param protocol {WebSocketProtocol} 协议
     * @param host {string} 地址
     * @param port {number} 端口
     * 
     * @param wsURL {string} 连接地址
     */
    public reconnect(protocol: WebSocketProtocol, host: string, port: number): void;
    public reconnect(wsURL: string): void;
    public reconnect(...args: any[]): void {
        this.connect.apply(this, args);
    }

    /**
     * 发送数据
     * @param msgClass {any} 协议类
     * @param msgData {any} 协议数据
     */
    public send<T extends NetworkInterface.ProtoClass>(msgClass: T, msgData: any): void {
        if (this.m_websocket === null || this.m_websocket === undefined) {
            G.LogMgr.warn(`网络发送失败，未建立网络连接`);
            return;
        }

        if (this.m_websocket.readyState !== WebSocket.OPEN) {
            G.LogMgr.warn(`网络状态异常：${this.m_websocket.readyState}`);
            return;
        }

        let requestData: NetworkInterface.TransmitData = this.encodeData(msgClass, msgData);
        let baseData: Proto.IBase = {
            action: requestData.action,
            serial: requestData.serial,
            packet: requestData.packet,
        }
        this.m_websocket.send(Proto.Base.encode(Proto.Base.create(baseData)).finish());
        // 留作输出请求数据的二进制流
        // G.LogMgr.log(new Uint8Array(requestData.slice(0, requestData.byteLength)));

        try {
            G.LogMgr.log(`消息发送 序列号：[${this.m_serial}] 消息名：[${msgClass.name}] 数据：[${JSON.stringify(msgData)}]`);
        } catch (e) {
            G.LogMgr.log(`消息发送 序列号：[${this.m_serial}] 消息名：[${msgClass.name}] 数据：[${msgData}]`);
        }

        this.m_networkMessageTimer.on(this.m_serial, MSG_RESPONSE_TIMEOUT_SEC);
        this.m_requestDataMap.set(this.m_serial, {
            serial: this.m_serial++ % (MAX_SERIAL + 1),
            msgName: msgClass.name,
            msgData: msgData,
        });
    }

    /**
     * 关闭连接
     */
    public close(): void {
        if (this.m_websocket.readyState === WebSocket.CLOSING || this.m_websocket.readyState === WebSocket.CLOSED) {
            G.LogMgr.warn(`网络正在关闭，请不要重复关闭网络`);
            return;
        }

        this.m_closeState = NetworkDefine.CloseState.CLIENT_CLOSE;

        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CLOSING);
        G.LogMgr.log("网络正在断开");
        this.m_websocket.close();
    }

    /**
     * 获取网络断开状态
     * @return {NetworkDefine.CloseState | null}
     */
    public getCloseState(): NetworkDefine.CloseState | null {
        return this.m_closeState;
    }

    /**
     * 启动消息超时等待（提升弱网体验）
     */
    private startMessageWait(): void {
        if (this.m_messageWaitTimerId === null || this.m_messageWaitTimerId === undefined) {
            this.m_messageWaitTimerId = setTimeout(() => {
                this.stopAllTimer();
                this.close();
                this.m_messageWaitTimerId = null;
            }, MSG_WAIT_TIMEOUT_SEC * 1000);
        }
    }

    /**
     * 停止消息超时等待
     */
    private stopMessageWait(): void {
        if (this.m_messageWaitTimerId !== null && this.m_messageWaitTimerId !== undefined) {
            clearTimeout(this.m_messageWaitTimerId);
            this.m_messageWaitTimerId = null;
        }
    }

    /**
     * 启动心跳
     */
    public startPing(): void {
        if (this.m_pingTimerId === null || this.m_pingTimerId === undefined) {
            this.m_pingTimerId = setTimeout(() => {
                this.onPingTimeout();
                this.m_pingTimerId = null;
            }, PING_TIMEOUT_SEC * 1000);
        }
    }

    /**
     * 发送心跳
     */
    private sendPing(): void {
        this.send(Proto.PingRequest, {});
    }

    /**
     * 重置心跳
     */
    private resetPing(): void {
        this.stopPing();
        this.sendPing();
        this.startPing();
    }

    /**
     * 停止心跳
     */
    private stopPing(): void {
        if (this.m_pingTimerId !== null && this.m_pingTimerId !== undefined) {
            clearTimeout(this.m_pingTimerId);
            this.m_pingTimerId = null;
        }
    }

    /**
     * 停止所有定时器
     */
    private stopAllTimer(): void {
        this.stopPing();
        this.m_networkMessageTimer.offAll();
        this.stopMessageWait();
    }

    /**
     * 数据编码
     * @param msgClass {T} 协议类
     * @param msgData {any} 协议数据
     * @return {NetworkInterface.TransmitData} 传输消息
     */
    private encodeData<T extends NetworkInterface.ProtoClass>(msgClass: T, msgData: any): NetworkInterface.TransmitData {
        let transmitData: NetworkInterface.TransmitData = {
            action: msgClass.name,
            serial: this.m_serial,
            packet: msgClass.encode(msgClass.create(msgData)).finish(),
        }

        return transmitData;
        // let msgNameUint8Array: Uint8Array = CodeUtil.stringToUint8Array(msgName);
        // let msgNameLen: number = msgNameUint8Array.byteLength;
        // let instance: any = msgClass.create(msgData);
        // let msgDataBuffer: Uint8Array = msgClass.encode(instance).finish();
        // let msgDataLen: number = msgDataBuffer.byteLength;

        // let bodyLen: number = SERIAL_LENGTH_BYTE_SIZE + MSG_NAME_LENGTH_BYTE_SIZE + msgNameLen + msgDataLen;
        // let dataLen: number = bodyLen;
        // let dataBuffer: ArrayBuffer = new ArrayBuffer(dataLen);
        // let dataView: DataView = new DataView(dataBuffer);

        // let bufferOffset: number = 0;

        // // 序列号
        // dataView.setUint8(bufferOffset, this.m_serial);
        // bufferOffset += SERIAL_LENGTH_BYTE_SIZE;
        // // 协议名长度
        // dataView.setUint8(bufferOffset, msgNameLen);
        // bufferOffset += MSG_NAME_LENGTH_BYTE_SIZE;
        // // 协议名
        // let nameBuffer: Uint8Array = new Uint8Array(dataBuffer, bufferOffset, msgNameLen);
        // nameBuffer.set(CodeUtil.stringToUint8Array(msgName), 0);
        // bufferOffset += msgNameLen;
        // // 协议数据
        // (new Uint8Array(dataBuffer, bufferOffset, msgDataLen)).set(msgDataBuffer, 0);
        // bufferOffset += msgDataLen;
    }

    /**
     * 数据解码
     * @param transmitData {NetworkInterface.TransmitData} 传输数据
     * @return {NetworkInterface.TransferData} 转换数据
     */
    private decodeData(transmitData: NetworkInterface.TransmitData): NetworkInterface.TransferData {
        let data: NetworkInterface.TransferData = {
            msgName: transmitData.action,
            serial: transmitData.serial,
            msgData: Proto[transmitData.action].decode(transmitData.packet),
        }
        return data;

        // let dataView: DataView = new DataView(bufffer);

        // let bufferOffset: number = 0;

        // // 序列号
        // let serial: number = dataView.getUint8(bufferOffset);
        // bufferOffset += SERIAL_LENGTH_BYTE_SIZE;
        // // 协议名长度
        // let msgNameLen: number = dataView.getUint8(bufferOffset);
        // bufferOffset += MSG_NAME_LENGTH_BYTE_SIZE;
        // // 协议名字
        // let msgName: string = CodeUtil.uint8ArrayToString(new Uint8Array(bufffer.slice(bufferOffset, bufferOffset += msgNameLen)));
        // // 协议数据
        // let msgDataLen: number = bufffer.byteLength - bufferOffset;
        // let msgData: any = Proto[msgName].decode(new Uint8Array(bufffer.slice(bufferOffset, bufferOffset += msgDataLen)));

        // let data: NetworkInterface.TransmitData = {
        //     serial: serial,
        //     msgName: msgName,
        //     msgData: msgData,
        // };

        // return data;
    }

    /**
     * 销毁
     */
    public destroy(): void {

    }

}