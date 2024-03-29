/*
 * Author       : ougato
 * Date         : 2021-07-07 01:43:20
 * LastEditors  : ougato
 * LastEditTime : 2024-01-03 17:24:41
 * FilePath     : /client/assets/src/core/Global.ts
 * Description  : 全局控制
 */

import EventManager from "./manager/event/EventManager";
import LogManager from "./manager/log/LogManager";
import ResManager from "./manager/res/ResManager";
import UIManager from "./manager/ui/UIManager";
import LangManager from "./manager/lang/LangManager";
import DataManager from "./manager/data/DataManager";
import ControllerManager from "./manager/controller/ControllerManager";
import LocalStorageManager from "./manager/localStorage/LocalStorageManager";
import NetworkManager from "./manager/network/NetworkManager";
import UpdateManager from "./manager/update/UpdateManager";
import DBManager from "./manager/database/DBManager";
import TrackManager from "./manager/track/TrackManager";
import ActionManager from "./manager/action/ActionManager";
import RecordManager from "./manager/record/RecordManager";

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

    /**
     * 控制管理器
     * @returns {ControllerManager} 实例对象
     */
    public get ControllerMgr(): ControllerManager {
        return ControllerManager.getInstance();
    }

    /**
     * 本地存储管理器
     * @returns {LocalStorageManager} 实例对象
     */
    public get LocalStorageMgr(): LocalStorageManager {
        return LocalStorageManager.getInstance()
    }

    /**
     * 网络管理器
     * @returns {NetworkManager} 实例对象
     */
    public get NetworkMgr(): NetworkManager {
        return NetworkManager.getInstance();
    }

    /**
     * 更新管理器
     * @returns {UpdateManager} 实例对象
     */
    public get UpdateMgr(): UpdateManager {
        return UpdateManager.getInstance();
    }

    /**
     * 数据库管理器
     */
    public get DBMgr(): DBManager {
        return DBManager.getInstance();
    }

    /**
     * 用户操作管理器
     */
    public get ActionMgr(): ActionManager {
        return ActionManager.getInstance();
    }

    /**
     * 埋点管理器
     */
    public get TrackMgr(): TrackManager {
        return TrackManager.getInstance();
    }

    /**
     * 录制管理器
     */
    public get RecordMgr(): RecordManager {
        return RecordManager.getInstance();
    }
}