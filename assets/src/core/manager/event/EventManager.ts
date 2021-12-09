/*
 * Author       : ougato
 * Date         : 2021-07-08 23:31:28
 * LastEditors  : ougato
 * LastEditTime : 2021-11-03 01:22:29
 * FilePath     : /client/assets/src/core/manager/event/EventManager.ts
 * Description  : 事件管理器、用于整个游戏中的消息事件注册、接收、发送工作，各模块之间交互和解耦
 */

import BaseManager from "../../base/BaseManager";

export default class EventManager extends BaseManager {
    
    private static s_instance: EventManager = null;

    // 事件注册结构
    private _eventMap: Map<string, Map<any, Function>> = null;

    public static getInstance(): EventManager {
        if (this.s_instance === null) {
            this.s_instance = new EventManager();
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

        this._eventMap = new Map();
    }

    /**
     * 注册事件
     * @param event {string} 事件名
     * @param caller {T} 注册者的 this 对象
     * @param callback {Function} 监听回调函数
     */
    public on<T>(event: string, caller: T, callback: Function): void {
        if (this._eventMap === null) {
            G.LogMgr.warn("注册", event, "事件失败");
            return;
        }

        let listenMap: Map<T, Function> | undefined = this._eventMap.get(event);

        if (listenMap === undefined) {
            listenMap = new Map<T, Function>();
            this._eventMap.set(event, listenMap);
        }

        let callbackValue: Function | undefined = listenMap.get(caller);

        if (callbackValue !== undefined) {
            G.LogMgr.warn(`${caller.constructor.name} 类中，重复注册事件 ${event}`);
            return;
        }

        listenMap.set(caller, callback);
    }

    /**
     * 释放事件
     * @param event {string} 事件名
     * @param caller {T} 注册者的 this 对象
     */
    public off<T>(event: string, caller: T): void {
        if (this._eventMap === null) {
            G.LogMgr.warn(`释放 ${event} 事件失败`);
            return;
        }

        let listenMap: Map<T, Function> | undefined = this._eventMap.get(event);
        if (listenMap === undefined) {
            return;
        }

        if (listenMap.has(caller)) {
            listenMap.delete(caller);
        }
    }

    /**
     * 发送事件（异步）
     * @param event {string} 事件ID
     * @param data {...any[]} 多个任意数据
     */
    public emit(event: string, ...data: any[]): void {
        if (this._eventMap === null) {
            G.LogMgr.warn(`发送 ${event} 事件失败`);
            return;
        }

        let listenMap: Map<any, Function> | undefined = this._eventMap.get(event);

        if (listenMap === undefined) {
            return;
        }

        listenMap.forEach((value: Function, key: any) => {
            value.apply(key, data);
        });
    }

    /**
     * 手动清理事件 Map
     */
    private clearEvent(): void {
        this._eventMap.clear();
    }

    /**
     * 销毁 清理所有注册过的事件（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）
     */
     protected destroy(): void {
        this.clearEvent();
        this._eventMap = null;
    }

}