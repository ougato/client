/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:23
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-22 02:23:35
 * @FilePath     : \client242\assets\src\core\manager\network\NetworkManager.ts
 * @Description  : 网络管理器，用于游戏中长连接发送和接收网络数据
 */

import Manager from "../Manager";

export default class NetworkManager extends Manager implements ManagerInterface {

    private static s_instance: NetworkManager = null;

    // WebSocket
    private m_websocket: WebSocket = null;

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

    }

    /**
     * 连接成功回调
     */
    private onOpen(this: WebSocket, ev: Event): void {
        console.log(arguments);
    }

    /**
     * 接收数据回调
     */
    private onMessage(this: WebSocket, ev: MessageEvent): void {

    }

    /**
     * 连接关闭回调
     */
    private onClose(this: WebSocket, ev: CloseEvent): void {

    }

    /**
     * 连接错误回调
     */
    private onError(this: WebSocket, ev: Event): void {

    }

    /**
     * 建立连接
     * @param protocol {"ws" | "wss"} 协议
     * @param host {string} 地址
     * @param port {number} 端口
     */
    public connect(protocol: "ws" | "wss", host: string, port: number): void {
        let url: string = `${protocol}://${host}:${port}`;
        this.m_websocket = new WebSocket(url);
        this.m_websocket.onopen = this.onOpen;
        this.m_websocket.onmessage = this.onMessage;
        this.m_websocket.onclose = this.onClose;
        this.m_websocket.onerror = this.onError;
        this.m_websocket.binaryType = "arraybuffer";
    }

    /**
     * 发送数据
     * @param data {string | ArrayBufferLike | Blob | ArrayBufferView} 数据
     */
    public send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {

    }

    /**
     * 关闭连接
     */
    public close(): void {

    }

    /**
     * 销毁
     */
    public destroy(): void {

    }

}