/*
 * Author       : ougato
 * Date         : 2021-07-07 01:43:20
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 23:37:58
 * FilePath     : /client/assets/src/core/Global.ts
 * Description  : 
 */

import EventManager from "./manager/event/EventManager";
import LogManager from "./manager/log/LogManager";
import ResManager from "./manager/res/ResManager";
import UIManager from "./manager/ui/UIManager";
import LangManager from "./manager/lang/LangManager";
import DataManager from "./manager/data/DataManager";

export default class Global {

    // 实例对象
    private static s_instance: Global = new Global();

    public static getInstance(): Global {
        if (this.s_instance === null) {
            this.s_instance = new Global();
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
        window.G = this;
    }

    private destroy(): void {
        delete window.G;
    }

    /**
     * 界面管理器
     * @returns {UIManager} 实例对象
     */
    public get UIMgr(): UIManager {
        return UIManager.getInstance();
    }

    /**
     * 数据管理器
     * @returns {DataManager} 实例对象
     */
    public get DataMgr(): DataManager {
        return DataManager.getInstance();
    }

    /**
     * 事件管理器
     * @returns {EventManager} 实例对象
     */
    public get EventMgr(): EventManager {
        return EventManager.getInstance();
    }

    /**
     * 资源管理器
     * @returns {ResManager} 实例对象
     */
    public get ResMgr(): ResManager {
        return ResManager.getInstance();
    }

    /**
     * 日志管理器
     * @returns {LogManager} 实例对象
     */
    public get LogMgr(): LogManager {
        return LogManager.getInstance();
    }

    /**
     * 语言管理器
     * @returns {LangManager} 实例对象
     */
    public get LangMgr(): LangManager {
        return LangManager.getInstance();
    }
}