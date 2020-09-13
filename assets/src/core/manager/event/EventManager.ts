/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:41:52
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 01:39:29
 * @FilePath     : \client242\assets\src\core\manager\event\EventManager.ts
 * @Description  : 事件管理器，侦察者模式，用于整个游戏中的消息事件注册、接收、发送工作，各模块之间交互和解耦
 */

import Manager from "../Manager";
import EventDefine from "../../../define/EventDefine";

// 间隔毫秒调用
const INTERVAL_MS = 0.001;

export default class EventManager extends Manager implements ManagerInterface {

    private static g_instance: EventManager = null;

    // 事件结构
    private m_eventMap: Map<EventDefineType, Map<any, Function[]>> = null;

    public static getInstance(): EventManager {
        if (this.g_instance === null) {
            this.g_instance = new EventManager();
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
            console.warn("注册", EventDefine[event], "事件失败");
            return;
        }

        let listenMap: Map<T, Function[]> | undefined = this.m_eventMap.get(event);

        if (listenMap === undefined) {
            listenMap = new Map<T, Function[]>();
            this.m_eventMap.set(event, listenMap);
        }

        let callbackList: Function[] | undefined = listenMap.get(caller);

        if (callbackList === undefined) {
            callbackList = new Array<Function>();
            listenMap.set(caller, callbackList);
        }

        let index: number = callbackList.indexOf(callback);
        if (index === -1) {
            callbackList.push(callback);
        } else {
            console.warn(EventDefine[event], "事件重复注册");
        }
    }

    /**
     * 释放事件
     * @param event {EventDefineType} 事件ID
     * @param caller {T} 注册者的 this 对象
     * @param callback {Function} 监听回调函数
     */
    public off<T>(event: EventDefineType, caller: T, callback: Function): void {
        if (this.m_eventMap === null) {
            console.warn("释放", EventDefine[event], "事件失败");
            return;
        }

        let listenMap: Map<T, Function[]> | undefined = this.m_eventMap.get(event);
        if (listenMap === undefined) {
            return;
        }

        let callbackList: Function[] | undefined = listenMap.get(caller);

        if (callbackList === undefined) {
            return;
        }

        let index = callbackList.indexOf(callback);
        if (index >= 0) {
            callbackList.splice(index, 1);
            if (callbackList.length <= 0) {
                listenMap.delete(caller);
            }
        }
    }

    /**
     * 发送事件（异步）
     * @param event {EventDefineType} 事件ID
     * @param data {...any[]} 多个任意数据
     */
    public emit(event: EventDefineType, ...data: any[]): void {
        if (this.m_eventMap === null) {
            console.warn("发送", EventDefine[event], "事件失败");
            return;
        }

        let listenMap: Map<any, Function[]> | undefined = this.m_eventMap.get(event);

        if (listenMap === undefined) {
            return;
        }

        // 总循环次数，用于计算间隔时间倍数
        let count: number = 0;

        listenMap.forEach((value: Function[], key: any) => {
            for (let i: number = 0; i < value.length; ++i) {
                let fn: Function = value[i];

                // 异步调用
                setTimeout(() => {
                    fn.apply(key, data);
                }, count++ * INTERVAL_MS);
            }
        });
    }

    /**
     * 手动清理事件 Map
     */
    private clearEventMap(): void {
        this.m_eventMap.clear();
    }

    /**
     * 手动清理监听 Map
     */
    private clearListenMap(): void {
        this.m_eventMap.forEach((eventValue: Map<any, Function[]>, eventKey: EventDefineType, eventMap: Map<EventDefineType, Map<any, Function[]>>) => {
            eventValue.forEach((listenValue: Function[], listenKey: any, listenMap: Map<any, Function[]>) => {
                listenValue.length = 0
            })
            eventValue.clear();
        });
    }

    /**
     * 销毁 清理所有注册过的事件（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）
     */
    public destroy(): void {
        this.clearListenMap();
        this.clearEventMap();
        this.m_eventMap = null;
    }

}