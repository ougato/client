/*
 * @Author       : ougato
 * @Date         : 2020-10-11 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-11-03 01:22:34
 * FilePath     : /client/assets/src/core/manager/network/NetworkMessageTimer.ts
 * @Description  : 网络超时器
 */

import TypeUtils from "../../utils/TypeUtils";

export default class NetworkMessageTimer {

    // 定时器 Map<序列号, 定时器ID>
    private _timerMap: Map<number, NodeJS.Timeout> = null;
    // 消息超时回调
    private _messageTimeoutCallback: (serial: number) => void = null;

    constructor(timeoutCallback: (serial: number) => void) {
        this._timerMap = new Map();
        this._messageTimeoutCallback = timeoutCallback;
    }

    /**
     * 发送消息后 开启超时监听
     * @param serial {number} 序列号
     * @param timeout {number} 超时时间（单位：秒）
     */
    public on(serial: number, timeout: number): void {
        let timerId: NodeJS.Timeout | undefined = this._timerMap.get(serial);
        if (TypeUtils.isNull(timerId)) {
            timerId = setTimeout(() => {
                this._messageTimeoutCallback(serial);
                this._timerMap.delete(serial);
            }, timeout * 1000);
            this._timerMap.set(serial, timerId);
        }
    }

    /**
     * 收到了发送的消息响应 关闭超时监听
     * @param serial {number} 序列号
     */
    public off(serial: number): void {
        let timerId: NodeJS.Timeout | undefined = this._timerMap.get(serial);
        if (!TypeUtils.isNull(timerId)) {
            clearTimeout(timerId);
            this._timerMap.delete(serial);
        }
    }

    /**
     * 关闭所有超时监听
     */
    public offAll(): void {
        this._timerMap.forEach((timerId: NodeJS.Timeout, serial: number) => {
            clearTimeout(timerId);
            this._timerMap.delete(serial);
        });
    }

}