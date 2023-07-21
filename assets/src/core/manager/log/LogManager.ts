/*
 * Author       : ougato
 * Date         : 2021-07-10 02:52:20
 * LastEditors  : ougato
 * LastEditTime : 2023-07-19 14:22:22
 * FilePath     : /client/assets/src/core/manager/log/LogManager.ts
 * Description  : 日志管理器、拓展日志时间、日志上报等功能
 */

import GameData from "../../../data/GameData";
import BaseManager from "../../base/BaseManager";
import { ColorDefine } from "../../define/ColorDefine";
import DateUtils from "../../utils/DateUtils";


// 背景颜色
enum ColorBg {
    // 基础颜色 
    BASE = ColorDefine.BaseColor.GREEN,
    // 天空颜色
    SKY = ColorDefine.BaseColor.BLUE,
    // 草原颜色
    LAWN = ColorDefine.BaseColor.GREEN,
    // 陶瓷颜色
    CERAM = ColorDefine.BaseColor.ASHEN,
    // 梅花颜色
    BLOSSOM = ColorDefine.BaseColor.PINK,
}

// 文字颜色
enum ColorText {
    // 基础颜色
    BASE = ColorDefine.BaseColor.WHITE,
    // 天空颜色
    SKY = ColorDefine.BaseColor.WHITE,
    // 草原颜色
    LAWN = ColorDefine.BaseColor.WHITE,
    // 陶瓷颜色
    CERAM = ColorDefine.BaseColor.CELADON,
    // 梅花颜色
    BLOSSOM = ColorDefine.BaseColor.BROWN,
}

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
     */
    public color(title: string, content: string, color?: ColorDefine.LogColor | string | ColorDefine.BaseColor): void {
        if (!CC_DEBUG) {
            return;
        }

        let colorType: string = typeof (color);
        let colorBg: unknown = ColorBg.BASE;
        let colorText: unknown = ColorText.BASE;
        if (colorType === "number") {
            let tempColorBg: unknown = ColorBg[ColorDefine.LogColor[color]];
            if (tempColorBg) {
                colorBg = tempColorBg;
            }

            let tempColorText: unknown = ColorText[ColorDefine.LogColor[color]];
            if (tempColorText) {
                colorText = tempColorText;
            }
        } else if (colorType === "string") {
            colorBg = color;
        }

        let data: string[] = [];

        if (cc.sys.isNative) {
            data = [
                `${title} ${content}`,
            ]
        } else {
            data = [
                `${this.getDate()} %c ${title} %c ${content}`,
                `background: ${colorBg};padding: 2px 0px 0px 1px;margin: 0px auto;font-weight: bold;border-radius: 3px;color: ${colorText};`,
                'padding: 1px;border-radius: 0 2px 2px 0;color: #000;',
            ];
        }


        console.log.apply(console.log, data);
    }

    /**
     * 系统日志
     * @param data {...any[]} 数据
     */
    public sys(...data: any[]): void {
        if (!CC_DEBUG) {
            return;
        }

        data = [].concat(this.getDate()).concat(data);
        console.warn.apply(console, data);
    }

    /**
     * 普通日志
     * @param data {...any[]} 数据
     */
    public log(...data: any[]): void {
        if (!CC_DEBUG) {
            return;
        }

        data = [].concat(this.getDate()).concat(data);
        console.log.apply(console, data);
    }

    /**
     * 错误日志
     * @param data {...any[]} 数据
     */
    public error(...data: any[]): void {
        if (!CC_DEBUG) {
            return;
        }

        data = [].concat(this.getDate()).concat(data);
        console.error.apply(console, data);
    }

    /**
     * 警告日志
     * @param data {...any[]} 数据
     */
    public warn(...data: any[]): void {
        if (!CC_DEBUG) {
            return;
        }

        data = [].concat(this.getDate()).concat(data);
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
            serverTimestamp = Date.now() + timeDifference;
        }
        return DateUtils.timestampToFormat("hh:mm:ss.SSS", serverTimestamp);
    }
}