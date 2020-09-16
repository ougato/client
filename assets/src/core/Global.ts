/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 00:47:11
 * @FilePath     : \client242\assets\src\core\Global.ts
 * @Description  : 全局类，用于管理器的全局使用
 */

import EventManager from "./manager/event/EventManager";
import AudioManager from "./manager/audio/AudioManager";
import UIManager from "./manager/ui/UIManager";
import AnimationManager from "./manager/animation/AnimationManager";
import NetworkManager from "./manager/network/NetworkManager";
import Loader from "./machine/Loader";
import Logger from "./machine/Logger";
import Game from "./Game";
import Localization from "../i18n/Localization";

export default class Global {

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

    /**
     * 事件访问器
     * @return {EventManager} 事件管理器
     */
    public get EventMgr(): EventManager {
        return EventManager.getInstance();
    }

    /**
     * 声音访问器
     * @return {AudioManager} 声音管理器
     */
    public get AudioMgr(): AudioManager {
        return AudioManager.getInstance();
    }

    /**
     * 界面访问器
     * @return {UIManager} 界面管理器
     */
    public get UIMgr(): UIManager {
        return UIManager.getInstance();
    }

    /**
     * 动画访问器
     * @return {AnimationManager} 动画管理器
     */
    public get AnimMgr(): AnimationManager {
        return AnimationManager.getInstance();
    }

    /**
     * 网络访问器
     * @return {NetworkManager} 网络管理器
     */
    public get NetMgr(): NetworkManager {
        return NetworkManager.getInstance();
    }

    /**
     * 资源加载访问器
     * @return {Loader} 资源加载器
     */
    public get Loader(): Loader {
        return Loader.getInstance();
    }

    /**
     * 日志访问器
     * @return {Logger} 日志管理器
     */
    public get Logger(): Logger {
        return Logger.getInstance();
    }

    /**
     * 游戏访问器
     * @return {Game} 游戏类
     */
    public get Game(): Game {
        return Game.getInstance();
    }

    /**
     * 本地话访问器
     * @return {Localization} 本地话类
     */
    public get Localization(): Localization {
        return Localization.getInstance();
    }


    public destroy(): void {
        delete window.G;
    }
}