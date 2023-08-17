/*
 * Author       : ougato
 * Date         : 2021-11-01 15:57:27
 * LastEditors  : ougato
 * LastEditTime : 2023-07-22 23:53:56
 * FilePath     : /client/assets/src/core/manager/network/NetworkManager.ts
 * Description  : 网络管理器
 */

import BaseManager from "../../base/BaseManager";
import NetworkMessageTimer from "./NetworkMessageTimer";
import Proto = require("../../../protobuf/Proto");
import TypeUtils from "../../utils/TypeUtils";
import { EventDefine } from "../../define/EventDefine";
import { NetworkDefine } from "../../define/NetworkDefine";
import { NetworkInterface } from "../../interface/NetworkInterface";
import BaseController from "../../base/BaseController";

// 序列号 占用字节大小（4 byte）
const SERIAL_LENGTH_BYTE_SIZE: number = 1;
// 协议名长度 占用字节大小（1 byte）
const MSG_NAME_LENGTH_BYTE_SIZE: number = 1;
// 消息响应超时时间（单位：秒）
const MSG_RESPONSE_TIMEOUT_SEC: number = 1;
// 消息超时等待时间（单位：秒）
const MSG_WAIT_TIMEOUT_SEC: number = 3;
// 连接超时时间（单位：秒）
const CONNECT_TIMEOUT_SEC: number = 5;
// 心跳间隔时间（单位：秒）
const PING_INTERVAL_TIME: number = 30;
// 最大序列号
const MAX_SERIAL: number = 254;
// 最大重连次数
const MAX_RECONNECT_COUNT: number = 3;

export default class NetworkManager extends BaseManager {

    private static s_instance: NetworkManager = null;

    // WebSocket（单链接）
    private _websocket: WebSocket = null;
    // 网络注册结构 Map<消息名, Map<注册类对象, 回调方法>>
    private _messageCallbackMap: Map<string, Map<BaseController, Function>> = null;
    // 消息响应超时定时器
    private _networkMessageTimer: NetworkMessageTimer = null;
    // 心跳超时定时器
    private _pingTimer: NodeJS.Timeout = null;
    // 消息超时等待定时器
    private _messageWaitTimer: NodeJS.Timeout = null;
    // 连接超时定时器
    private _connectTimeoutTimer: NodeJS.Timeout = null;
    // 发送累加序列号
    private _serial: number = 0;
    // 请求数据列表 Map<序列号, 网络数据结构>
    private _requestDataMap: Map<number, NetworkInterface.TransferData> = null;
    // 网络消息超时 Map<序列号, 网络数据结构>
    private _messageTimeoutMap: Map<number, NetworkInterface.TransferData> = null;
    // 网络断开状态
    private _closeState: NetworkDefine.CloseState = null;
    // 当前重连次数
    private _reconnectCount: number = null;
    // 连接地址
    private _wsURL: string = null;

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

        this._messageCallbackMap = new Map();
        this._networkMessageTimer = new NetworkMessageTimer(this.onMessageTimeout.bind(this));
        this._requestDataMap = new Map();
        this._messageTimeoutMap = new Map();
        this._reconnectCount = 0;
    }

    private initClose(): void {
        this._websocket.onopen = null;
        this._websocket.onmessage = null;
        this._websocket.onclose = null;
        this._websocket.onerror = null;
        this._websocket = null;
        this._closeState = null;
        this._serial = 0;
        this.stopAllTimer();
        this._requestDataMap.clear();
        this._messageTimeoutMap.clear();
    }

    /**
     * 注册网络
     * @param msgClass {T} 消息类
     * @param caller {BaseController} 注册者的 this 对象（只允许通过控制监听网络后、用事件派发出去）
     * @param callback {Function} 监听回调函数
     */
    public on<T extends NetworkInterface.ProtoClass>(msgClass: T, caller: BaseController, callback: Function): void {
        let msgName: string = msgClass.prototype.classname;
        if (this._messageCallbackMap === null) {
            G.LogMgr.warn(`注册 ${msgName} 网络失败`);
            return;
        }

        let listenMap: Map<any, Function> | undefined = this._messageCallbackMap.get(msgName);

        if (listenMap === undefined) {
            listenMap = new Map<any, Function>();
            this._messageCallbackMap.set(msgName, listenMap);
        }

        let value: Function | undefined = listenMap.get(caller);

        if (!TypeUtils.isNull(value)) {
            G.LogMgr.warn(`${cc.js.getClassName(caller)} 类中，重复注册网络 ${msgName}`);
            return;
        }

        listenMap.set(caller, callback);
    }

    /**
     * 释放网络
     * @param msgClass {T} 消息类
     * @param caller {BaseController} 注册者的 this 对象
     */
    public off<T extends NetworkInterface.ProtoClass>(msgClass: T, caller: BaseController): void {
        let msgName: string = msgClass.prototype.classname;
        if (this._messageCallbackMap === null) {
            G.LogMgr.warn(`释放 ${msgName} 网络失败`);
            return;
        }

        let listenMap: Map<any, Function> | undefined = this._messageCallbackMap.get(msgName);
        if (TypeUtils.isNull(listenMap)) {
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
        if (this._messageTimeoutMap.size <= 0) {
            G.EventMgr.emit(EventDefine.NetEvent.NET_WS_MESSAGE_TIMEOUT);
            this.startMessageWait();
        }

        let networkData: NetworkInterface.TransferData | undefined = this._requestDataMap.get(serial);

        if (networkData === undefined) {
            G.LogMgr.error(`网络超时数据不存在，由于没有任何地方可以删除数据，所以在这里必须有数据`);
            return;
        }

        this._messageTimeoutMap.set(serial, networkData);

        G.LogMgr.warn(`消息超时 序列号：${networkData.serial} 消息名：${networkData.msgName}`);
    }

    /**
     * 连接成功回调
     */
    private onOpen(ev: Event): void {
        G.LogMgr.log(`网络连接成功`);
        G.UIMgr.closeWaiting();
        this.stopConnectTimeout();
        this._reconnectCount = 0;
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CONNECTED);
    }

    /**
     * 接收数据回调
     */
    private onMessage(ev: MessageEvent): void {
        let responseData: NetworkInterface.TransferData = this.decodeData(ev.data);

        // 处理弱网超时消息
        if (this._messageTimeoutMap.has(responseData.serial)) {
            this._messageTimeoutMap.delete(responseData.serial);
            if (this._messageTimeoutMap.size <= 0) {
                this.stopMessageWait();
                G.EventMgr.emit(EventDefine.NetEvent.NET_WS_MESSAGE_NORMAL);
            }
        }

        G.LogMgr.log(`消息接收 序列号：${responseData.serial} 消息名：${responseData.msgName} 数据：${JSON.stringify(responseData.msgData)}`);

        if (responseData.msgName === Proto.PingResponse.prototype.classname) {
            this.resetPing();
        }

        this._networkMessageTimer.off(responseData.serial);
        if (this._requestDataMap.has(responseData.serial)) {
            this._requestDataMap.delete(responseData.serial);
        }

        let listenMap: Map<any, Function> | undefined = this._messageCallbackMap.get(responseData.msgName);
        if (listenMap !== undefined) {
            listenMap.forEach((callback: Function, caller: BaseController) => {
                callback.call(caller, responseData.msgData);
            });
        }
        G.EventMgr.emit(responseData.msgName, responseData.msgData);
    }

    /**
     * 连接断开回调
     */
    private onClose(ev?: CloseEvent): void {
        G.UIMgr.openWaiting();

        if (this._closeState === null) {
            this._closeState = NetworkDefine.CloseState.SERVER_CLOSE;
        }

        let closeState: NetworkDefine.CloseState = this._closeState;
        this.initClose();
        G.LogMgr.log(`网络断开连接`);

        switch (closeState) {
            case NetworkDefine.CloseState.CLIENT_CLOSE:
                G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CLOSED, closeState);
                break;
            case NetworkDefine.CloseState.ERROR_CLOSE:
            case NetworkDefine.CloseState.SERVER_CLOSE:
                if (this._reconnectCount++ < MAX_RECONNECT_COUNT) {
                    this.reconnect();
                } else {
                    G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CLOSED, closeState);
                }
                break;
        }
    }

    /**
     * 连接错误回调
     */
    private onError(ev?: Event): void {
        this._closeState = NetworkDefine.CloseState.ERROR_CLOSE;
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_ERROR);
        G.LogMgr.log(`网络连接错误`);
    }

    /**
     * 连接超时回调
     */
    private onConnectTimeout(): void {
        if (this._websocket) {
            this._websocket.onopen = null;
            this._websocket.onmessage = null;
            this._websocket.onclose = null;
            this._websocket.onerror = null;
            this._websocket.close();
            this._websocket = null;
        }
        this.stopConnectTimeout();
        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CONNECT_TIMEOUT);
        G.LogMgr.log(`网络连接超时`);
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
        if (this._websocket !== null && this._websocket.readyState !== WebSocket.CLOSED) {
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

        G.UIMgr.openWaiting();

        this._wsURL = url;
        this.startConnectTimeout();

        try {
            this._websocket = new WebSocket(url);
        } catch (e) {
            this.onError();
            this.onClose();
            return;
        }
        this._websocket.binaryType = "arraybuffer";
        this._websocket.onopen = this.onOpen.bind(this);
        this._websocket.onmessage = this.onMessage.bind(this);
        this._websocket.onclose = this.onClose.bind(this);
        this._websocket.onerror = this.onError.bind(this);

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
    public reconnect(): void;
    public reconnect(...args: any[]): void {
        G.LogMgr.log(`正在重连网络`)
        if (args.length <= 0) {
            this.connect(this._wsURL);
        } else {
            this.connect.apply(this, args);
        }
    }

    /**
     * 发送数据
     * @param msgClass {any} 协议类
     * @param msgData {any} 协议数据
     */
    public send<T extends NetworkInterface.ProtoClass>(msgClass: T, msgData?: any): void {
        if (TypeUtils.isNull(this._websocket)) {
            G.LogMgr.warn(`网络发送失败，未建立网络连接`);
            return;
        }

        if (this._websocket.readyState !== WebSocket.OPEN) {
            G.LogMgr.warn(`网络状态异常：${this._websocket.readyState}`);
            return;
        }

        if (TypeUtils.isNull(msgData)) {
            msgData = {};
        }

        let requestData: NetworkInterface.TransmitData = this.encodeData(msgClass, msgData);
        let baseData: Proto.IBase = {
            action: requestData.action,
            serial: requestData.serial,
            packet: requestData.packet,
        }
        this._websocket.send(Proto.Base.encode(Proto.Base.create(baseData)).finish());
        // 留作输出请求数据的二进制流
        // G.LogMgr.log(new Uint8Array(requestData.slice(0, requestData.byteLength)));

        try {
            G.LogMgr.log(`消息发送 序列号：${this._serial} 消息名：${msgClass.prototype.classname} 数据：${JSON.stringify(msgData)}`);
        } catch (e) {
            G.LogMgr.log(`消息发送 序列号：${this._serial} 消息名：${msgClass.prototype.classname} 数据：${msgData}`);
        }

        this._networkMessageTimer.on(this._serial, MSG_RESPONSE_TIMEOUT_SEC);
        this._requestDataMap.set(this._serial, {
            serial: this._serial++ % (MAX_SERIAL + 1),
            msgName: msgClass.prototype.classname,
            msgData: msgData,
        });
    }

    /**
     * 关闭连接
     */
    public close(): void {
        if (this._websocket.readyState === WebSocket.CLOSING || this._websocket.readyState === WebSocket.CLOSED) {
            G.LogMgr.warn(`网络正在关闭，请不要重复关闭网络`);
            return;
        }

        this._closeState = NetworkDefine.CloseState.CLIENT_CLOSE;

        G.EventMgr.emit(EventDefine.NetEvent.NET_WS_CLOSING);
        G.LogMgr.log("网络正在断开");
        this._websocket.close();
    }

    /**
     * 获取网络断开状态
     * @return {NetworkDefine.CloseState | null}
     */
    public getCloseState(): NetworkDefine.CloseState | null {
        return this._closeState;
    }

    /**
     * 启动连接超时
     */
    private startConnectTimeout(): void {
        if (TypeUtils.isNull(this._connectTimeoutTimer)) {
            this._connectTimeoutTimer = setTimeout(() => {
                this.onConnectTimeout();
            }, CONNECT_TIMEOUT_SEC * 1000);
        }
    }

    /**
     * 停止连接超时
     */
    private stopConnectTimeout(): void {
        if (!TypeUtils.isNull(this._connectTimeoutTimer)) {
            clearTimeout(this._connectTimeoutTimer);
            this._connectTimeoutTimer = null;
        }
    }

    /**
     * 启动消息超时等待（提升弱网体验）
     */
    private startMessageWait(): void {
        if (TypeUtils.isNull(this._messageWaitTimer)) {
            this._messageWaitTimer = setTimeout(() => {
                this.stopAllTimer();
                this.close();
                this._messageWaitTimer = null;
            }, MSG_WAIT_TIMEOUT_SEC * 1000);
        }
    }

    /**
     * 停止消息超时等待
     */
    private stopMessageWait(): void {
        if (!TypeUtils.isNull(this._messageWaitTimer)) {
            clearTimeout(this._messageWaitTimer);
            this._messageWaitTimer = null;
        }
    }

    /**
     * 启动心跳
     */
    public startPing(): void {
        if (TypeUtils.isNull(this._pingTimer)) {
            this._pingTimer = setInterval(() => {
                this.sendPing();
            }, PING_INTERVAL_TIME * 1000);
        }
    }

    /**
     * 发送心跳
     */
    private sendPing(): void {
        this.send(Proto.PingRequest);
    }

    /**
     * 重置心跳
     */
    private resetPing(): void {
        this.stopPing();
        this.startPing();
    }

    /**
     * 停止心跳
     */
    private stopPing(): void {
        if (!TypeUtils.isNull(this._pingTimer)) {
            clearTimeout(this._pingTimer);
            this._pingTimer = null;
        }
    }

    /**
     * 停止所有定时器
     */
    private stopAllTimer(): void {
        this.stopPing();
        this._networkMessageTimer.offAll();
        this.stopMessageWait();
        this.stopConnectTimeout();
    }

    /**
     * 数据编码
     * @param msgClass {T} 协议类
     * @param msgData {any} 协议数据
     * @return {NetworkInterface.TransmitData} 传输消息
     */
    private encodeData<T extends NetworkInterface.ProtoClass>(msgClass: T, msgData: any): NetworkInterface.TransmitData {
        let transmitData: NetworkInterface.TransmitData = {
            action: msgClass.prototype.classname,
            serial: this._serial,
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
        // dataView.setUint8(bufferOffset, this._serial);
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
    private decodeData(arrayBuffer: ArrayBuffer): NetworkInterface.TransferData {
        let transmitData: NetworkInterface.TransmitData = Proto.Base.decode(new Uint8Array(arrayBuffer.slice(0, arrayBuffer.byteLength)));

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