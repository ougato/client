/*
 * Author       : ougato
 * Date         : 2021-10-11 23:11:48
 * LastEditors  : ougato
 * LastEditTime : 2021-10-12 00:34:32
 * FilePath     : /client/assets/src/core/manager/sys/SysManager.ts
 * Description  : 系统管理器（包含定时获取 时间、电量、网络）
 */

import BaseManager from "../../base/BaseManager";
import * as SysDefine from "../../define/SysDefine";

// 刷新本地时间戳间隔时间（单位：毫秒）
const UPDATE_LOCAL_TIMESTAMP_INTERVAL: number = 1000;
// 刷新本机电量间隔时间（单位：毫秒）
const UPDATE_BATTERY_INTERVAL: number = 1000;
// 刷新本机网络间隔时间（单位：毫秒）
const UPDATE_NET_TYPE_INTERVAL: number = 1000;

export default class SysManager extends BaseManager {

    private static s_instance: SysManager = null;

    // 客户端时间戳（单位：毫秒）
    public localTimestamp: number = null;
    // 服务器时间戳（单位：毫秒）
    public remoteTimestamp: number = null;
    // 本机电量（0-100）
    public battery: number = null;
    // 本机网络
    public netType: SysDefine.NetType = null;

    // 刷新客户端时间戳定时器
    private localTimestampTimer: number = null;
    // 刷新本机电量定时器
    private batteryTimer: number = null;
    // 刷新本机网络定时器
    private netTypeTimer: number = null;

    public static getInstance(): SysManager {
        if (this.s_instance === null) {
            this.s_instance = new SysManager();
        }

        cc.sys.NetworkType
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    public init(): void {
        this.startLocalTimestamp();
        this.startBattery();
        this.startNetType();
    }

    /**
     * 刷新客户端时间戳定时器
     */
    private updateLocalTimestamp(): void {
        this.localTimestamp = new Date().getTime();
    }

    /**
     * 启动获取客户端时间戳定时器
     */
    private startLocalTimestamp(): void {
        this.updateLocalTimestamp();
        this.localTimestampTimer = setInterval(() => {
            this.updateLocalTimestamp();
        }, UPDATE_LOCAL_TIMESTAMP_INTERVAL);
    }

    /**
     * 停止获取客户端时间戳定时器
     */
    private stopLocalTimestamp(): void {
        if (this.localTimestampTimer !== null) {
            clearInterval(this.localTimestampTimer);
            this.localTimestampTimer = null;
        }
    }

    /**
     * 刷新本机电量定时器
     */
    private updateBattery(): void {

    }

    /**
     * 启动获取本机电量定时器
     */
    private startBattery(): void {
        this.updateBattery();
        this.batteryTimer = setInterval(() => {
            this.updateBattery();
        }, UPDATE_BATTERY_INTERVAL);
    }

    /**
     * 停止获取本机电量定时器
     */
    private stopBattery(): void {
        if (this.batteryTimer !== null) {
            clearInterval(this.batteryTimer);
            this.batteryTimer = null;
        }
    }

    /**
     * 刷新本机网络定时器
     */
    private updateNetType(): void {

    }

    /**
     * 启动获取本机网络定时器
     */
    private startNetType(): void {
        this.updateNetType();
        this.netTypeTimer = setInterval(() => {
            this.updateNetType();
        }, UPDATE_NET_TYPE_INTERVAL);
    }

    /**
     * 停止获取本机网络定时器
     */
    private stopNetType(): void {
        if (this.netTypeTimer !== null) {
            clearInterval(this.netTypeTimer);
            this.netTypeTimer = null;
        }
    }

    protected destroy(): void {
        this.stopLocalTimestamp();
        this.stopBattery();
        this.stopNetType();
    }

}