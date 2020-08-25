/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-26 00:01:30
 * @FilePath     : \client242\assets\src\core\Global.ts
 * @Description  : 框架初始化类
 */

import EventManager from "./manager/event/EventManager";
import AudioManager from "./manager/audio/AudioManager";
import ViewManager from "./manager/view/ViewManager";
import AnimationManager from "./manager/animation/AnimationManager";
import NetworkManager from "./manager/network/NetworkManager";
import { Loader } from "./machine/Loader";
import Logger from "./machine/Logger";

export default class Global {

    private static g_instance: Global = null;

    public static getInstance(): Global {
        if (this.g_instance === null) {
            this.g_instance = new Global();
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

    }

    public init(): void {
        // 初始化全局变量，方便 UI 模块调用
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
     * 视图访问器
     * @return {ViewManager} 视图管理器
     */
    public get ViewMgr(): ViewManager {
        return ViewManager.getInstance();
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
     * 销毁
     */
    public destroy(): void {
        EventManager.destroy();
        AudioManager.destroy();
        ViewManager.destroy();
        AnimationManager.destroy();
        NetworkManager.destroy();
        Loader.destroy();
        Logger.destroy();

        if (window.G !== undefined) {
            window.G = null;
            delete window.G;
        }
    }
}