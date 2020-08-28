/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-27 23:58:36
 * @FilePath     : \client242\assets\src\core\manager\view\ViewManager.ts
 * @Description  : 视图管理器，用于游戏中所有视图模块的打开和关闭
 */

import Manager from "../Manager";
import { IViewParam } from "../../interface/IView";
import Logger from "../../machine/Logger";
import * as SceneDefine from "../../../define/SceneDefine";
import ViewDefine from "../../../define/ViewDefine";
import { SystemViewDefine } from "../../../define/ViewDefine";
import View from "./View";
import LoadingView from "../../../ui/view/LoadingView";
import LockScreenView from "../../../ui/view/LockScreenView";
import ProgressView from "../../../ui/view/ProgressView";

export default class ViewManager extends Manager implements IManager {

    private static g_instance: ViewManager = null;

    // 加载视图
    private m_loadingView: View = null;
    // 进度视图
    private m_progressView: View = null;
    // 触摸锁定视图
    private m_lockScreenView: View = null;

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

    }

    /**
     * 设置加载视图
     * @param node {cc.Node} 视图节点
     */
    public setLoadingView(node: cc.Node): void {
        cc.game.addPersistRootNode(node);
        this.m_loadingView = new View(node);
    }

    /**
     * 清理加载视图
     */
    private clearLoadingView(): void {
        if (this.m_loadingView) {
            let node = this.m_loadingView.getNode();
            if (node) {
                cc.game.removePersistRootNode(node);
                node.removeFromParent();
                node.destroy();
                this.m_loadingView = null;
            }
        }
    }

    /**
     * 设置进度视图
     * @param node {cc.Node} 视图节点
     */
    public setProgressView(node: cc.Node): void {
        cc.game.addPersistRootNode(node);
        this.m_progressView = new View(node);
    }

    /**
     * 清理进度视图
     */
    private clearProgressView(): void {
        if (this.m_progressView) {
            let node = this.m_progressView.getNode();
            if (node) {
                cc.game.removePersistRootNode(node);
                node.removeFromParent();
                node.destroy();
                this.m_progressView = null;
            }
        }
    }

    /**
     * 设置触摸锁定视图
     * @param node {cc.Node} 视图节点
     */
    public setLockScreenView(node: cc.Node): void {
        cc.game.addPersistRootNode(node);
        this.m_lockScreenView = new View(node);
    }

    /**
     * 清理触摸锁定视图
     */
    private clearLockScreenView(): void {
        if (this.m_lockScreenView) {
            let node = this.m_lockScreenView.getNode();
            if (node) {
                cc.game.removePersistRootNode(node);
                node.removeFromParent();
                node.destroy();
                this.m_lockScreenView = null;
            }
        }
    }

    /**
     * 清理所有常驻视图
     */
    private clearAllPersistView(): void {
        this.clearLoadingView();
        this.clearProgressView();
        this.clearLockScreenView();
    }

    /**
     * 打开加载视图
     */
    public openLoading(content?: string): void {
        if (this.m_loadingView === null) {
            Logger.getInstance().warn("未找到 LoadingView，检查 BootScene 是否已经 G.ViewMgr.setLoadingVew() 方法");
            return;
        }
        let loadingScript: LoadingView = this.m_loadingView.getScript();
        if (loadingScript) {
            loadingScript.open(content);
        }
    }

    /**
     * 关闭加载视图
     */
    public closeLoading(): void {
        if (this.m_loadingView === null) {
            Logger.getInstance().warn("未找到 LoadingView，检查 BootScene 是否已经 G.ViewMgr.setLoadingVew() 方法");
            return;
        }
        let loadingScript: LoadingView = this.m_loadingView.getScript();
        if (loadingScript) {
            loadingScript.close();
        }
    }

    /**
     * 打开进度视图
     */
    public openProgress(): void {
        if (this.m_loadingView === null) {
            Logger.getInstance().warn("未找到 ProgressView，检查 BootScene 是否已经 G.ViewMgr.setProgressView() 方法");
            return;
        }
        let progressScript: ProgressView = this.m_progressView.getScript();
        if (progressScript) {
            progressScript.open();
        }
    }

    public setProgress(percent: number): void {
        if (this.m_loadingView === null) {
            Logger.getInstance().warn("未找到 ProgressView，检查 BootScene 是否已经 G.ViewMgr.setProgressView() 方法");
            return;
        }

        let progressScript: ProgressView = this.m_progressView.getScript();
        if (progressScript) {
            progressScript.setPercent(percent);
        }
    }

    /**
     * 关闭进度视图
     */
    public closeProgress(): void {
        if (this.m_loadingView === null) {
            Logger.getInstance().warn("未找到 ProgressView，检查 BootScene 是否已经 G.ViewMgr.setProgressView() 方法");
            return;
        }
        let progressScript: ProgressView = this.m_progressView.getScript();
        if (progressScript) {
            progressScript.close();
        }
    }

    /**
     * 打开锁定屏幕视图（在最顶部覆盖一层防止触摸视图）
     */
    public openLockScreen(): void {
        if (this.m_lockScreenView === null) {
            Logger.getInstance().warn("未找到 LockScreenView BootScene 是否已经 G.ViewMgr.setLockScreenView() 方法");
            return;
        }
        let lockScreenScript: LockScreenView = this.m_lockScreenView.getScript();
        if (lockScreenScript) {
            lockScreenScript.open();
        }
    }

    /**
     * 关闭锁定屏幕视图
     */
    public closeLockScreen(): void {
        if (this.m_lockScreenView === null) {
            Logger.getInstance().warn("未找到 LockScreenView BootScene 是否已经 G.ViewMgr.setLockScreenView() 方法");
            return;
        }
        let lockScreenScript: LockScreenView = this.m_lockScreenView.getScript();
        if (lockScreenScript) {
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
        this.clearAllPersistView();
    }

}