/*
 * @Author       : ougato
 * @Date         : 2020-08-10 17:52:46
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-11 15:54:17
 * @FilePath     : \client242\assets\src\core\machine\Logger.ts
 * @Description  : 日志记录器，封装 JS 基础 console.log、console.warn、console.error 扩展写入日志数据
 */

 import * as SystemConfig from "../../config/SystemConfig";

export default class Logger {

    private static g_instance: Logger = null;
    
    public static getInstance(): Logger {
        if (this.g_instance === null) {
            this.g_instance = new Logger();
        }
        return this.g_instance;
    }

    public static destroy(): void {
        if (this.g_instance !== null) {
            this.g_instance.destroy();
        }
        this.g_instance = null;
    }

    constructor() {

    }

    /**
     * 打印正常信息
     * @param data {...any[]} 多个任意数据
     */
    public log(...data: any[]): void {
        if(!SystemConfig.DEBUG_LOG) {
            return;
        }

        data.unshift("信息：");
        console.log.apply(console, data);
    }

    /**
     * 打印警告信息
     * @param data {...any[]} 多个任意数据
     */
    public warn(...data: any[]): void {
        if(!SystemConfig.DEBUG_LOG) {
            return;
        }

        data.unshift("警告：");
        console.warn.apply(console, data);
    }

    /**
     * 打印错误信息
     * @param data {...any[]} 多个任意数据
     */
    public error(...data: any[]): void {
        if(!SystemConfig.DEBUG_LOG) {
            return;
        }
        
        data.unshift("错误：");
        console.error.apply(console, data);
    }

    /**
     * 销毁
     */
    public destroy(): void {

    }

}