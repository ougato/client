/*
 * Author       : ougato
 * Date         : 2021-07-07 00:36:55
 * LastEditors  : ougato
 * LastEditTime : 2021-09-08 00:36:49
 * FilePath     : /client/assets/src/core/manager/ui/UIManager.ts
 * Description  : 界面管理器、所有的视图和场景、都由 UIManager 统一管理、包括打开视图|关闭视图|切换场景等等
 */

import BaseManager from "../../base/BaseManager";
import * as UIInterface from "../../interface/UIInterface";
import * as BundleDefine from "../../define/BundleDefine";
import * as UIDefine from "../../define/UIDefine";
import BaseScene from "../../base/BaseScene";
import BaseUI from "../../base/BaseUI";
import UISceneCache from "./UISceneCache";
import ResCache from "../res/ResCache";
import MathUtils from "../../utils/MathUtils";
import BaseView from "../../base/BaseView";
import UIPersistCache from "./UIPersistCache";

export default class UIManager extends BaseManager {

    private static s_instance: UIManager = null;

    // 场景 Map 考虑在大厅资源小的情况下可以保留大厅、增加游戏返回到大厅时候的速度
    private _sceneCacheMap: Map<BundleDefine.Name, UISceneCache> = null;
    // 场景加载进度定时器
    private _sceneLoadingTimer: number = null;
    // 当前场景
    private _currSceneCache: UISceneCache = null;
    // 当前场景最高层级
    private _currSceneTopZIndex: number = null;
    // 常驻
    private _persistCache: UIPersistCache = null;

    public static getInstance(): UIManager {
        if (this.s_instance === null) {
            this.s_instance = new UIManager();
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

        this.init();
    }

    private init(): void {
        this._sceneCacheMap = new Map();
        this._sceneLoadingTimer = null;
        this._currSceneCache = null;
        this._currSceneTopZIndex = 0;
        this._persistCache = null;
    }

    /**
     * 打开视图（所有打开的视图，只能在当前场景打开，不会存在于其他场景）
     * @param param {UIInterface.ViewParam<T>} 视图参数
     * @param data {...any[]} 可变长参数
     */
    public openView<T extends BaseView>(param: UIInterface.ViewParam<T>, ...data: any[]): void {
        if (param.viewClass === null || param.viewClass === undefined) {
            G.LogMgr.warn(`视图类不能为空`);
            return;
        }

        if (!(param.viewClass.prototype instanceof BaseView)) {
            G.LogMgr.warn(`视图必须继承 BaseView 类`);
            return;
        }

        if (param.bundleName === null || param.bundleName === undefined) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (param.style === null || param.style === undefined) {
            param.style = UIDefine.Style.DEFAULT;
        }

        if (param.delay === null || param.delay === undefined || typeof (param.delay) !== "number" || param.delay < 0) {
            param.delay = 0;
        }

        if (param.layer === null || param.layer === undefined) {
            param.layer = UIDefine.ViewLayer.VIEW;
        }

        if (!this._currSceneCache) {
            G.LogMgr.warn(`当前没有可使用的场景，需要加载一个场景并打开视图`);
            return;
        }

        this._currSceneCache.addView(param, data);
    }

    /**
     * 关闭视图（仅关闭当前场景内的视图，其他场景的视图不管，但是删除的时候会有多个，从最顶层的那个开始关闭，只关一个）
     * @param viewClass {UIInterface.UIClass<T>} 视图类
     */
    public closeView<T extends BaseView>(viewClass: UIInterface.UIClass<T>): void {
        if (viewClass === null || viewClass === undefined) {
            G.LogMgr.warn(`视图类不能为空`);
            return;
        }
        
        if (!(viewClass.prototype instanceof BaseView)) {
            G.LogMgr.warn(`视图必须继承 BaseView 类`);
            return;
        }

        if (!this._currSceneCache) {
            G.LogMgr.warn(`当前没有可使用的场景，需要加载一个场景并打开视图`);
            return;
        }

        this._currSceneCache.delView(cc.js.getClassName(viewClass));
    }

    /**
     * 打开场景
     * 由于整个游戏设计只有一个 fire 场景，其他场景概念都使用 prefab 来代替
     * 目的是更好的控制资源
     * @param param {UIInterface.SceneParam} 场景参数
     * @param data {...any[]} 数据
     */
    public openScene<T extends BaseScene>(param: UIInterface.SceneParam<T>, ...data: any[]): void {
        if (param.sceneClass === null || param.sceneClass === undefined) {
            G.LogMgr.warn(`场景类不能为空`);
            return;
        }

        if (!(param.sceneClass.prototype instanceof BaseScene)) {
            G.LogMgr.warn(`场景必须继承 BaseScene 类`);
            return;
        }

        if (param.bundleName === null || param.bundleName === undefined) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (param.delay === null || param.delay === undefined || typeof (param.delay) !== "number" || param.delay < 0) {
            param.delay = 0;
        }

        if (param.isReleaseAllScene === null || param.isReleaseAllScene === undefined || typeof (param.isReleaseAllScene) !== "boolean") {
            param.isReleaseAllScene = true;
        }

        let className: string = cc.js.getClassName(param.sceneClass);

        if (this._currSceneCache && this._currSceneCache.className === className) {
            if (!this._currSceneCache.resCache || this._currSceneCache.resCache.getBundleName() === param.bundleName) {
                G.LogMgr.warn(`不能重复加载相同场景 ${param.sceneClass.name}`);
                return;
            }
        }

        if (param.sceneClass.prefabPath === null || param.sceneClass.prefabPath === undefined || typeof (param.sceneClass.prefabPath) !== "string" || param.sceneClass.prefabPath.length <= 0) {
            G.LogMgr.warn(`找不到 ${param.sceneClass.name} 预制的路径、请重写 BaseUI 中的静态成员 prefabPath 的路径`);
            return;
        }

        this.startLoadingTimer(param.delay);

        if (this.isSceneExist(param.bundleName, className)) {
            this.topScene(param.bundleName);
            if (param.isReleaseAllScene) {
                this.closeAllScene();
            }
        } else {
            let newSceneCache: UISceneCache = new UISceneCache();
            if (!this._currSceneCache) {
                this._currSceneCache = newSceneCache;
                this._currSceneCache.className = className;
            }

            G.ResMgr.load({
                base: param.sceneClass.prefabPath,
                bundleName: param.bundleName,
                assetType: cc.Prefab,
                progressCallback: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => {
                    this.setLoading(finish / total);
                    if (param.onProgress) param.onProgress(finish, total, item);
                },
                completeCallback: (resCache: ResCache | null) => {
                    if (resCache !== null) {
                        if (this._currSceneCache !== newSceneCache) {
                            let oldSceneCache: UISceneCache = this._sceneCacheMap.get(param.bundleName);
                            if (oldSceneCache) {
                                this._sceneCacheMap.delete(oldSceneCache.resCache.getBundleName());
                                oldSceneCache.release();
                            }

                            this._currSceneCache = newSceneCache;
                            this._currSceneCache.className = className;

                            if (param.isReleaseAllScene) {
                                this.closeAllScene();
                            }
                        }
                        this._sceneCacheMap.set(param.bundleName, newSceneCache);
                        let node: cc.Node = cc.instantiate(resCache.asset as cc.Prefab);
                        let script: BaseUI = newSceneCache.addScript(node, param.sceneClass);
                        this.addToCanvas(node);
                        this._currSceneCache.resCache = resCache;
                        this._currSceneCache.node = node;
                        if (param.onComplete) param.onComplete();
                        if (script.onLoaded) script.onLoaded.apply(script, data);
                    } else {
                        if (!this._currSceneCache.resCache) {
                            this._currSceneCache = null;
                        }
                        if (param.onError) param.onError();
                    }
                    this.stopLoadingTimer();
                },
            })
        }

    }

    /**
     * 打开防触摸视图
     */
    public openLockScreen(): void {
        this._persistCache.showLockScreen();
    }

    /**
     * 关闭防触摸视图
     */
    public closeLockScreen(): void {
        this._persistCache.hideLockScreen();
    }

    /**
     * 打开加载进度视图（Loading）
     */
    public openLoading(): void {
        this._persistCache.showLoading();
    }

    /**
     * 关闭加载进度视图
     */
    public closeLoading(): void {
        this._persistCache.hideLoading();
    }

    /**
     * 设置进度转场百分比
     * @param percent {number | string} 百分比
     */
    public setLoading(percent: number | string): void {
        percent = Number(percent);
        if (isNaN(percent)) {
            G.LogMgr.warn(`设置进度转场百分比 传入的百分比不是一个数，默认处理为 0`);
            percent = 0;
        }
        let retain: number = 2;
        percent = MathUtils.decimal(percent, retain);
        this._persistCache.setLoading(MathUtils.fill0(percent, retain));
    }

    /**
     * 打开等待视图（转圈）
     */
    public openWaiting(): void {
        this._persistCache.showWaiting();
    }

    /**
     * 关闭等待视图
     */
    public closeWaiting(): void {
        this._persistCache.hideWaiting();
    }

    /**
     * 关闭除了当前场景以外的其他的场景
     */
    public closeAllScene(): void {
        this._sceneCacheMap.forEach((value: UISceneCache, key: BundleDefine.Name, map: Map<BundleDefine.Name, UISceneCache>) => {
            if (!this._currSceneCache || this._currSceneCache !== value) {
                value.release();
            }
        });
    }

    /**
     * 获取场景
     * @param bundleName {BundleDefine.Name} 包名 如果 bundleName 参数为 undefined 和 null，那么就返回当前场景
     * @returns {UISceneCache} 场景 如果找不到需要场景返回 null
     */
    public getScene(bundleName?: BundleDefine.Name): UISceneCache {
        if (bundleName === undefined || bundleName === null) {
            return this._currSceneCache;
        }

        let sceneCache: UISceneCache = this._sceneCacheMap.get(bundleName);
        if (!sceneCache) {
            sceneCache = null;
        }

        return sceneCache;
    }

    /**
     * 启动进度视图定时器
     * @param ms {number} 等待多久打开进度视图（单位：毫秒）
     * @returns {number} 定时器 ID
     */
    private startLoadingTimer(ms: number): void {
        this.stopLoadingTimer();
        this._sceneLoadingTimer = setTimeout(() => {
            this.openLoading();
        }, ms);
    }

    /**
     * 停止进度视图定时器
     */
    private stopLoadingTimer(): void {
        if (this._sceneLoadingTimer !== null && this._sceneLoadingTimer !== undefined) {
            clearTimeout(this._sceneLoadingTimer);
            this.closeLoading();
        }
    }

    /**
     * 添加到 fire 场景下的 Canvas 画布的子节点
     * @param node {cc.Node} 需要添加的场景或者是常驻
     * @returns 
     */
    private addToCanvas(node: cc.Node): void {
        let realScene: cc.Scene = cc.director.getScene();
        if (!realScene) {
            G.LogMgr.warn(`游戏场景 fire 为空`);
            return;
        }

        let canvasNode: cc.Node = realScene.getChildByName("Canvas");
        if (!canvasNode) {
            G.LogMgr.warn(`找不到场景上的节点名 Canvas`);
            return;
        }

        let zIndex: number = this._currSceneTopZIndex + 1;
        if (zIndex >= (UIDefine.CanvasLayer.SCENE + 1) * UIDefine.LAYER_INTERVAL) {
            zIndex = this.resetSceneZIndex() + 1;
        }
        canvasNode.addChild(node, zIndex);
        this._currSceneTopZIndex = zIndex;
    }

    /**
     * 重置场景层的层级顺序连续
     * @returns {number} 当前场景最高层级
     */
    private resetSceneZIndex(): number {
        let sceneCacheList: any[][] = Object.entries(this._sceneCacheMap);
        sceneCacheList = sceneCacheList.sort((a: any[], b: any[]) => {
            return a[1].node.zIndex - b[1].node.zIndex;
        });

        let topZIndex: number = UIDefine.CanvasLayer.SCENE;
        for (let i: number = 0; i < sceneCacheList.length; ++i) {
            let bundleName: BundleDefine.Name = sceneCacheList[i][0];
            let uiSceneCache: UISceneCache = this._sceneCacheMap.get(bundleName);
            if (uiSceneCache) {
                topZIndex += i;
                uiSceneCache.node.zIndex = topZIndex;
            }
        }

        return topZIndex;
    }

    /**
     * 场景提升到最顶层
     * @param bundleName {BundleDefine.Name} 包名
     */
    private topScene(bundleName: BundleDefine.Name): void {
        let uiSceneCache: UISceneCache = this._sceneCacheMap.get(bundleName);
        if (!uiSceneCache) {
            G.LogMgr.warn(`未找到场景需要提升到最顶层 ${bundleName}`);
            return;
        }

        let zIndex: number = this._currSceneTopZIndex + 1;
        if (zIndex >= (UIDefine.CanvasLayer.SCENE + 1) * UIDefine.LAYER_INTERVAL) {
            zIndex = this.resetSceneZIndex() + 1;
        }
        uiSceneCache.node.zIndex = zIndex;
        this._currSceneTopZIndex = zIndex;
        this._currSceneCache = uiSceneCache;
    }

    /**
     * 场景是否存在
     * @param bundleName {BundleDefine.Name} 包名
     * @param className {string} 类名
     * @returns {boolean} 是否存在
     */
    private isSceneExist(bundleName: BundleDefine.Name, className: string): boolean {
        let isExist: boolean = false;
        let uiSceneCache: UISceneCache = this._sceneCacheMap.get(bundleName);

        if (uiSceneCache) {
            isExist = uiSceneCache.className === className;
        }

        return isExist;
    }
}