/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 01:41:15
 * @FilePath     : \client242\assets\src\core\manager\ui\UIManager.ts
 * @Description  : 视图管理器，用于游戏中所有视图模块的打开和关闭
 */

import Manager from "../Manager";
import Logger from "../../machine/Logger";
import { CommonViewDefine, PersistViewDefine } from "../../../define/ViewDefine";
import ViewOrderDefine from "../../../define/ViewOrderDefine";
import { ORDER_INTERVAL } from "../../../define/ViewOrderDefine";
import AnimationEffectUtil from "../../../utils/AnimationEffectUtil";
import Loader from "../../machine/Loader";
import Util from "../../../utils/Util";
import PopupsView from "../../../ui/view/common/PopupsView"

// 预加载场景等待多少秒未完成，就显示进度条界面
const PRELOAD_SCENE_WAITIMG_TIME: number = 1;
// 默认视图层级
const DEFAULT_VIEW_LAYER = ViewOrderDefine.UI;

export default class UIManager extends Manager implements ManagerInterface {

    private static g_instance: UIManager = null;

    // 常驻节点 Map
    private m_persistNodeMap: Map<PersistViewDefine, cc.Node> = null;
    // 视图节点 Map
    private m_viewNodeMap: Map<ViewDefineType, cc.Node> = null;
    // 视图每层最高层级 Map
    private m_viewTopOrderMap: Map<ViewOrderDefine, number> = null;

    public static getInstance(): UIManager {
        if (this.g_instance === null) {
            this.g_instance = new UIManager();
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

        this.m_persistNodeMap = new Map<PersistViewDefine, cc.Node>();
        this.m_viewNodeMap = new Map<ViewDefineType, cc.Node>();
        this.m_viewTopOrderMap = new Map<ViewOrderDefine, number>();
        for (let order in ViewOrderDefine) {
            let numOrder: ViewOrderDefine = Number(order);
            if (!isNaN(numOrder)) {
                this.m_viewTopOrderMap.set(numOrder, numOrder);
            }
        }
    }

    /**
     * 统一初始化常驻节点
     * @param nodeName {PersistViewDefine} 常驻节点名
     * @param node {cc.Node} 常驻节点
     */
    private _initPersistNode(nodeName: PersistViewDefine, node: cc.Node): void {
        if (node && !this.m_persistNodeMap.has(nodeName)) {
            node.active = false;
            cc.game.addPersistRootNode(node);
            this.m_persistNodeMap.set(nodeName, node);
        }
    }

    /**
     * 初始化加载界面
     * @param node {cc.Node} 视图节点
     */
    public initLoading(node: cc.Node): void {
        this._initPersistNode(PersistViewDefine.LoadingView, node);
    }

    /**
     * 初始化进度界面
     * @param node {cc.Node} 视图节点
     */
    public initProgress(node: cc.Node): void {
        this._initPersistNode(PersistViewDefine.ProgressView, node);
    }

    /**
     * 初始化禁止点击界面
     * @param node {cc.Node} 视图节点
     */
    public initLockTouch(node: cc.Node): void {
        this._initPersistNode(PersistViewDefine.LockTouchView, node);
    }

    /**
     * 初始化弹窗界面
     * @param node {cc.Node} 视图节点
     */
    public initPopups(node: cc.Node): void {
        // this._initPersistNode(PersistViewDefine.PopupsNode, node);
    }

    /**
     * 初始化向上飘动提示界面
     * @param node {cc.Node} 视图节点
     */
    public initTips(node: cc.Node): void {
        // this._initPersistNode(PersistViewDefine.TipsNode, node);
    }

    /**
     * 统一清理常驻节点
     * @param nodeName {PersistViewDefine} 常驻节点名
     */
    private _clearPersistNode(nodeName: PersistViewDefine): void {
        let node: cc.Node = this.m_persistNodeMap.get(nodeName);
        if (node) {
            this.m_persistNodeMap.delete(nodeName);
            cc.game.removePersistRootNode(node);
            node.destroy();
            node = null;
        }
    }

    /**
     * 清理加载界面
     */
    private _clearLoading(): void {
        this._clearPersistNode(PersistViewDefine.LoadingView);
    }

    /**
     * 清理进度界面
     */
    private _clearProgress(): void {
        this._clearPersistNode(PersistViewDefine.ProgressView);
    }

    /**
     * 清理禁止点击界面
     */
    private _clearLockTouch(): void {
        this._clearPersistNode(PersistViewDefine.LockTouchView);
    }

    /**
     * 清理弹窗界面
     */
    private _clearPopups(): void {
        // this._clearPersistNode(PersistViewDefine.PopupsNode);
    }

    /**
     * 清理提示界面
     */
    private _clearTips(): void {
        // this._clearPersistNode(PersistViewDefine.TipsNode);
    }

    /**
     * 清理所有常驻界面
     */
    private _clearAllPersistNode(): void {
        this._clearLoading();
        this._clearProgress();
        this._clearLockTouch();
        this._clearPopups();
        this._clearTips();
    }

    /**
     * 统一打开常驻节点
     * @param nodeName {PersistViewDefine} 节点名
     * @param args {any[]} 任意多参数
     */
    private _openPersistNode(name: PersistViewDefine, ...args: any[]): void {
        let node: cc.Node = this.m_persistNodeMap.get(name);
        if (node) {
            let script: PersistInterface = node.getComponent(name as string);
            if (script) {
                let order: number = this._getLayerTopOrder(ViewOrderDefine.SYSTEM);
                if (this._checkBounds(ViewOrderDefine.SYSTEM, order)) {
                    order = this._resetLayerOrder(ViewOrderDefine.SYSTEM);
                }
                this.m_viewTopOrderMap.set(ViewOrderDefine.SYSTEM, order);
                node.zIndex = order;
                script.open.apply(script, args);
            } else {
                Logger.getInstance().warn(`${name} 节点未绑定 ${name} 脚本组件`);
            }
        } else {
            Logger.getInstance().warn(`未找到 ${name}，检查 BootScene 是否已经挂载 ${name} 节点`);
        }
    }

    /**
     * 打开加载界面
     * @param content {string} 内容
     */
    public openLoading(content?: string): void {
        this._openPersistNode(PersistViewDefine.LoadingView, content);
    }

    /**
     * 打开进度界面
     */
    public openProgress(): void {
        this._openPersistNode(PersistViewDefine.ProgressView);
    }

    /**
     * 打开禁止点击界面（在最顶部覆盖一层防止点击）
     */
    public openLockTouch(): void {
        this._openPersistNode(PersistViewDefine.LockTouchView);
    }

    /**
     * 打开弹窗界面
     * @param content {string} 内容
     * @param title {string} 标题
     * @param confirmCallback {Function} 确定回调方法
     * @param cancelCallback {Function} 取消回调方法
     */
    public openPopups(content: string, title?: string, order?: ViewOrderDefine, confirmCallback?: Function, cancelCallback?: Function): void {
        Loader.getInstance().load(CommonViewDefine.PopupsView, (prefab: cc.Prefab) => {
            if (prefab === null) {
                Logger.getInstance().error("打开弹窗界面失败");
            } else {
                if (order === undefined || order === null) {
                    order = ViewOrderDefine.POPUP;
                }
                let parent: cc.Node = cc.director.getScene();
                if (order !== ViewOrderDefine.SYSTEM) {
                    parent = parent.getChildByName("Canvas");
                }
                let node: cc.Node = cc.instantiate(prefab);
                node.zIndex = this._getLayerTopOrder(order);
                node.parent = parent;
                node.active = false;
                let script: PopupsView = node.getComponent("PopupsView");
                script.open(content, title, confirmCallback, cancelCallback);
            }
        });
    }

    /**
     * 打开提示界面
     * @param content {string} 内容
     */
    public openTips(content: string): void {
        // this._openPersistNode(PersistViewDefine.TipsNode, content);
    }

    /**
     * 设置进度界面百分比
     * @param percent {number} 百分比 0-100
     */

    public setProgress(percent: number): void {
        let node: cc.Node = this.m_persistNodeMap.get(PersistViewDefine.ProgressView);
        if (node) {
            let script: ProgressView = node.getComponent(PersistViewDefine.ProgressView);
            if (script) {
                script.setPercent(percent);
            }
        }
    }

    /**
     * 统一关闭常驻节点
     * @param name {PersistViewDefine} 常驻节点名
     */
    private _closePersistNode(name: PersistViewDefine): void {
        let node: cc.Node = this.m_persistNodeMap.get(name);
        if (node) {
            let script: PersistInterface = node.getComponent(name as string);
            if (script) {
                script.close();
            } else {
                Logger.getInstance().warn(`${name} 节点未绑定 ${name} 脚本组件`);
            }
        } else {
            Logger.getInstance().warn(`未找到 ${name}，检查 BootScene 是否已经挂载 ${name} 节点`);
        }
    }

    /**
     * 关闭加载界面
     */
    public closeLoading(): void {
        this._closePersistNode(PersistViewDefine.LoadingView);
    }

    /**
     * 关闭进度界面
     */
    public closeProgress(): void {
        this._closePersistNode(PersistViewDefine.ProgressView);
    }

    /**
     * 关闭禁止点击界面
     */
    public closeLockTouch(): void {
        this._closePersistNode(PersistViewDefine.LockTouchView);
    }

    /**
     * 手动关闭弹窗界面
     */
    private _closePopups(): void {
        // this._closePersistNode(PersistViewDefine.PopupsNode);
    }

    /**
     * 关闭提示界面
     */
    private _closeTips(): void {
        // this._closePersistNode(PersistViewDefine.TipsNode);
    }

    /**
     * 关闭所有常驻界面，为了场景切换后的新场景干净
     */
    private _closeAllPersistNode(): void {
        this.closeLoading();
        this.closeProgress();
        this.closeLockTouch();
        this._closePopups();
        this._closeTips();
    }

    /**
     * 切换场景内部方法
     * @param name {SceneDefineType} 场景名
     * @param completeCallback {(scene: cc.Scene) => void} 完成后的场景
     * @param progressCallback {(percent: number) => void} 场景预加载进度（保留 2 位小数）
     */
    private _replaceScene<T>(name: SceneDefineType, data: T, completeCallback?: (error: Error, scene: cc.Scene) => void, progressCallback?: (percent: number) => void): void {

        cc.director.preloadScene(name, (completedCount: number, totalCount: number, item: any) => {
            if (progressCallback) {
                progressCallback(Util.toFixed((completedCount / totalCount) * 100));
            }
        }, (error: Error) => {
            if (!error) {
                cc.director.loadScene(name, (error: Error, scene: cc.Scene) => {
                    if (!error) {
                        if (data !== undefined && data !== null) {
                            let script: UIInterface<T> = scene.getChildByName("Canvas").getComponent(scene.name);
                            if (script) {
                                script.data = data;
                            } else {
                                Logger.getInstance().warn(`${name} 场景未挂载 ${name} 脚本`);
                            }
                        }
                    } else {
                        Logger.getInstance().warn(`切换 ${name} 场景失败`, error);
                    }
                    if (completeCallback) {
                        completeCallback(error, scene);
                    }
                });
            } else {
                Logger.getInstance().warn(`预加载 ${name} 场景失败`, error);
                if (completeCallback) {
                    completeCallback(error, null);
                }
            }
        });
    }

    /**
     * 打开场景
     * @param name {SceneDefineType} 场景名
     * @param data {T} 任意数据
     * @param progressCallback {(percent: number) => void} 加载百分比回调
     * @param completeCallback {(error: Error, scene: cc.Scene) => void,} 加载完成回调
     * @param preload {AssetsPathDefineType} 预加载文件 或者 预加载列表
     */
    public openScene<T>(name: SceneDefineType, data?: T, completeCallback?: (error: Error, scene: cc.Scene) => void, progressCallback?: (percent: number) => void, preload?: AssetsPathDefineType): void {
        this.openLockTouch();
        let preloadTimer: number = setTimeout(() => {
            this.openProgress();
        }, PRELOAD_SCENE_WAITIMG_TIME * 1000);

        let preloadTotal: number = 0;
        if (preload !== null && preload !== undefined) {
            if (preload instanceof Array) {
                preloadTotal = preload.length;
            } else {
                preloadTotal = 1;
            }
        }

        let done: Function = (error: Error, scene: cc.Scene) => {
            if (preloadTimer !== null && preloadTimer !== undefined) {
                clearTimeout(preloadTimer);
                preloadTimer = null;
                this.closeProgress();
            }

            if (completeCallback) {
                completeCallback(error, scene);
            }
            this.closeLockTouch();

            Logger.getInstance().log(`场景 ${name} 切换成功`)
        }

        // 先释放之前加载的所有资源
        Loader.getInstance().releaseAll(() => {
            this._clearAllView();
            this._clearViewOrder();
            if (preloadTotal > 0) {
                let firstHalfPercent: number = 0;
                let lastHalfPercent: number = 0;
                Loader.getInstance().preload(preload, (items: cc.AssetManager.RequestItem[]) => {
                    this._replaceScene(name, data, (error: Error, scene: cc.Scene) => {
                        done(error, scene);
                    }, (percent: number) => {
                        // 后半段百分比
                        lastHalfPercent = Util.toFixed(firstHalfPercent + ((percent / 100) * (100 - firstHalfPercent)));
                        this.setProgress(lastHalfPercent);
                        if (progressCallback) {
                            progressCallback(lastHalfPercent);
                        }
                    });
                }, (percent: number) => {
                    // 前半段百分比
                    firstHalfPercent = Util.toFixed((100 / (preloadTotal + 1) * preloadTotal) * percent / 100);
                    this.setProgress(firstHalfPercent);
                    if (progressCallback) {
                        progressCallback(firstHalfPercent);
                    }
                });
            } else {
                this._replaceScene(name, data, (error: Error, scene: cc.Scene) => {
                    done(error, scene);
                }, (percent: number) => {
                    this.setProgress(percent);
                    if (progressCallback) {
                        progressCallback(percent);
                    }
                });
            }
        })
    }

    /**
     * 打开单个视图使用
     * @param path {ViewDefineType} 路径
     * @param data {T} 渲染数据
     * @param completeCallback {Function} 完成后的回调
     * @param layer {ViewOrderDefine} 层
     * @param style {ViewStyleType} 显示时动画风格
     */
    public openView<T>(path: ViewDefineType, data?: T, completeCallback?: (node: cc.Node) => void, layer?: ViewOrderDefine, style?: ViewStyleType): void {
        let view: cc.Node = this.m_viewNodeMap.get(path)
        if (view) {
            this._directShow(view, data, completeCallback, layer, style);
        } else {
            this._loadShow(path, data, completeCallback, layer, style);
        }
    }

    /**
     * 关闭单个视图使用
     * @param path {ViewDefineType} 路径
     * @param releaseRef {boolean} 是否清理引用计数
     * @param completeCallback {Function} 完成后的回调
     * @param style {ViewStyleType} 显示时动画风格
     */
    public closeView(path: ViewDefineType, releaseRef: boolean = true, completeCallback?: Function, style?: ViewStyleType): void {
        this.openLockTouch();
        let view: cc.Node = this.m_viewNodeMap.get(path);

        let done: Function = () => {
            view.destroy();
            view = null;
            if (completeCallback) {
                completeCallback();
            }
            this.m_viewNodeMap.delete(path);

            if (releaseRef) {
                Loader.getInstance().unload(path);
            }
            this.closeLockTouch();
        }

        if (view) {
            if (style !== null && style !== undefined) {
                AnimationEffectUtil.playClose(view, style, () => {
                    done();
                });
            } else {
                done();
            }
        }
    }

    /**
     * 获取层级上的所有视图并排序返回
     * @param layer {ViewOrderDefine} 层
     * @returns {cc.Node[]}
     */
    private _getLayerChild(layer: ViewOrderDefine): cc.Node[] {
        let views: cc.Node[] = [];

        // 找出同一个层的视图
        this.m_viewNodeMap.forEach((value: cc.Node, key: ViewDefineType, map: Map<ViewDefineType, cc.Node>) => {
            let layerDiff: number = value.zIndex - layer;
            let isLayerInView: boolean = layerDiff >= 0 && layerDiff < ORDER_INTERVAL;
            if (isLayerInView) {
                views.push(value);
            }
        });

        // 层级排序
        views.sort((a: cc.Node, b: cc.Node) => {
            if (a.zIndex < b.zIndex) {
                return -1;
            } else {
                return 1;
            }
        });

        return views;
    }

    /**
     * 获取视图层 的 最高层级+1
     * @param layer {ViewOrderDefine} 层
     * @return {number}
     */
    private _getLayerTopOrder(layer: ViewOrderDefine): number {
        let order: number = layer;
        let views: cc.Node[] = this._getLayerChild(layer);
        let size: number = views.length;
        if (size <= 0) {
            return order;
        } else if (views.length > ORDER_INTERVAL) {
            Logger.getInstance().warn(`${ViewOrderDefine[ViewOrderDefine[layer]]} 层容量不足，超过了原本设定的 ${ORDER_INTERVAL} 个`);
            return ORDER_INTERVAL - 1;
        }
        return views[size - 1].zIndex + 1;
    }

    /**
     * 重置视图层 的 层级，返回相应的最高层级 +1
     * @param layer {ViewOrderDefine} 层
     * @return {number}
     */
    private _resetLayerOrder(layer: ViewOrderDefine): number {
        let order: number = layer;
        let views: cc.Node[] = this._getLayerChild(layer);

        if (views.length <= 0) {
            return order;
        } else if (views.length > ORDER_INTERVAL) {
            Logger.getInstance().warn(`${ViewOrderDefine[ViewOrderDefine[layer]]} 层容量不足，超过了原本设定的 ${ORDER_INTERVAL} 个`);
            return ORDER_INTERVAL - 1;
        }

        for (let i: number = 0; i < views.length; ++i) {
            views[i].zIndex = order++;
        }

        return order;
    }

    /**
     * 检测层级是否超过了间隔单位
     * @param layer {ViewOrderDefine} 视图层
     * @param order {number} 层级
     * @return {boolean}
     */
    private _checkBounds(layer: ViewOrderDefine, order: number): boolean {
        return (order - layer) >= ORDER_INTERVAL;
    }


    /**
     * 直接显示
     * @param view {cc.Node} 视图节点
     * @param data {T} 渲染数据
     * @param completeCallback {Function} 完成后的回调
     * @param layer {ViewOrderDefine} 层
     * @param style {ViewStyleType} 显示时动画风格
     */
    private _directShow<T>(view: cc.Node, data?: T, completeCallback?: (node: cc.Node) => void, layer?: ViewOrderDefine, style?: ViewStyleType): void {
        this.openLockTouch();
        if (data !== null && data !== undefined) {
            let script: UIInterface<T> = view.getComponent(view.name);
            script.refresh(data);
        }

        if (layer === null || layer === undefined) {
            layer = DEFAULT_VIEW_LAYER;
        }
        let order: number = this._getLayerTopOrder(layer)
        if (this._checkBounds(layer, order)) {
            order = this._resetLayerOrder(layer);
        }
        console.log(order);
        view.zIndex = order;

        let done: Function = () => {
            if (completeCallback) {
                completeCallback(view);
                this.closeLockTouch();
            }
        }

        if (style !== null && style !== undefined) {
            view.active = false;
            AnimationEffectUtil.playOpen(view, style, () => {
                done();
            });
        } else {
            view.active = true;
            done();
        }
        this.m_viewTopOrderMap.set(layer, order);
    }

    /**
     * 加载显示
     * @param path {ViewDefineType} 路径
     * @param data {T} 渲染数据
     * @param completeCallback {Function} 完成后的回调
     * @param layer {ViewOrderDefine} 层
     * @param style {ViewStyleType} 显示时动画风格
     */
    private _loadShow<T>(path: ViewDefineType, data?: T, completeCallback?: (node: cc.Node) => void, layer?: ViewOrderDefine, style?: ViewStyleType): void {
        this.openLockTouch();
        let loadTimer: number = setTimeout(() => {
            this.openProgress();
        }, PRELOAD_SCENE_WAITIMG_TIME * 1000);

        Loader.getInstance().load(path, (items: cc.Prefab) => {
            if (loadTimer !== null) {
                clearTimeout(loadTimer);
                loadTimer = null;
                this.closeProgress();
            }

            let node: cc.Node = cc.instantiate(items);
            let script: UIInterface<T> = node.getComponent(node.name);
            let scene: cc.Scene = cc.director.getScene();
            if (layer === null || layer === undefined) {
                layer = DEFAULT_VIEW_LAYER;
            }

            let order: number = this._getLayerTopOrder(layer)
            if (this._checkBounds(layer, order)) {
                order = this._resetLayerOrder(layer);
            }

            // 数据赋值
            if (script && data !== null && data !== undefined) {
                script.data = data;
            }

            let done: Function = () => {
                if (completeCallback) {
                    completeCallback(node);
                }
                this.closeLockTouch();
            }

            scene.getChildByName("Canvas").addChild(node, order);
            // 动画播放
            if (style !== null && style !== undefined) {
                AnimationEffectUtil.playOpen(node, style, () => {
                    done();
                })
            } else {
                done();
            }
            this.m_viewTopOrderMap.set(layer, order);
            this.m_viewNodeMap.set(path, node);
        }, (percent: number) => {
            this.setProgress(percent);
        });

    }

    private _clearAllView(): void {

    }

    private _clearViewOrder(): void {

    }

    /**
     * 销毁
     */
    public destroy(): void {
        this._clearAllPersistNode();
        this.m_persistNodeMap.clear();
        this.m_persistNodeMap = null;
    }

}