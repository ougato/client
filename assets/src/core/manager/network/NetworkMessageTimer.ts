/*
 * @Author       : ougato
 * @Date         : 2020-10-11 01:00:54
 * @LastEditors  : ougato
 * @LastEditTime : 2020-10-15 17:31:58
 * @FilePath     : \client242\assets\src\core\manager\network\NetworkMessageTimer.ts
 * @Description  : 网络超时器
 */

export default class NetworkMessageTimer {

    // 定时器 Map<序列号, 定时器ID>
    private m_timerMap: Map<number, NodeJS.Timeout> = null;
    // 消息超时回调
    private m_messageTimeoutCallback: (serial: number) => void = null;

    constructor(timeoutCallback: (serial: number) => void) {
        this.m_timerMap = new Map();
        this.m_messageTimeoutCallback = timeoutCallback;
    }

    /**
     * 发送消息后 开启超时监听
     * @param serial {number} 序列号
     * @param timeout {number} 超时时间（单位：秒）
     */
    public on(serial: number, timeout: number): void {
        let timerId: NodeJS.Timeout | undefined = this.m_timerMap.get(serial);
        if (timerId === undefined || timerId === null) {
            timerId = setTimeout(() => {
                this.m_messageTimeoutCallback(serial);
                this.m_timerMap.delete(serial);
            }, timeout * 1000);
            this.m_timerMap.set(serial, timerId);
        }
    }

    /**
     * 收到了发送的消息响应 关闭超时监听
     * @param serial {number} 序列号
     */
    public off(serial: number): void {
        let timerId: NodeJS.Timeout | undefined = this.m_timerMap.get(serial);
        if (timerId !== undefined && timerId !== null) {
            clearTimeout(timerId);
            this.m_timerMap.delete(serial);
        }
    }

    /**
     * 关闭所有超时监听
     */
    public offAll(): void {
        this.m_timerMap.forEach((timerId: NodeJS.Timeout, serial: number) => {
            clearTimeout(timerId);
            this.m_timerMap.delete(serial);
        });
    }

}