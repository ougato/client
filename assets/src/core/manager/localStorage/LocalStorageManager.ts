/*
 * Author       : ougato
 * Date         : 2021-07-14 23:41:14
 * LastEditors  : ougato
 * LastEditTime : 2021-07-14 23:56:28
 * FilePath     : /client/assets/src/core/manager/localStorage/LocalStorageManager.ts
 * Description  : 
 */

import BaseManager from "../../base/BaseManager";
import TypeUtils from "../../utils/TypeUtils";
import LogManager from "../log/LogManager";

export default class LocalStorageManager extends BaseManager {

    private static s_instance: LocalStorageManager = null;

    public static getInstance(): LocalStorageManager {
        if (this.s_instance === null) {
            this.s_instance = new LocalStorageManager();
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
     * 获取存储数据
     * @param key {string} Key
     * @returns {string | number | boolean | object} 数据值
     */
    public getItem(key: string): string | number | boolean | object {
        let data: string = cc.sys.localStorage.getItem(key);
        let value: string | number | boolean | object = null;
        if (!TypeUtils.isNull(data)) {
            value = JSON.parse(data);
        }
        return value;
    }

    /**
     * 设置存储数据
     * @param key {string} Key
     * @param value {string | number | boolean | object} 数据值
     */
    public setItem(key: string, value: string | number | boolean | object): void {
        let type = typeof value;
        if (type === "number" || type === "string" || type === "boolean" || type === "object") {
            cc.sys.localStorage.setItem(key, JSON.stringify(value));
        } else {
            LogManager.getInstance().sys(`存储数据类型不支持、当前的存储类型：${type}`);
        }
    }

}