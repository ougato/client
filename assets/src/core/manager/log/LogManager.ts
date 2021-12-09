/*
 * Author       : ougato
 * Date         : 2021-07-10 02:52:20
 * LastEditors  : ougato
 * LastEditTime : 2021-12-03 16:17:35
 * FilePath     : /client/assets/src/core/manager/log/LogManager.ts
 * Description  : 日志管理器、拓展日志时间、日志上报等功能
 */

import GameData from "../../../data/GameData";
import BaseManager from "../../base/BaseManager";
import DateUtils from "../../utils/DateUtils";

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
     * 颜色日志
     * @param title {string} 标题
     * @param content {string} 重要内容
     * @param data {...any[]} 数据
     */
    public color(title: string, content: string, ...data: any[]): void {
        let colorList: string[] = [
            `${this.getDate()} %c ${title} %c ${content}`,
            'background: #35495E;padding: 1px;border-radius: 2px 0 0 2px;color: #fff;',
            'background: #409EFF;padding: 1px;border-radius: 0 2px 2px 0;color: #fff;',
        ];
        data = colorList.concat(data);
        console.log.apply(console.log, data);
    }

    /**
     * 系统日志
     * @param data {...any[]} 数据
     */
    public sys(...data: any[]): void {
        data.unshift(this.getDate());
        console.warn.apply(console, data);
    }

    /**
     * 普通日志
     * @param data {...any[]} 数据
     */
    public log(...data: any[]): void {
        data.unshift(this.getDate());
        console.log.apply(console, data);
    }

    /**
     * 错误日志
     * @param data {...any[]} 数据
     */
    public error(...data: any[]): void {
        data.unshift(this.getDate());
        console.error.apply(console, data);
    }

    /**
     * 警告日志
     * @param data {...any[]} 数据
     */
    public warn(...data: any[]): void {
        data.unshift(this.getDate());
        console.warn.apply(console, data);
    }

    /**
     * 获取日志打印日期
     * @returns {string} 日期 
     */
    private getDate(): string {
        let serverTimestamp: number = null;
        let timeDifference: number = G.DataMgr.get(GameData).timeDifference;
        if (timeDifference !== null) {
            serverTimestamp = new Date().getTime() + timeDifference;
        }
        return DateUtils.timestampToFormat("hh:mm:ss.SSS", serverTimestamp);
    }
}