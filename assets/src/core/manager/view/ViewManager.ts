/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-22 18:44:27
 * @FilePath     : \client242\assets\src\core\manager\view\ViewManager.ts
 * @Description  : 视图管理器，用于游戏中所有 UI 模块的打开和关闭
 */

import { Manager } from "../Manager";
import * as IView from "../../interface/IView";
import { Logger } from "../../machine/Logger";
import * as SceneDefine from "../../../define/SceneDefine";
import * as ViewDefine from "../../../define/ViewDefine";
import { View } from "./View";

export class ViewManager extends Manager implements IManager {

    private static g_instance: ViewManager = null;

    private m_persistViewList: View[];

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
     * 加载常驻视图
     */
    public loadPersistView(): void {
        let persistViewList: string[] = [];
        for (let persistView in ViewDefine.SystemViewDefine) {
            persistViewList.push(ViewDefine.SystemViewDefine[persistView]);
        }

        cc.resources.preload()
    }

    /**
     * 释放常驻视图
     */
    public releasePersistView(ViewDefine): void {

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

        cc.director.preloadScene(name, (completedCount: number, totalCount: number, item: any) => {

        }, (error: Error) => {

        });

        cc.director.loadScene()
        cc.resources.load(sceneName, cc.Scene);
    }

    /**
     * 定义打开单个视图使用
     * @param path {ViewDefineType} 路径
     * @param data {T} 渲染数据
     * @param completeCallback {Function}
     */
    private openView1(path: ViewDefineType, data?: any, completeCallback?: ViewDefine.CompleteCallback): void {
        cc.resources.load(path.toString(), cc.Prefab)
    }

    /**
     * 定义打开多个视图使用
     * @param viewParams {IViewParam[]} 数据接口参数
     */
    private openView2(...viewParams: IView.IOpenParam[]): void {
        console.log("11111");
        console.log(viewParams);
    }

    public openView(path: ViewDefineType, data?: any, completeCallback?: ViewDefine.CompleteCallback): void;
    public openView(...viewParams: IView.IOpenParam[]): void;
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