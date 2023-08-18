/*
 * Author       : ougato
 * Date         : 2021-07-07 00:36:55
 * LastEditors  : ougato
 * LastEditTime : 2023-07-21 18:26:44
 * FilePath     : /client/assets/src/core/manager/ui/UIManager.ts
 * Description  : 界面管理器、所有的视图和场景、都由 UIManager 统一管理、包括打开视图|关闭视图|切换场景等等
 */

import BaseManager from "../../base/BaseManager";
import BaseScene from "../../base/BaseScene";
import BaseComponent from "../../base/BaseComponent";
import UIScene from "./UIScene";
import ResCache from "../res/ResCache";
import BaseView from "../../base/BaseView";
import UIPersist from "./UIPersist";
import BlockPersist from "../../../ui/persist/BlockPersist";
import LoadingPersist from "../../../ui/persist/LoadingPersist";
import WaitingPersist from "../../../ui/persist/WaitingPersist";
import DialogPersist from "../../../ui/persist/DialogPersist";
import BasePersist from "../../base/BasePersist";
import BaseItem from "../../base/BaseItem";
import UIUtils from "../../utils/UIUtils";
import TypeUtils from "../../utils/TypeUtils";
import { BundleDefine } from "../../../define/BundleDefine";
import { UIInterface } from "../../interface/UIInterface";
import { UIDefine } from "../../define/UIDefine";
import { ColorDefine } from "../../define/ColorDefine";
import { ConverUtils } from "../../utils/ConverUtils";

// 打开视图等待常驻几秒后显示时间（单位：毫秒）
const OPEN_VIEW_WAITING_TIME: number = 500;

export default class UIManager extends BaseManager {

    private static s_instance: UIManager = null;

    // 场景 Map<包名, 场景对象> 考虑在大厅资源小的情况下可以保留大厅、增加游戏返回到大厅时候的速度
    private _sceneMap: Map<BundleDefine.Name, UIScene> = null;
    // 常驻 Map<类名, 常驻对象>
    private _persistMap: Map<string, UIPersist> = null;
    // 场景加载定时器
    private _sceneTimer: NodeJS.Timeout = null;
    // 当前场景
    private _currScene: UIScene = null;
    // 场景最高层级
    private _sceneTopZIndex: number = null;
    // 对话框队列
    private _dialogQueue: UIInterface.DialogParam[] = null;

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

        this._sceneMap = new Map();
        this._sceneTopZIndex = 0;
        this._persistMap = new Map();
        this._dialogQueue = [];
    }

    protected destroy(): void {
        super.destroy();
        this._sceneMap.forEach((scene: UIScene, bundleName: BundleDefine.Name, map: Map<BundleDefine.Name, UIScene>) => {
            scene.release();
        });
        this._sceneMap.clear();
        this._sceneMap = null;
        this._persistMap.forEach((persist: UIPersist, className: string, map: Map<string, UIPersist>) => {
            persist.release();
        });
        this._persistMap.clear();
        this._persistMap = null;
        this.stopSceneTimer();
        this._sceneTimer = null;
        this._currScene = null;
        this._sceneTopZIndex = null;

    }

    /**
     * 打开视图（在当前场景中打开视图、当前场景中只能存在唯一视图）
     * @param param {UIInterface.ViewParam<T>} 视图参数
     * @param data {...any[]} 可变长参数
     */
    public openView<T extends BaseView>(param: UIInterface.ViewParam<T>, ...data: any[]): void {
        if (TypeUtils.isNull(param.viewClass)) {
            G.LogMgr.warn(`视图类不能为空`);
            return;
        }

        if (!(param.viewClass.prototype instanceof BaseView)) {
            G.LogMgr.warn(`视图必须继承 BaseView 类`);
            return;
        }

        if (TypeUtils.isNull(param.bundleName)) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (TypeUtils.isNull(param.style)) {
            param.style = UIDefine.Style.DEFAULT;
        }

        if (TypeUtils.isNull(param.delay) || typeof (param.delay) !== "number" || param.delay < 0) {
            param.delay = OPEN_VIEW_WAITING_TIME;
        }

        if (TypeUtils.isNull(param.layer)) {
            param.layer = UIDefine.ViewLayer.VIEW;
        }

        if (!this._currScene) {
            G.LogMgr.warn(`当前没有可使用的场景，需要加载一个场景并打开视图`);
            return;
        }

        this._currScene.addView(param, data);
    }

    /**
     * 关闭视图（仅关闭当前场景内的视图，其他场景的视图不管，但是删除的时候会有多个，从最顶层的那个开始关闭，只关一个）
     * 
     * @param viewName {string} 视图名
     * 
     * @param viewClass {UIInterface.UIClass<T>} 视图类
     */
    public closeView(viewName: string, isReleaseRes?: boolean): void;
    public closeView<T extends BaseView>(viewClass: UIInterface.UIClass<T>, isReleaseRes?: boolean): void;
    public closeView(): void {
        let name: string = null;
        if (typeof (arguments[0]) === "string") {
            let viewName: string = arguments[0];
            name = viewName;
        } else {
            let viewClass: UIInterface.UIClass<BaseView> = arguments[0];
            if (TypeUtils.isNull(viewClass)) {
                G.LogMgr.warn(`视图类不能为空`);
                return;
            }
            if (!(viewClass.prototype instanceof BaseView)) {
                G.LogMgr.warn(`视图必须继承 BaseView 类`);
                return;
            }
            if (!this._currScene) {
                G.LogMgr.warn(`当前没有可使用的场景，需要加载一个场景并打开视图`);
                return;
            }
            name = cc.js.getClassName(viewClass)
        }

        let isReleaseRes: boolean = !!arguments[1];

        this._currScene.delView(name, isReleaseRes);
    }

    /**
     * 打开场景
     * 由于整个游戏设计只有一个 fire 场景，其他场景概念都使用 prefab 来代替
     * 目的是更好的管理资源的交互和加载
     * @param param {UIInterface.SceneParam} 场景参数
     * @param data {...any[]} 数据
     */
    public openScene<T extends BaseScene>(param: UIInterface.SceneParam<T>, ...data: any[]): void {
        if (TypeUtils.isNull(param.sceneClass)) {
            G.LogMgr.warn(`场景类不能为空`);
            return;
        }

        if (!(param.sceneClass.prototype instanceof BaseScene)) {
            G.LogMgr.warn(`场景必须继承 BaseScene 类`);
            return;
        }

        if (TypeUtils.isNull(param.bundleName)) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (TypeUtils.isNull(param.delay) || typeof (param.delay) !== "number" || param.delay < 0) {
            param.delay = 0;
        }

        if (TypeUtils.isNull(param.isReleaseAllScene) || typeof (param.isReleaseAllScene) !== "boolean") {
            param.isReleaseAllScene = true;
        }

        let className: string = cc.js.getClassName(param.sceneClass);

        if (this._currScene && this._currScene.className === className) {
            if (!this._currScene.resCache || this._currScene.resCache.getBundleName() === param.bundleName) {
                G.LogMgr.warn(`不能重复加载相同场景 ${param.sceneClass.name}`);
                return;
            }
        }

        if (TypeUtils.isNull(param.sceneClass.prefabPath) || typeof (param.sceneClass.prefabPath) !== "string" || param.sceneClass.prefabPath.length <= 0) {
            G.LogMgr.warn(`找不到 ${param.sceneClass.name} 预制的路径、请重写 BaseComponent 中的静态成员 prefabPath 的路径`);
            return;
        }

        G.LogMgr.color("打开场景", className, ColorDefine.LogColor.SKY);

        this.startSceneTimer(param.delay);

        if (this.isSceneExist(param.bundleName, className)) {
            this.topScene(param.bundleName);
            if (param.isReleaseAllScene) {
                this.closeAllScene();
            }
        } else {
            let newScene: UIScene = new UIScene();
            if (!this._currScene) {
                this._currScene = newScene;
                this._currScene.className = className;
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
                        if (this._currScene !== newScene) {
                            let oldScene: UIScene = this._sceneMap.get(param.bundleName);
                            if (oldScene) {
                                this._sceneMap.delete(oldScene.resCache.getBundleName());
                                oldScene.release();
                            }

                            this._currScene = newScene;
                            this._currScene.className = className;

                            if (param.isReleaseAllScene) {
                                this.closeAllScene();
                            }
                        }
                        this._sceneMap.set(param.bundleName, newScene);
                        let node: cc.Node = cc.instantiate(resCache.asset as cc.Prefab);
                        let script: BaseComponent = newScene.setScript(node, param.sceneClass);
                        this.addToCanvas(node);
                        this._currScene.resCache = resCache;
                        this._currScene.node = node;
                        this._currScene.script = script;
                        if (param.onComplete) param.onComplete();
                        if (script.onShow) script.onShow.apply(script, data);
                    } else {
                        if (!this._currScene.resCache) {
                            this._currScene = null;
                        }
                        if (param.onError) param.onError();
                    }
                    this.stopSceneTimer();
                },
            })
        }

    }

    /**
     * 打开防触摸视图
     */
    public openBlock(): void {
        this.openPersist(BlockPersist, UIDefine.PersistLayer.BLOCK);
    }

    /**
     * 关闭防触摸视图
     */
    public closeBlock(): void {
        this.closePersist(BlockPersist);
    }

    /**
     * 打开加载进度视图（Loading）
     */
    public openLoading(): void {
        this.openPersist(LoadingPersist, UIDefine.PersistLayer.LOADING);
    }

    /**
     * 关闭加载进度视图
     */
    public closeLoading(): void {
        this.closePersist(LoadingPersist);
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
        percent = ConverUtils.toFixed(percent, retain);
        // this._persist.setLoading(ConverUtils.fill0(percent, retain));
    }

    /**
     * 打开等待视图（转圈）
     */
    public openWaiting(): void {
        this.openPersist(WaitingPersist, UIDefine.PersistLayer.WAITING);
    }

    /**
     * 关闭等待视图
     */
    public closeWaiting(): void {
        this.closePersist(WaitingPersist);
    }

    /**
     * 打开对话框
     * @param param {UIInterface.DialogParam} 对话框参数
     */
    public async openDialog(param: UIInterface.DialogParam): Promise<void> {
        if (TypeUtils.isNull(param.showMode)) {
            param.showMode = UIDefine.DialogMode.REAR;
        }

        if (param.showMode === UIDefine.DialogMode.FRONT) {
            this._dialogQueue.unshift(param);
        } else if (param.showMode === UIDefine.DialogMode.REAR) {
            this._dialogQueue.push(param);
        }

        let persist: UIPersist = this._persistMap.get(cc.js.getClassName(DialogPersist));
        (persist.script as DialogPersist).closeCallback = this.onDialogNext.bind(this);
        if (!persist.script.node.parent || !persist.script.node.active || param.showMode === UIDefine.DialogMode.FRONT) {
            this.openPersist(DialogPersist, UIDefine.PersistLayer.DIALOG, param);
        }
    }

    /**
     * 关闭对话框
     * @param isClear {boolean} 是否清理所有对话框（false 时就是关闭当前，队列里面的继续弹出，true 时关闭当前，清理队列不再弹出）
     */
    public closeDialog(isClear: boolean = false): void {
        if (isClear) {
            this._dialogQueue = [];
        }
        let persist: UIPersist = this._persistMap.get(cc.js.getClassName(DialogPersist));
        (persist.script as DialogPersist).playCloseAnimation();
    }

    /**
     * 当前对话框关闭后执行
     * @param param {UIInterface.DialogParam} 对话框参数（通过参数找到要删除的队列项）
     */
    private onDialogNext(param: UIInterface.DialogParam): void {
        let index: number = this._dialogQueue.indexOf(param);
        if (index !== -1) {
            this._dialogQueue.splice(index, 1);
        }

        let frontParam: UIInterface.DialogParam = this._dialogQueue.shift();
        if (frontParam) {
            this.openPersist(DialogPersist, UIDefine.PersistLayer.DIALOG, frontParam);
        }
    }

    /**
     * 关闭除了当前场景以外的其他的场景
     */
    public closeAllScene(): void {
        this._sceneMap.forEach((value: UIScene, key: BundleDefine.Name, map: Map<BundleDefine.Name, UIScene>) => {
            if (!this._currScene || this._currScene !== value) {
                value.release();
            }
        });
    }

    /**
     * 获取场景
     * @param bundleName {BundleDefine.Name} 包名 如果 bundleName 参数为 undefined 和 null，那么就返回当前场景
     * @returns {UIScene} 场景 如果找不到需要场景返回 null
     */
    public getScene(bundleName?: BundleDefine.Name): UIScene {
        if (TypeUtils.isNull(bundleName)) {
            return this._currScene;
        }

        let scene: UIScene = this._sceneMap.get(bundleName);
        if (!scene) {
            scene = null;
        }

        return scene;
    }

    /**
     * 添加节点
     * @param param {UIInterface.NodeParam<T>} 节点参数
     */
    public addItem<T extends BaseItem>(param: UIInterface.ItemParam<T>, ...data: any[]): void {
        if (TypeUtils.isNull(param.itemClass)) {
            G.LogMgr.warn(`节点类不能为空`);
            return;
        }

        if (!(param.itemClass.prototype instanceof BaseItem)) {
            G.LogMgr.warn(`节点必须继承 BaseItem 类`);
            return;
        }

        if (TypeUtils.isNull(param.bundleName)) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (TypeUtils.isNull(param.layer)) {
            param.layer = 0;
        }

        if (TypeUtils.isNull(param.parentNode)) {
            param.parentNode = this.getScene().node;
        }

        G.ResMgr.load({
            base: param.itemClass.prefabPath,
            bundleName: param.bundleName,
            assetType: cc.Prefab,
            progressCallback: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => {
                if (param.onProgress) param.onProgress(finish, total, item);
            },
            completeCallback: (resCache: ResCache | null) => {
                if (resCache !== null && resCache.asset !== null) {
                    let node: cc.Node = cc.instantiate(resCache.asset as cc.Prefab);
                    let script: BaseComponent = UIUtils.addScript(node, param.itemClass);
                    param.parentNode.addChild(node, param.layer);
                    if (param.onComplete) param.onComplete(node);
                    if (script.onShow) script.onShow.apply(script, data);
                } else {
                    if (param.onError) param.onError();
                }

            },
        })
    }

    /**
     * 添加常驻
     */
    public async addPersist(persistClass: UIInterface.UIClass<BasePersist>): Promise<void> {
        return new Promise((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) => {
            G.ResMgr.load({
                base: persistClass.prefabPath,
                bundleName: BundleDefine.Name.RESOURCES,
                assetType: cc.Prefab,
                completeCallback: (resCache: ResCache | null) => {
                    if (resCache !== null && resCache.asset !== null) {
                        let persist: UIPersist = new UIPersist();
                        let node: cc.Node = cc.instantiate(resCache.asset as cc.Prefab);
                        let script: BasePersist = persist.setScript(node, persistClass) as BasePersist;
                        persist.className = cc.js.getClassName(persistClass);;
                        persist.script = script;
                        persist.resCache = resCache;
                        persist.node = node;
                        this._persistMap.set(persist.className, persist);
                        resolve();
                    } else {
                        reject();
                    }
                },
            })
        });
    }

    private async openPersist(persistClass: UIInterface.UIClass<BasePersist>, layer: UIDefine.PersistLayer, ...data: any[]): Promise<void> {
        let persist: UIPersist = this._persistMap.get(cc.js.getClassName(persistClass));
        if (!persist) {
            await this.addPersist(persistClass);
        }

        if (!persist.node.parent) {
            this.addToCanvas(persist.node, layer);
        }

        persist.script.show();
        persist.script.onShow.apply(persist.script, data);
    }

    private closePersist(persistClass: UIInterface.UIClass<BasePersist>): void {
        let persist: UIPersist = this._persistMap.get(cc.js.getClassName(persistClass));
        if (TypeUtils.isNull(persist)) {
            return;
        }

        persist.script.hide();
    }

    /**
     * 启动加载定时器
     * @param ms {number} 等待多久打开进度视图（单位：毫秒）
     */
    private startSceneTimer(ms: number): void {
        if (!TypeUtils.isNull(this._sceneTimer)) {
            return;
        }

        this._sceneTimer = setTimeout(() => {
            this.openLoading();
        }, ms);
    }

    /**
     * 停止加载定时器
     */
    private stopSceneTimer(): void {
        if (!TypeUtils.isNull(this._sceneTimer)) {
            clearTimeout(this._sceneTimer);
            this._sceneTimer = null;
            this.closeLoading();
        }
    }

    /**
     * 添加到 fire 场景下的 Canvas 画布的子节点
     * @param node {cc.Node} 需要添加的场景或者是常驻
     * @param layer {number} 层级（有值代表常驻，没值代表场景）
     * @returns 
     */
    private addToCanvas(node: cc.Node, layer?: number): void {
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

        let zIndex: number = 0;
        if (TypeUtils.isNull(layer)) {
            zIndex = this._sceneTopZIndex + 1;
            if (zIndex >= (UIDefine.CanvasLayer.SCENE + 1) * UIDefine.LAYER_INTERVAL) {
                zIndex = this.resetSceneZIndex() + 1;
            }
        } else {
            zIndex = UIDefine.CanvasLayer.PERSIST + layer;
        }

        canvasNode.addChild(node, zIndex);
        this._sceneTopZIndex = zIndex;
    }

    /**
     * 重置场景层的层级顺序连续
     * @returns {number} 当前场景最高层级
     */
    private resetSceneZIndex(): number {
        let sceneList: any[][] = Object.entries(this._sceneMap);
        sceneList.sort((a: any[], b: any[]) => {
            return a[1].node.zIndex - b[1].node.zIndex;
        });

        let topZIndex: number = UIDefine.CanvasLayer.SCENE;
        for (let i: number = 0; i < sceneList.length; ++i) {
            let bundleName: BundleDefine.Name = sceneList[i][0];
            let uiScene: UIScene = this._sceneMap.get(bundleName);
            if (uiScene) {
                topZIndex += i;
                uiScene.node.zIndex = topZIndex;
            }
        }

        return topZIndex;
    }

    /**
     * 场景提升到最顶层
     * @param bundleName {BundleDefine.Name} 包名
     */
    private topScene(bundleName: BundleDefine.Name): void {
        let uiScene: UIScene = this._sceneMap.get(bundleName);
        if (!uiScene) {
            G.LogMgr.warn(`未找到场景需要提升到最顶层 ${bundleName}`);
            return;
        }

        let zIndex: number = this._sceneTopZIndex + 1;
        if (zIndex >= (UIDefine.CanvasLayer.SCENE + 1) * UIDefine.LAYER_INTERVAL) {
            zIndex = this.resetSceneZIndex() + 1;
        }
        uiScene.node.zIndex = zIndex;
        this._sceneTopZIndex = zIndex;
        this._currScene = uiScene;
    }

    /**
     * 场景是否存在
     * @param bundleName {BundleDefine.Name} 包名
     * @param className {string} 类名
     * @returns {boolean} 是否存在
     */
    private isSceneExist(bundleName: BundleDefine.Name, className: string): boolean {
        let isExist: boolean = false;
        let uiScene: UIScene = this._sceneMap.get(bundleName);

        if (uiScene) {
            isExist = uiScene.className === className;
        }

        return isExist;
    }

}