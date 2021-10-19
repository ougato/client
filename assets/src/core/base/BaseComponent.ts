/*
 * Author       : ougato
 * Date         : 2021-07-07 00:21:20
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 02:54:54
 * FilePath     : /client/assets/src/core/base/BaseComponent.ts
 * Description  : 组件 基类、是 BaseView 和 BaseScene 的父类
 */

import * as ResInterface from "../interface/ResInterface";
import ResCache from "../manager/res/ResCache";

export default class BaseComponent extends cc.Component {

    // 预制路径
    public static prefabPath: string = null;
    // 加载资源列表
    private _loadList: ResCache[] = null;
    // 监听事件列表
    private _eventList: any = null;

    /**
     * 如果该组件启用，则每帧调用 update。
     * @param dt {number} 完成最后一帧所需的时间增量（以秒为单位）
     */
    protected update(dt: number): void {

    }

    /**
     * 如果该组件启用，则每帧调用 lateUpdate。
     * @param dt {number} 完成最后一帧所需的时间增量（以秒为单位）
     */
    protected lateUpdate(dt: number): void {

    }

    /**
     * 当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。
     */
    protected onLoad(): void {
        this.register();
        this.initData();
        this.initUI();
    }

    /**
     * 如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。
     */
    protected start(): void {

    }

    /**
     * 当该组件被启用，并且它的节点也激活时。
     */
    protected onEnable(): void {

    }

    /**
     * 当该组件被禁用或节点变为无效时调用。
     */
    protected onDisable(): void {

    }

    /**
     * 当该组件被销毁时调用 
     */
    protected onDestroy(): void {
        this.autoRelease();
        this.autoOff();
    }

    /**
     * 当该组件被销毁时调用 
     */
    protected onFocusInEditor(): void {

    }

    /**
     * 当该组件被销毁时调用 
     */
    protected onLostFocusInEditor(): void {

    }

    /**
     * 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
     */
    protected resetInEditor(): void {

    }

    /**
     * 加载完成回调 数据带入
     * @param data {...any[]} 多个数据参数
     */
    public onLoaded(...data: any[]): void {

    }

    /**
     * 多语言切换时回调
     */
    protected onLanguage(): void {

    }

    /**
     * 注册事件
     */
    protected register(): void {

    }

    /**
     * 初始化数据
     */
    protected initData(): void {
        this._loadList = [];
        this._eventList = [];
    }

    /**
     * 初始化界面
     */
    protected initUI(): void {

    }

    /**
     * 监听事件
     */
    protected on(): void {

    }

    /**
     * 手动移除事件
     */
    protected off(): void {

    }

    /**
     * 自动移除事件
     * 由 UI 销毁后自动删除注册过的事件
     */
    private autoOff(): void {


        this._eventList = [];
    }

    /**
     * 加载资源
     * @param {ResInterface.LoadResParam} 加载资源参数
     */
    protected load(param: ResInterface.LoadResParam): void {
        let completeCallback: (resCache: ResCache | null) => void = param.completeCallback;
        param.completeCallback = (resCache: ResCache | null) => {
            if (resCache) {
                this._loadList.push(resCache);
            }
            completeCallback(resCache);
        }
        G.ResMgr.load(param);
    }

    /**
     * 释放资源
     * 自动释放由手动加载的资源，UI 销毁后自动删除资源的引用计数
     */
    private autoRelease(): void {
        if (this._loadList && this._loadList.length > 0) {
            for (let i: number = 0; i < this._loadList.length; ++i) {
                let resCache: ResCache = this._loadList[i];
                G.ResMgr.release(resCache);
            }
            this._loadList = [];
        }
    }
}