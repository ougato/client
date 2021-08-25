/*
 * Author       : ougato
 * Date         : 2021-07-07 00:36:55
 * LastEditors  : ougato
 * LastEditTime : 2021-08-26 02:22:14
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

export default class UIManager extends BaseManager {

    private static s_instance: UIManager = null;

    // 场景列表、在大厅资源小的情况下保留大厅、增加游戏返回到大厅时候的速度
    private _uiSceneList: UISceneCache[] = null;
    // 当前场景、单场景设计、所有场景都是以 Prefab 代替
    private _currUIScene: UISceneCache = null;

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
        this._uiSceneList = [];
        this._currUIScene = null;
    }

    /**
     * 打开视图
     * @param param {UIInterface.ViewParam} 视图参数
     * @param data {...any[]} 数据
     */
    public openView(param: UIInterface.ViewParam, ...data: any[]): void {
        if (param.bundleName === null || param.bundleName === undefined) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (param.style === null || param.style === undefined) {
            param.style = UIDefine.Style.DEFAULT;
        }

        if (param.layer === null || param.layer === undefined) {
            param.layer = UIDefine.Layer.VIEW;
        }

    }

    /**
     * 打开场景
     * 由于整个游戏设计只有一个 fire 场景，其他场景概念都使用 prefab 来代替
     * 目的是更好的控制资源
     * @param param {UIInterface.SceneParam} 场景参数
     * @param data {...any[]} 数据
     */
    public openScene(param: UIInterface.SceneParam, ...data: any[]): void {
        if (param.sceneClass === null || param.sceneClass === undefined) {
            G.LogMgr.warn(`场景类不能为空`);
            return;
        }

        if (!(param.sceneClass instanceof BaseScene)) {
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

        if (this._currUIScene && this._currUIScene.class === param.sceneClass) {
            G.LogMgr.warn(`不能重复加载相同场景 ${param.sceneClass.name}`);
            return;
        }

        if (param.sceneClass.prefabPath === null || param.sceneClass.prefabPath === undefined || typeof (param.sceneClass.prefabPath) !== "string" || param.sceneClass.prefabPath.length <= 0) {
            G.LogMgr.warn(`找不到 ${param.sceneClass.name} 预制的路径`);
            return;
        }

        let progressTimer: number = this.startProgressTimer(param.progressDelay);
        let currUIScene: UISceneCache = this.getScene(param.sceneClass);

        if (currUIScene) {
            if (currUIScene.isLoaded) {

            } else {

            }
            this.stopProgressTimer(progressTimer);
        } else {
            currUIScene = new UISceneCache();
            currUIScene.class = param.sceneClass;
            currUIScene.path = param.sceneClass.prefabPath;
            G.ResMgr.load({
                base: currUIScene.path,
                bundleName: param.bundleName,
                assetType: cc.Prefab,
                progressCallback: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => {
                    let retain: number = 2;
                    let percent: number = MathUtils.decimal(finish / total, retain);
                    this.setProgress(MathUtils.fill0(percent, retain));
                    if (param.onProgress) param.onProgress(finish, total, item);
                },
                // 加载完成回调
                completeCallback: (resCache: ResCache | null) => {
                    if (resCache !== null) {
                        currUIScene.isLoaded = true;
                        this._currUIScene = currUIScene;
                        if (param.onComplete) param.onComplete();
                    } else {
                        if (param.onError) param.onError();
                    }
                    this.stopProgressTimer(progressTimer);
                },
            })
        }

    }

    /**
     * 释放场景
     * @param scene {BaseScene} 需要释放的场景
     */
    public releaseScene(scene: BaseScene): void {
        if (!scene) {
            G.LogMgr.log(`释放场景不能为空`);
            return;
        }
    }

    /**
     * 关闭除了当前场景以外的其他的场景
     */
    public closeExceptScene(): void {

    }

    /**
     * 关闭所有场景
     */
    public closeAllScene(): void {

    }

    /**
     * 获取场景
     * @param sceneClass {BaseScene} 场景类
     * @returns {UISceneCache} 打开后的场景
     */
    private getScene(sceneClass: BaseScene): UISceneCache {
        let uiSceneCache: UISceneCache = null;
        for (let i: number = 0; i < this._uiSceneList.length; ++i) {
            if (this._uiSceneList[i].class === sceneClass) {
                uiSceneCache = this._uiSceneList[i];
                break;
            }
        }
        return uiSceneCache;
    }

    /**
     * 启动进度视图定时器
     * @param ms {number} 等待多久打开进度视图（单位：毫秒）
     * @returns {number} 定时器 ID
     */
    private startProgressTimer(ms: number): number {
        return setTimeout(() => {
            this.openProgress();
        }, ms);
    }

    /**
     * 停止进度视图定时器
     * @param id {number} 定时器 ID
     */
    private stopProgressTimer(id: number): void {
        if (id !== null && id !== undefined) {
            clearTimeout(id);
            this.closeProgress();
        }
    }

}