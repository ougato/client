/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:23
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-23 01:43:19
 * @FilePath     : \client242\assets\src\core\manager\network\NetworkManager.ts
 * @Description  : 网络管理器，用于游戏中长连接发送和接收网络数据
 */

import Manager from "../Manager";
import EventDefine from "../../../define/EventDefine";
import ProtocolDefine from "../../../define/ProtocolDefine";
import Logger from "../../machine/Logger";

// 心跳间隔时间（单位：秒）
const PING_INTERVAL_TIME: number = 2;

export default class NetworkManager extends Manager implements ManagerInterface {

    private static s_instance: NetworkManager = null;

    // WebSocket
    private m_websocket: WebSocket = null;
    // 网络注册结构
    private m_netMap: Map<ProtocolDefineType, Map<any, Function>> = null;
    // 心跳定时器
    private m_pingTimer: number = null;

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

        this.m_netMap = new Map();
    }

    /**
     * 注册网络
     * @param id {ProtocolDefineType} 协议号
     * @param caller {T} 注册者的 this 对象
     * @param callback {Function} 监听回调函数
     */
    public on<T>(id: ProtocolDefineType, caller: T, callback: Function): void {
        if (this.m_netMap === null) {
            console.warn("注册", ProtocolDefine[id], "事件失败");
            return;
        }

        let listenMap: Map<T, Function> | undefined = this.m_netMap.get(id);

        if (listenMap === undefined) {
            listenMap = new Map<T, Function>();
            this.m_netMap.set(id, listenMap);
        }

        let callbackValue: Function | undefined = listenMap.get(caller);

        if (callbackValue !== undefined) {
            Logger.getInstance().warn(`${caller.constructor.name} 类中，重复注册网络 ${ProtocolDefine[id]}`);
            return;
        }

        listenMap.set(caller, callback);
    }

    /**
     * 释放网络
     * @param id {ProtocolDefineType} 事件ID
     * @param caller {T} 注册者的 this 对象
     */
    public off<T>(id: ProtocolDefineType, caller: T): void {
        if (this.m_netMap === null) {
            console.warn(`释放 ${ProtocolDefine[id]} 网络失败`);
            return;
        }

        let listenMap: Map<T, Function> | undefined = this.m_netMap.get(id);
        if (listenMap === undefined) {
            return;
        }

        if (listenMap.has(caller)) {
            listenMap.delete(caller);
        }
    }

    /**
     * 连接成功回调
     */
    private onOpen(): void {
        G.EventMgr.emit(EventDefine.WEB_SOCKET_CONNECTED);
        this.startPing();
    }

    /**
     * 接收数据回调
     */
    private onMessage(this: WebSocket, ev: MessageEvent): void {

    }

    /**
     * 连接关闭回调
     */
    private onClose(_: WebSocket, ev: CloseEvent): void {
        G.EventMgr.emit(EventDefine.WEB_SOCKET_CLOSED);
        this.stopPing();
    }

    /**
     * 连接错误回调
     */
    private onError(): void {
        G.EventMgr.emit(EventDefine.WEB_SOCKET_ERROR);
    }

    /**
     * 建立连接
     * @param protocol {WebSocketProtocol} 协议
     * @param host {string} 地址
     * @param port {number} 端口
     */
    public connect(protocol: WebSocketProtocol, host: string, port: number): void {
        let url: string = `${protocol}://${host}:${port}`;
        this.m_websocket = new WebSocket(url);
        this.m_websocket.binaryType = "arraybuffer";
        this.m_websocket.onopen = this.onOpen.bind(this);
        this.m_websocket.onmessage = this.onMessage.bind(this);
        this.m_websocket.onclose = this.onClose.bind(this);
        this.m_websocket.onerror = this.onError.bind(this);
    }

    /**
     * 发送数据
     * @param data {string | ArrayBufferLike | Blob | ArrayBufferView} 数据
     */
    public send(id: ProtocolDefineType, data?: string | ArrayBufferLike | Blob | ArrayBufferView): void {

    }

    /**
     * 关闭连接
     */
    public close(): void {

    }

    /**
     * 发送心跳
     */
    private sendPing():void {
        this.send(ProtocolDefine.Ping);
    }

    /**
     * 启动心跳
     */
    private startPing(): void {
        if (this.m_pingTimer === null) {
            this.m_pingTimer = setInterval(() => {
                this.sendPing();
            }, PING_INTERVAL_TIME * 1000);
        }
    }

    /**
     * 停止心跳
     */
    private stopPing(): void {
        if (this.m_pingTimer !== null) {
            clearInterval(this.m_pingTimer);
            this.m_pingTimer = null;
        }
    }

    /**
     * 销毁
     */
    public destroy(): void {

    }

}