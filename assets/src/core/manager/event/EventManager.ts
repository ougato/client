/*
 * Author       : ougato
 * Date         : 2021-07-08 23:31:28
 * LastEditors  : ougato
 * LastEditTime : 2021-07-11 17:03:40
 * FilePath     : /client/assets/src/core/manager/event/EventManager.ts
 * Description  : 事件管理器、用于整个游戏中的消息事件注册、接收、发送工作，各模块之间交互和解耦
 */

import BaseManager from "../../base/BaseManager";

export default class EventManager extends BaseManager {
    
    private static s_instance: EventManager = null;

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
        
    }

}