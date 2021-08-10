/*
 * Author       : ougato
 * Date         : 2021-07-10 02:52:20
 * LastEditors  : ougato
 * LastEditTime : 2021-07-11 17:03:50
 * FilePath     : /client/assets/src/core/manager/log/LogManager.ts
 * Description  : 日志管理器、拓展日志时间、日志上报等功能
 */

import BaseManager from "../../base/BaseManager";

export default class LogManager extends BaseManager {
    
    private static s_instance: LogManager = null;

    public static getInstance(): LogManager {
        if (this.s_instance === null) {
            this.s_instance = new LogManager();
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
     * 系统日志
     * @param data {...any[]} 数据
     */
    public sys(...data: any[]): void {
        console.warn.apply(console, data);
    }

    /**
     * 普通日志
     * @param data {...any[]} 数据
     */
    public log(...data: any[]): void {
        console.log.apply(console, data);
    }

    /**
     * 错误日志
     * @param data {...any[]} 数据
     */
    public error(...data: any[]): void {
        console.error.apply(console, data);
    }

    /**
     * 警告日志
     * @param data {...any[]} 数据
     */
    public warn(...data: any[]): void {
        console.warn.apply(console, data);
    }
}