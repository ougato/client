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

export default class UIManager extends BaseManager {

    private static s_instance: UIManager = null;

    // 场景 Map 考虑在大厅资源小的情况下可以保留大厅、增加游戏返回到大厅时候的速度
    private _sceneCacheMap: Map<BundleDefine.Name, UISceneCache> = null;
    // 场景加载进度定时器
    private _sceneProgressTimer: number = null;
    // 当前场景
    private _currSceneCache: UISceneCache = null;
    // 当前场景最高层级
    private _currSceneTopZIndex: number = 0;

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
    }

    /**
     * 打开视图
     * @param param {UIInterface.ViewParam} 视图参数
     * @param data {...any[]} 数据
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

        if (param.progressDelay === null || param.progressDelay === undefined || typeof (param.progressDelay) !== "number" || param.progressDelay < 0) {
            param.progressDelay = 0;
        }
        
        if (param.layer === null || param.layer === undefined) {
            param.layer = UIDefine.ViewLayer.VIEW;
        }

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

        if (param.progressDelay === null || param.progressDelay === undefined || typeof (param.progressDelay) !== "number" || param.progressDelay < 0) {
            param.progressDelay = 0;
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

        this.startProgressTimer(param.progressDelay);

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
                    let retain: number = 2;
                    let percent: number = MathUtils.decimal(finish / total, retain);
                    this.setProgress(MathUtils.fill0(percent, retain));
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
                        let script: BaseUI = this.addScript(node, param.sceneClass);
                        this.addToScene(node);
                        this._currSceneCache.resCache = resCache;
                        this._currSceneCache.node = node;
                        this._currSceneCache.script = script;
                        if (param.onComplete) param.onComplete();
                        if (script.onLoaded) script.onLoaded.apply(script, data);
                    } else {
                        if (!this._currSceneCache.resCache) {
                            this._currSceneCache = null;
                        }
                        if (param.onError) param.onError();
                    }
                    this.stopProgressTimer();
                },
            })
        }

    }

    /**
     * 打开进度转场视图
     */
    public openProgress(): void {

    }

    /**
     * 关闭进度转场视图
     */
    public closeProgress(): void {

    }

    /**
     * 设置进度转场百分比
     * @param percent {number | string} 百分比
     */
    public setProgress(percent: number | string): void {

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
    private startProgressTimer(ms: number): void {
        this.stopProgressTimer();
        this._sceneProgressTimer = setTimeout(() => {
            this.openProgress();
        }, ms);
    }

    /**
     * 停止进度视图定时器
     */
    private stopProgressTimer(): void {
        if (this._sceneProgressTimer !== null && this._sceneProgressTimer !== undefined) {
            clearTimeout(this._sceneProgressTimer);
            this.closeProgress();
        }
    }

    /**
     * 挂载根节点脚本组件
     */
    private addScript<T extends BaseUI>(node: cc.Node, uiClass: UIInterface.UIClass<T>): BaseUI | null {
        let script: BaseUI = null;

        if (!node) {
            G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}、节点为空`);
            return null;
        }

        if (!uiClass) {
            G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}、脚本类为空`);
            return null;
        }

        script = node.getComponent(uiClass);
        if (!script) {
            script = node.addComponent(uiClass);
            if (!script) {
                G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}`);
                script = null;
            }
        }

        return script;
    }

    private addToScene(node: cc.Node): void {
        let realScene: cc.Scene = cc.director.getScene();
        if (!realScene) {
            G.LogMgr.warn(`游戏场景为空`);
            return;
        }

        let canvasNode: cc.Node = realScene.getChildByName("Canvas");
        if (!canvasNode) {
            G.LogMgr.warn(`找不到场景上的节点名 Canvas`);
            return;
        }

        let zIndex: number = this._currSceneTopZIndex + 1;
        if (zIndex >= UIDefine.SceneLayer.SYSTEM) {
            zIndex = this.resetSceneZIndex() + 1;
        }
        canvasNode.addChild(node, zIndex);
        this._currSceneTopZIndex = zIndex;
    }

    /**
     * 重置场景的层级
     * @returns {number} 当前场景最高层级
     */
    private resetSceneZIndex(): number {
        let sceneCacheList: any[][] = Object.entries(this._sceneCacheMap);
        sceneCacheList = sceneCacheList.sort((a: any[], b: any[]) => {
            return a[1].node.zIndex - b[1].node.zIndex;
        });

        let topZIndex: number = UIDefine.SceneLayer.SCENE;
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
        if (zIndex >= UIDefine.SceneLayer.SYSTEM) {
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