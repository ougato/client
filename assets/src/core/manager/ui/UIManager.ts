/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-15 02:59:43
 * @FilePath     : \client242\assets\src\core\manager\ui\UIManager.ts
 * @Description  : 视图管理器，用于游戏中所有视图模块的打开和关闭
 */

import Manager from "../Manager";
import Logger from "../../machine/Logger";
import { CommonViewDefine, PersistViewDefine } from "../../../define/ViewDefine";
import ViewLayerDefine from "../../../define/ViewLayerDefine";
import { ORDER_INTERVAL } from "../../../define/ViewLayerDefine";
import ViewTweenEffectUtil from "../../../utils/ViewTweenEffectUtil";
import Loader from "../../machine/Loader";
import Util from "../../../utils/Util";
import LoadingView from "../../../ui/view/persist/LoadindView";
import ProgressView from "../../../ui/view/persist/ProgressView";
import LockTouchView from "../../../ui/view/persist/LockTouchView";
import PopupsView from "../../../ui/view/common/PopupsView";

// 预加载场景等待多少秒未完成，就显示进度条界面
const PRELOAD_SCENE_WAITIMG_TIME: number = 1;
// 默认视图层级
const DEFAULT_VIEW_LAYER = ViewLayerDefine.UI;

export default class UIManager extends Manager implements ManagerInterface {

    private static g_instance: UIManager = null;

    // 视图节点 map
    private m_viewMap: Map<ViewDefineType, cc.Node> = null;

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

        this.m_viewMap = new Map();
    }
    
    /**
     * 获取层级上的所有视图并排序返回
     * @param layer {ViewLayerDefine} 层
     * @returns {cc.Node[]}
     */
    private getLayerChild(layer: ViewLayerDefine): cc.Node[] {
        let views: cc.Node[] = [];

        // 找出同一个层的视图
        this.m_viewMap.forEach((value: cc.Node, key: ViewDefineType, map: Map<ViewDefineType, cc.Node>) => {
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
     * @param layer {ViewLayerDefine} 层
     * @return {number}
     */
    private getLayerTopOrder(layer: ViewLayerDefine): number {
        if (layer === null || layer === undefined) {
            layer = ViewLayerDefine.UI
        }
        let order: number = layer;
        let views: cc.Node[] = this.getLayerChild(layer);
        let size: number = views.length;
        if (size <= 0) {
            return order;
        } else if (views.length > ORDER_INTERVAL) {
            Logger.getInstance().warn(`${ViewLayerDefine[ViewLayerDefine[layer]]} 层容量不足，超过了原本设定的 ${ORDER_INTERVAL} 个`);
            return ORDER_INTERVAL - 1;
        }
        return views[size - 1].zIndex + 1;
    }

    /**
     * 重置视图层 的 层级，返回相应的最高层级 +1
     * @param layer {ViewLayerDefine} 层
     * @return {number}
     */
    private resetLayerOrder(layer: ViewLayerDefine): number {
        let order: number = layer;
        let views: cc.Node[] = this.getLayerChild(layer);

        if (views.length <= 0) {
            return order;
        } else if (views.length > ORDER_INTERVAL) {
            Logger.getInstance().warn(`${ViewLayerDefine[ViewLayerDefine[layer]]} 层容量不足，超过了原本设定的 ${ORDER_INTERVAL} 个`);
            return ORDER_INTERVAL - 1;
        }

        for (let i: number = 0; i < views.length; ++i) {
            views[i].zIndex = order++;
        }

        return order;
    }

    /**
     * 检测层级是否超过了间隔单位
     * @param layer {ViewLayerDefine} 视图层
     * @param order {number} 层级
     * @return {boolean}
     */
    private checkOrderBounds(layer: ViewLayerDefine, order: number): boolean {
        return (order - layer) >= ORDER_INTERVAL;
    }

    /**
     * 判断是否常驻视图路径
     * @param path {ViewDefineType} 路径
     */
    private isPersistPath(path: ViewDefineType): boolean {
        let is: boolean = false;
        for (let value in PersistViewDefine) {
            if (PersistViewDefine[value] === path) {
                is = true;
                break;
            }
        }
        return is;
    }

    /**
     * 设置常驻视图
     * @param viewPath {PersistViewDefine} 常驻视图路径
     * @param viewNode {cc.Node} 常驻视图节点
     */
    public setPersistView(viewPath: PersistViewDefine, viewNode: cc.Node): void {
        this.m_viewMap.set(viewPath, viewNode);
    }

    /**
     * 加载视图
     */
    private async loadView(path: ViewDefineType): Promise<cc.Node> {
        return new Promise((resolve: (node: cc.Node) => void, reject: () => void) => {
            let preloadTimer: number = null;
            let startPreloadTimer: Function = () => {
                if (preloadTimer === null || preloadTimer === undefined) {
                    preloadTimer = setTimeout(() => {
                        this.openProgress();
                    }, PRELOAD_SCENE_WAITIMG_TIME * 1000);
                }
            }
            let stopPreloadTimer: Function = () => {
                if (preloadTimer !== null && preloadTimer !== undefined) {
                    this.closeProgress();
                    clearTimeout(preloadTimer);
                    preloadTimer = null;
                }
            }

            startPreloadTimer();
            let view: cc.Node = this.m_viewMap.get(path);
            if (view) {
                stopPreloadTimer();
                resolve(view);
            } else {
                Loader.getInstance().load(path, (prefab: cc.Prefab) => {
                    if (prefab) {
                        view = cc.instantiate(prefab);
                        this.m_viewMap.set(path, view);
                        stopPreloadTimer();
                        resolve(view);
                    } else {
                        stopPreloadTimer();
                        reject();
                    }
                }, (percent: number) => {
                    this.setProgress(percent);
                });
            }
        });
    }

    /**
     * 打开加载界面
     * @param content {string} 内容
     */
    public openLoading(content?: string): void {
        let loadingView: cc.Node = this.m_viewMap.get(PersistViewDefine.LoadingView);
        if (loadingView) {
            let script: LoadingView = loadingView.getComponent("LoadingView");
            script.open(content);
        } else {
            Logger.getInstance().warn("LoadingView 常驻视图未加载");
        }
    }

    /**
     * 打开进度界面
     */
    public openProgress(): void {
        let progressView: cc.Node = this.m_viewMap.get(PersistViewDefine.ProgressView);
        if (progressView) {
            let script: ProgressView = progressView.getComponent("ProgressView");
            script.open();
        } else {
            Logger.getInstance().warn("ProgressView 常驻视图未加载");
        }
    }

    /**
     * 打开禁止点击界面（在最顶部覆盖一层防止点击）
     */
    public openLockTouch(): void {
        let lockTouchView: cc.Node = this.m_viewMap.get(PersistViewDefine.LockTouchView);
        if (lockTouchView) {
            let script: LockTouchView = lockTouchView.getComponent("LockTouchView");
            script.open();
        } else {
            Logger.getInstance().warn("LockTouchView 常驻视图未加载");
        }
    }

    /**
     * 打开弹窗界面
     * @param content {string} 内容
     * @param title {string} 标题
     * @param confirmCallback {Function} 确定回调方法
     * @param cancelCallback {Function} 取消回调方法
     */
    public openPopups(content: string, title?: string, order?: ViewLayerDefine, confirmCallback?: Function, cancelCallback?: Function): void {
        Loader.getInstance().load(CommonViewDefine.PopupsView, (prefab: cc.Prefab) => {
            if (prefab === null) {
                Logger.getInstance().warn("打开弹窗界面失败");
            } else {
                if (order === undefined || order === null) {
                    order = ViewLayerDefine.POPUP;
                }
                let parent: cc.Node = cc.director.getScene();
                if (order !== ViewLayerDefine.SYSTEM) {
                    parent = parent.getChildByName("Canvas");
                }
                let node: cc.Node = cc.instantiate(prefab);
                node.zIndex = this.getLayerTopOrder(order);
                node.parent = parent;
                node.active = false;
                let script: PopupsView = node.getComponent("PopupsView");
                script.open(content, title, confirmCallback, cancelCallback);
            }
        });
    }

    // /**
    //  * 打开提示界面
    //  * @param content {string} 内容
    //  */
    // public openTips(content: string): void {
    //     // this._openPersistNode(PersistViewDefine.TipsNode, content);
    // }

    /**
     * 设置进度界面百分比
     * @param percent {number} 百分比 0-100
     */

    public setProgress(percent: number): void {
        let progressView: cc.Node = this.m_viewMap.get(PersistViewDefine.ProgressView);
        if (progressView) {
            let script: ProgressView = progressView.getComponent("ProgressView");
            script.setPercent(percent);
        } else {
            Logger.getInstance().warn("ProgressView 常驻视图未加载");
        }
    }

    /**
     * 关闭加载界面
     */
    public closeLoading(): void {
        let loadingView: cc.Node = this.m_viewMap.get(PersistViewDefine.LoadingView);
        if (loadingView) {
            let script: LoadingView = loadingView.getComponent("LoadingView");
            script.close();
        } else {
            Logger.getInstance().warn("LoadingView 常驻视图未加载");
        }
    }

    /**
     * 关闭进度界面
     */
    public closeProgress(): void {
        let progressView: cc.Node = this.m_viewMap.get(PersistViewDefine.ProgressView);
        if (progressView) {
            let script: ProgressView = progressView.getComponent("ProgressView");
            script.close();
        } else {
            Logger.getInstance().warn("ProgressView 常驻视图未加载");
        }
    }

    /**
     * 关闭禁止点击界面
     */
    public closeLockTouch(): void {
        let lockTouchView: cc.Node = this.m_viewMap.get(PersistViewDefine.LockTouchView);
        if (lockTouchView) {
            let script: LockTouchView = lockTouchView.getComponent("LockTouchView");
            script.close();
        } else {
            Logger.getInstance().warn("LockTouchView 常驻视图未加载");
        }
    }

    // /**
    //  * 手动关闭弹窗界面
    //  */
    // private _closePopups(): void {
    //     // this._closePersistNode(PersistViewDefine.PopupsNode);
    // }

    // /**
    //  * 关闭提示界面
    //  */
    // private _closeTips(): void {
    //     // this._closePersistNode(PersistViewDefine.TipsNode);
    // }

    /**
     * 切换场景内部方法
     * @param name {SceneDefineType} 场景名
     * @param completeCallback {(scene: cc.Scene) => void} 完成后的场景
     * @param progressCallback {(percent: number) => void} 场景预加载进度（保留 2 位小数）
     */
    private replaceScene<T>(name: SceneDefineType, data: T, completeCallback?: (error: Error, scene: cc.Scene) => void, progressCallback?: (percent: number) => void): void {
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
            if (preloadTotal > 0) {
                let firstHalfPercent: number = 0;
                let lastHalfPercent: number = 0;
                Loader.getInstance().preload(preload, (items: cc.AssetManager.RequestItem[]) => {
                    this.replaceScene(name, data, (error: Error, scene: cc.Scene) => {
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
                this.replaceScene(name, data, (error: Error, scene: cc.Scene) => {
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
     * @param layer {ViewLayerDefine} 层
     * @param style {ViewStyleType} 显示时动画风格
     */
    public openView<T>(path: ViewDefineType, data?: T, completeCallback?: (node: cc.Node) => void, layer?: ViewLayerDefine, style?: ViewStyleType): void {
        this.openLockTouch();

        let isPersist: boolean = this.isPersistPath(path);
        if (isPersist) {
            Logger.getInstance().warn("无法使用 openView 打开常驻视图");
            this.closeLockTouch();
            return;
        }

        this.loadView(path).then((view: cc.Node) => {
            // 赋值到场景根节点
            if (view.parent === null || view.parent === undefined) {
                let rootNode: cc.Node = cc.director.getScene().getChildByName("Canvas");
                if (rootNode === null || rootNode === undefined) {
                    Logger.getInstance().warn(`${cc.director.getScene()} 场景根节点，要求命名为 Canvas`);
                    return;
                }
                view.parent = rootNode;
            }

            // 数据赋值
            let script: UIInterface<T> = view.getComponent(view.name);
            if (script && data !== null && data !== undefined) {
                script.data = data;
            }

            // 添加到父层最高层级
            let topOrder: number = this.getLayerTopOrder(layer);
            if (this.checkOrderBounds(ViewLayerDefine.SYSTEM, topOrder)) {
                topOrder = this.resetLayerOrder(ViewLayerDefine.SYSTEM);
            }
            view.zIndex = topOrder;

            if (style !== null && style !== undefined) {
                view.active = false;
                ViewTweenEffectUtil.playOpen(view, style, () => {
                    this.closeLockTouch();
                });
            } else {
                this.closeLockTouch();
            }
        }).catch(() => {
            Logger.getInstance().warn(`加载 ${path} 视图失败`);
            this.closeLockTouch();
        });
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
        let view: cc.Node = this.m_viewMap.get(path);

        let done: Function = () => {
            view.destroy();
            view = null;
            if (completeCallback) {
                completeCallback();
            }
            this.m_viewMap.delete(path);

            if (releaseRef) {
                Loader.getInstance().unload(path);
            }
            this.closeLockTouch();
        }

        if (view) {
            if (style !== null && style !== undefined) {
                ViewTweenEffectUtil.playClose(view, style, () => {
                    done();
                });
            } else {
                done();
            }
        }
    }

    /**
     * 销毁
     */
    public destroy(): void {
        this.m_viewMap.forEach((value: cc.Node, key: ViewDefineType) => {
            if (value.isValid) {
                value.destroy();
            }
            Loader.getInstance().release(key);
        });
        this.m_viewMap.clear();
    }

}