/*
 * Author       : ougato
 * Date         : 2021-07-08 23:31:28
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 01:11:08
 * FilePath     : /client/assets/src/core/manager/event/EventManager.ts
 * Description  : 事件管理器、用于整个游戏中的消息事件注册、接收、发送工作，各模块之间交互和解耦
 */

import BaseManager from "../../base/BaseManager";

export default class EventManager extends BaseManager {
    
    private static s_instance: EventManager = null;

    // 事件注册结构
    private m_eventMap: Map<EventDefineType, Map<any, Function>> = null;

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

        this.m_eventMap = new Map();
    }

    /**
     * 注册事件
     * @param event {EventDefineType} 事件ID
     * @param caller {T} 注册者的 this 对象
     * @param callback {Function} 监听回调函数
     */
    public on<T>(event: EventDefineType, caller: T, callback: Function): void {
        if (this.m_eventMap === null) {
            G.LogMgr.warn("注册", EventDefine[event], "事件失败");
            return;
        }

        let listenMap: Map<T, Function> | undefined = this.m_eventMap.get(event);

        if (listenMap === undefined) {
            listenMap = new Map<T, Function>();
            this.m_eventMap.set(event, listenMap);
        }

        let callbackValue: Function | undefined = listenMap.get(caller);

        if (callbackValue !== undefined) {
            G.LogMgr.warn(`${caller.constructor.name} 类中，重复注册事件 ${EventDefine[event]}`);
            return;
        }

        listenMap.set(caller, callback);
    }

    /**
     * 释放事件
     * @param event {EventDefineType} 事件ID
     * @param caller {T} 注册者的 this 对象
     */
    public off<T>(event: EventDefineType, caller: T): void {
        if (this.m_eventMap === null) {
            G.LogMgr.warn(`释放 ${EventDefine[event]} 事件失败`);
            return;
        }

        let listenMap: Map<T, Function> | undefined = this.m_eventMap.get(event);
        if (listenMap === undefined) {
            return;
        }

        if (listenMap.has(caller)) {
            listenMap.delete(caller);
        }
    }

    /**
     * 发送事件（异步）
     * @param event {EventDefineType} 事件ID
     * @param data {...any[]} 多个任意数据
     */
    public emit(event: EventDefineType, ...data: any[]): void {
        if (this.m_eventMap === null) {
            G.LogMgr.warn(`发送 ${EventDefine[event]} 事件失败`);
            return;
        }

        let listenMap: Map<any, Function> | undefined = this.m_eventMap.get(event);

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
    private clearEventMap(): void {
        this.m_eventMap.clear();
    }

    /**
     * 销毁 清理所有注册过的事件（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）
     */
    public destroy(): void {
        this.clearEventMap();
        this.m_eventMap = null;
    }

}