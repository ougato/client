/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-25 16:59:24
 * @FilePath     : \client242\assets\src\core\manager\view\ViewManager.ts
 * @Description  : 视图管理器，用于游戏中所有视图模块的打开和关闭
 */

import { Manager } from "../Manager";
import { IViewParam } from "../../interface/IView";
import { Logger } from "../../machine/Logger";
import * as SceneDefine from "../../../define/SceneDefine";
import * as ViewDefine from "../../../define/ViewDefine";
import { View } from "./View";
import LoadingView from "../../../ui/view/LoadingView";
import LockScreenView from "../../../ui/view/LockScreenView";

export class ViewManager extends Manager implements IManager {

    private static g_instance: ViewManager = null;

    // 常驻节点 Map
    private m_persistViewMap: Map<string, View>;

    public static getInstance(): ViewManager {
        if (this.g_instance === null) {
            this.g_instance = new ViewManager();
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

        this.m_persistViewMap = new Map();
    }

    /**
     * 获取系统常驻视图路径
     * @return 所有系统常驻路径
     */
    private getSystemPersistViewPath(): string[] {
        let persistList: string | string[] = [];
        for (let persistView in ViewDefine.SystemViewDefine) {
            persistList.push(ViewDefine.SystemViewDefine[persistView].toString());
        }
        return persistList;
    }

    /**
     * 获取系统常驻视图绑定的脚本
     * @param path {string} 路径
     * @return 绑定的脚本
     */
    private getSystemPersistScript(path: ViewDefine.SystemViewDefine): any {
        let persistPath: string = path.toString();
        let view: View = this.m_persistViewMap.get(persistPath);
        return view.getScript();
    }

    /**
     * 加载常驻视图
     */
    public loadPersistView(progressCallback?: (finish: number, total: number, path: string) => void, completeCallback?: (error: Error) => void): void {
        let list: string[] = this.getSystemPersistViewPath();
        let notloadedList: string[] = [];
        for (let i: number = 0; i < list.length; ++i) {
            let persistPath: string = list[i];
            let persistView: View = this.m_persistViewMap.get(persistPath);
            if (!persistView) {
                notloadedList.push(persistPath);
            }
        }

        if (notloadedList.length <= 0) {
            return;
        }

        let finishCount: number = 0;
        let totalCount: number = list.length;
        cc.resources.load(list, cc.Prefab, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            if (item && item.info && item.info.path) {
                let path: string = "assets/resources/" + item.info.path + ".prefab";
                progressCallback && progressCallback(++finishCount, totalCount, path);
            }
        }, (error: Error, assets: cc.Asset | cc.Asset[]) => {
            if (error) {
                Logger.getInstance().error(error);
            } else {
                let currScene: cc.Scene = cc.director.getScene();
                let prefabs: cc.Prefab[] = assets as cc.Prefab[];
                for (let i: number = 0; i < prefabs.length; ++i) {
                    let prefab: cc.Prefab = prefabs[i];
                    let node: cc.Node = cc.instantiate(prefab);

                    let persistView = this.m_persistViewMap.get(node.name);
                    if (!persistView) {
                        let view = new View(node);
                        this.m_persistViewMap.set(ViewDefine.SystemViewDefine[node.name].toString(), view);
                        currScene.addChild(node);
                        cc.game.addPersistRootNode(node);
                    }
                }
            }
            completeCallback && completeCallback(error);
        });
    }

    /**
     * 释放常驻视图
     */
    public releasePersistView(completeCallback?: () => void): void {
        let list: string[] = this.getSystemPersistViewPath();

        for (let i: number = 0; i < list.length; ++i) {
            let persistPath: string = list[i];
            let persistView: View = this.m_persistViewMap.get(persistPath);
            if (persistView) {
                let node: cc.Node = persistView.getNode();
                if (node.isValid) {
                    cc.game.removePersistRootNode(node);
                    node.removeFromParent();
                    this.m_persistViewMap.delete(persistPath);
                    persistView = null;
                }
            }
        }
        completeCallback && completeCallback();
    }

    /**
     * 打开进度视图
     */
    public openProgress(): void {

    }

    /**
     * 关闭进度视图
     */
    public closeProgress(): void {

    }

    /**
     * 打开加载视图
     */
    public openLoading(content?: string): void {
        let loadingScript: LoadingView = this.getSystemPersistScript(ViewDefine.SystemViewDefine.LoadingView);
        if(loadingScript) {
            loadingScript.open(content);
        }
    }

    /**
     * 关闭加载视图
     */
    public closeLoading(): void {
        let loadingScript: LoadingView = this.getSystemPersistScript(ViewDefine.SystemViewDefine.LoadingView);
        if(loadingScript) {
            loadingScript.close();
        }
    }

    /**
     * 打开锁定屏幕视图（在最顶部覆盖一层防止触摸视图）
     */
    public openLockScreen(): void {
        let lockScreenScript: LockScreenView = this.getSystemPersistScript(ViewDefine.SystemViewDefine.LockScreenView);
        if(lockScreenScript) {
            lockScreenScript.open();
        }
    }

    /**
     * 关闭锁定屏幕视图
     */
    public closeLockScreen(): void {
        let lockScreenScript: LockScreenView = this.getSystemPersistScript(ViewDefine.SystemViewDefine.LockScreenView);
        if(lockScreenScript) {
            lockScreenScript.close();
        }
    }

    /**
     * 打开弹窗
     * @param content {string} 内容
     * @param title {string} 标题
     * @param confirmCallback {Function} 确定回调方法
     * @param cancelCallback {Function} 取消回调方法
     * @param retryCallback {Function} 重试回调方法
     */
    public openPopups(content: string, title?: string, confirmCallback?: Function, cancelCallback?: Function, retryCallback?: Function): void {
        // if (this.m_persistViewMap.get())
    }

    /**
     * 关闭弹窗
     */
    public closePopups(): void {

    }

    /**
     * 打开场景
     * @param name {string} 场景名
     * @param data {any} 任意数据
     * @param progressCallback {Function} 加载百分比回调
     * @param completeCallback {Function} 加载完成回调
     */
    public openScene(name: SceneDefineType, data?: any, progressCallback?: SceneDefine.ProgressCallback, completeCallback?: SceneDefine.CompleteCallback): void {
        let sceneName: string = name.toString();
        cc.director.loadScene(sceneName);

        cc.director.preloadScene(name, (completedCount: number, totalCount: number, item: any) => {

        }, (error: Error) => {

        });

    }

    /**
     * 定义打开单个视图使用
     * @param path {ViewDefineType} 路径
     * @param data {T} 渲染数据
     * @param completeCallback {Function}
     */
    private openView1(path: ViewDefineType, data?: any, completeCallback?: () => void): void {
        cc.resources.load(path.toString(), cc.Prefab)
    }

    /**
     * 定义打开多个视图使用
     * @param viewParams {IViewParam[]} 数据接口参数
     */
    private openView2(...viewParams: IViewParam[]): void {
        console.log("11111");
        console.log(viewParams);
    }

    public openView(path: ViewDefineType, data?: any, completeCallback?: () => void): void;
    public openView(...viewParams: IViewParam[]): void;
    public openView(): void {
        if (arguments.length <= 0) {
            Logger.getInstance().error("参数不能为空");
            return;
        }

        if (typeof (arguments[0]) === "string") {
            this.openView1.apply(this, arguments);
        } else {
            this.openView2.apply(this, arguments);
        }
    }


    /**
     * 销毁
     */
    public destroy(): void {

    }

}