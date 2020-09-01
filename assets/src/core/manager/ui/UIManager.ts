/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-01 18:41:15
 * @FilePath     : \client242\assets\src\core\manager\ui\UIManager.ts
 * @Description  : 视图管理器，用于游戏中所有视图模块的打开和关闭
 */

import Manager from "../Manager";
import Logger from "../../machine/Logger";
import PersistNodeDefine from "../../../define/PersistNodeDefine";
import ProgressNode from "../../../ui/view/persist/ProgressNode";
import ViewOrderDefine from "../../../define/ViewOrderDefine";
import { ORDER_INTERVAL } from "../../../define/ViewOrderDefine";
import AnimationUtil from "../../../utils/AnimationUtil";
import ViewDefine from "../../../define/ViewDefine";

// 预加载场景等待多少秒未完成，就显示进度条界面
const PRELOAD_SCENE_WAITIMG_TIME: number = 1;
// 默认视图层级
const DEFAULT_VIEW_ORDER = ViewOrderDefine.UI;

export default class UIManager extends Manager implements ManagerInterface {

    private static g_instance: UIManager = null;

    // 常驻节点
    private m_persistNodeMap: Map<PersistNodeType, cc.Node> = null;
    // 视图节点
    private m_viewNodeMap: Map<ViewDefineType, cc.Node> = null;
    // 视图最高层级
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

        this.initData();
    }

    /**
     * 初始化数据
     */
    private initData(): void {
        this.m_persistNodeMap = new Map<PersistNodeType, cc.Node>();
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
     * @param nodeName {PersistNodeType} 常驻节点名
     * @param node {cc.Node} 常驻节点
     */
    private initPersistNode(nodeName: PersistNodeType, node: cc.Node): void {
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
        this.initPersistNode(PersistNodeDefine.LoadingNode, node);
    }

    /**
     * 初始化进度界面
     * @param node {cc.Node} 视图节点
     */
    public initProgress(node: cc.Node): void {
        this.initPersistNode(PersistNodeDefine.ProgressNode, node);
    }

    /**
     * 初始化禁止点击界面
     * @param node {cc.Node} 视图节点
     */
    public initLockTouch(node: cc.Node): void {
        this.initPersistNode(PersistNodeDefine.LockTouchNode, node);
    }

    /**
     * 初始化弹窗界面
     * @param node {cc.Node} 视图节点
     */
    public initPopups(node: cc.Node): void {
        this.initPersistNode(PersistNodeDefine.PopupsNode, node);
    }

    /**
     * 初始化向上飘动提示界面
     * @param node {cc.Node} 视图节点
     */
    public initTips(node: cc.Node): void {
        this.initPersistNode(PersistNodeDefine.TipsNode, node);
    }

    /**
     * 统一清理常驻节点
     * @param nodeName {PersistNodeType} 常驻节点名
     */
    private clearPersistNode(nodeName: PersistNodeType): void {
        let node: cc.Node = this.m_persistNodeMap.get(nodeName);
        if (node) {
            this.m_persistNodeMap.delete(nodeName);
            cc.game.removePersistRootNode(node);
            node.removeFromParent();
            node.destroy();
            node = null;
        }
    }

    /**
     * 清理加载界面
     */
    private clearLoading(): void {
        this.clearPersistNode(PersistNodeDefine.LoadingNode);
    }

    /**
     * 清理进度界面
     */
    private clearProgress(): void {
        this.clearPersistNode(PersistNodeDefine.ProgressNode);
    }

    /**
     * 清理禁止点击界面
     */
    private clearLockTouch(): void {
        this.clearPersistNode(PersistNodeDefine.LockTouchNode);
    }

    /**
     * 清理禁止点击界面
     */
    private clearPopups(): void {
        this.clearPersistNode(PersistNodeDefine.PopupsNode);
    }

    /**
     * 清理提示界面
     */
    private clearTips(): void {
        this.clearPersistNode(PersistNodeDefine.TipsNode);
    }

    /**
     * 清理所有常驻界面
     */
    private clearAllPersistNode(): void {
        this.clearLoading();
        this.clearProgress();
        this.clearLockTouch();
        this.clearPopups();
        this.clearTips();
    }

    /**
     * 统一打开常驻节点
     * @param nodeName {PersistNodeType} 节点名
     * @param args {any[]} 任意多参数
     */
    private openPersistNode(nodeName: PersistNodeType, ...args: any[]): void {
        let node: cc.Node = this.m_persistNodeMap.get(nodeName);
        if (node) {
            let script: any = node.getComponent(nodeName);
            if (script) {
                let order: number = this.m_viewTopOrderMap.get(ViewOrderDefine.SYSTEM);
                if (this.checkBounds(ViewOrderDefine.SYSTEM, ++order)) {
                    order = this.resetViewOrder(ViewOrderDefine.SYSTEM);
                }
                this.m_viewTopOrderMap.set(ViewOrderDefine.SYSTEM, order);
                node.zIndex = order;
                script.open.apply(script, args);
            } else {
                Logger.getInstance().warn(`${nodeName} 节点未绑定 ${nodeName} 脚本组件`);
            }
        } else {
            Logger.getInstance().warn(`未找到 ${nodeName}，检查 BootScene 是否已经挂载 ${nodeName} 节点`);
        }
    }

    /**
     * 打开加载界面
     * @param content {string} 内容
     */
    public openLoading(content?: string): void {
        this.openPersistNode(PersistNodeDefine.LoadingNode, content);
    }

    /**
     * 打开进度界面
     */
    public openProgress(): void {
        this.openPersistNode(PersistNodeDefine.ProgressNode);
    }

    /**
     * 打开禁止点击界面（在最顶部覆盖一层防止点击）
     */
    public openLockTouch(): void {
        this.openPersistNode(PersistNodeDefine.LockTouchNode);
    }

    /**
     * 打开弹窗界面
     * @param content {string} 内容
     * @param title {string} 标题
     * @param confirmCallback {Function} 确定回调方法
     * @param cancelCallback {Function} 取消回调方法
     */
    public openPopups(content: string, title?: string, confirmCallback?: Function, cancelCallback?: Function): void {
        this.openPersistNode(PersistNodeDefine.PopupsNode, content, title, confirmCallback, cancelCallback);
    }

    /**
     * 打开提示界面
     * @param content {string} 内容
     */
    public openTips(content: string): void {
        this.openPersistNode(PersistNodeDefine.TipsNode, content);
    }

    /**
     * 设置进度界面百分比
     * @param percent {number} 百分比 0-100
     */

    public setProgress(percent: number): void {
        let node: cc.Node = this.m_persistNodeMap.get(PersistNodeDefine.ProgressNode);
        if (node) {
            let script: ProgressNode = node.getComponent(PersistNodeDefine.ProgressNode);
            if (script) {
                script.setPercent(percent);
            }
        }
    }

    /**
     * 统一关闭常驻节点
     * @param nodeName 
     */
    private closePersistNode(nodeName: PersistNodeType): void {
        let node: cc.Node = this.m_persistNodeMap.get(nodeName);
        if (node) {
            let script: any = node.getComponent(nodeName);
            if (script) {
                script.close();
            } else {
                Logger.getInstance().warn(`${nodeName} 节点未绑定 ${nodeName} 脚本组件`);
            }
        } else {
            Logger.getInstance().warn(`未找到 ${nodeName}，检查 BootScene 是否已经挂载 ${nodeName} 节点`);
        }
    }

    /**
     * 关闭加载界面
     */
    public closeLoading(): void {
        this.closePersistNode(PersistNodeDefine.LoadingNode);
    }

    /**
     * 关闭进度界面
     */
    public closeProgress(): void {
        this.closePersistNode(PersistNodeDefine.ProgressNode);
    }

    /**
     * 关闭禁止点击界面
     */
    public closeLockTouch(): void {
        this.closePersistNode(PersistNodeDefine.LockTouchNode);
    }

    /**
     * 手动关闭弹窗界面
     */
    private closePopups(): void {
        this.closePersistNode(PersistNodeDefine.PopupsNode);
    }

    /**
     * 关闭提示界面
     */
    private closeTips(): void {
        this.closePersistNode(PersistNodeDefine.TipsNode);
    }

    /**
     * 关闭所有常驻界面，为了场景切换后的新场景干净
     */
    private closeAllPersistNode(): void {
        this.closeLoading();
        this.closeProgress();
        this.closeLockTouch();
        this.closePopups();
        this.closeTips();
    }

    /**
     * 打开场景
     * @param name {string} 场景名
     * @param data {T} 任意数据
     * @param progressCallback {Function} 加载百分比回调
     * @param completeCallback {Function} 加载完成回调
     */
    public openScene<T>(name: SceneDefineType, data?: T, completeCallback?: (error: Error, scene: cc.Scene) => void, progressCallback?: (completedCount: number, totalCount: number, item: any) => void): void {
        this.openLockTouch();
        let preloadTimer: number = setTimeout(() => {
            this.openProgress();
        }, PRELOAD_SCENE_WAITIMG_TIME * 1000);

        cc.director.preloadScene(name, (completedCount: number, totalCount: number, item: any) => {
            if (progressCallback) {
                progressCallback(completedCount, totalCount, item);
            }
            this.setProgress((completedCount / totalCount) * 100);
        }, (error: Error) => {
            if (preloadTimer !== null) {
                clearTimeout(preloadTimer);
                preloadTimer = null;
                this.closeProgress();
            }
            if (!error) {
                cc.director.loadScene(name, (error: Error, scene: cc.Scene) => {
                    if (!error) {
                        if (data !== undefined && data !== null) {
                            let script: any = scene.getChildByName("Canvas").getComponent(scene.name);
                            if (script) {
                                script.data = data;
                            } else {
                                Logger.getInstance().warn(`${name} 场景未挂载 ${name} 脚本`);
                            }
                        }
                        this.closeAllPersistNode();
                        if (completeCallback) {
                            completeCallback(error, scene);
                        }
                    } else {
                        Logger.getInstance().warn(`切换 ${name} 场景失败`, error);
                        this.closeLockTouch();
                    }
                });
            } else {
                Logger.getInstance().warn(`预加载 ${name} 场景失败`, error);
                this.closeLockTouch();
            }

        });
    }

    /**
     * 定义打开单个视图使用
     * @param path {ViewDefineType} 路径
     * @param data {T} 渲染数据
     * @param completeCallback {Function}
     */
    public openView<T>(path: ViewDefineType, data?: T, completeCallback?: (node: cc.Node) => void, layer?: ViewOrderDefine, style?: ViewStyleType): void {
        let view: cc.Node = this.m_viewNodeMap.get(path)
        if (view) {
            if (data !== null && data !== undefined) {
                let script: UIInterface<T> = view.getComponent(view.name);
                script.refresh(data);
            }

            if (layer !== null && layer !== undefined) {
                view.zIndex = this.getLayerTopOrder(layer);
                view.active = true;
            }
            if (style !== null && style !== undefined) {
                AnimationUtil.play(view, style, () => {
                    if (completeCallback) {
                        completeCallback(view);
                    }
                });
            } else {
                if (completeCallback) {
                    completeCallback(view);
                }
            }
            return;
        }

        this.openLockTouch();
        let loadTimer: number = setTimeout(() => {
            this.openProgress();
        }, PRELOAD_SCENE_WAITIMG_TIME * 1000);
        cc.resources.load(path, cc.Prefab, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            this.setProgress((finish / total) * 100);
        }, (error: Error, assets: cc.Prefab) => {
            this.closeLockTouch();
            if (loadTimer !== null) {
                clearTimeout(loadTimer);
                loadTimer = null;
                this.closeProgress();
            }
            if (!error) {
                let node: cc.Node = cc.instantiate(assets);
                let currScene: cc.Scene = cc.director.getScene();
                if (layer !== null && layer !== undefined) {
                    node.zIndex = this.getLayerTopOrder(layer);
                }
                currScene.getChildByName("Canvas").addChild(node);
                this.m_viewNodeMap.set(path, node);
            } else {
                Logger.getInstance().warn(`加载 ${path} 视图失败`, error);
            }
        });
    }

    // /**
    //  * 定义打开多个视图使用
    //  * @param viewParams {IViewParam[]} 数据接口参数
    //  */
    // private openView2(...viewParams: ViewMultipleInterface[]): void {
    //     console.log("11111");
    //     console.log(viewParams);
    // }

    // public openView(path: ViewDefineType, data?: any, completeCallback?: () => void): void;
    // public openView(...viewParams: IViewParam[]): void;
    // public openView(): void {
    //     if (arguments.length <= 0) {
    //         Logger.getInstance().error("参数不能为空");
    //         return;
    //     }

    //     if (typeof (arguments[0]) === "string") {
    //         this.openView1.apply(this, arguments);
    //     } else {
    //         this.openView2.apply(this, arguments);
    //     }
    // }

    private getLayerViewChild(layer: ViewOrderDefine): cc.Node[] {
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
                return 1;
            } else {
                return -1
            }
        });

        return views;
    }

    /**
     * 获取视图层 的 最高层级+1
     * @param layer {ViewOrderDefine} 层
     * @return {number}
     */
    private getLayerTopOrder(layer: ViewOrderDefine): number {
        let order: number = layer;
        let views: cc.Node[] = this.getLayerViewChild(layer);
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
     * 重置视图层 的 层级，返回相应的最高层级+1
     * @param layer {ViewOrderDefine} 层
     * @return {number}
     */
    private resetViewOrder(layer: ViewOrderDefine): number {
        let order: number = layer;
        let views: cc.Node[] = this.getLayerViewChild(layer);

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
    private checkBounds(layer: ViewOrderDefine, order: number): boolean {
        return (order - layer) > ORDER_INTERVAL;
    }

    /**
     * 
     */

    /**
     * 销毁
     */
    public destroy(): void {
        this.clearAllPersistNode();
        this.m_persistNodeMap.clear();
        this.m_persistNodeMap = null;
    }

}