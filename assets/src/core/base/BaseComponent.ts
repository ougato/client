/*
 * Author       : ougato
 * Date         : 2021-07-07 00:21:20
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 23:39:41
 * FilePath     : /client/assets/src/core/base/BaseComponent.ts
 * Description  : 组件 基类、是 BaseView 和 BaseScene 的父类
 */

import { BundleDefine } from "../../define/BundleDefine";
import { EventDefine } from "../define/EventDefine";
import { I18NDefine } from "../define/I18NDefine";
import { I18NInterface } from "../interface/I18NInterface";
import { ResInterface } from "../interface/ResInterface";
import ResCache from "../manager/res/ResCache";
import TypeUtils from "../utils/TypeUtils";

export default class BaseComponent extends cc.Component {

    // 预制路径
    public static prefabPath: string = null;
    // 包名
    public bundleName: BundleDefine.Name = BundleDefine.Name.RESOURCES;
    // 加载资源列表
    private _loadList: ResCache[] = null;
    // 监听事件列表
    private _eventList: string[] = null;
    // 本地化标签映射
    private _labelLangMap: Map<cc.Label, I18NInterface.LabelParam> = new Map();
    // 本地化精灵映射
    private _spriteLangMap: Map<cc.Sprite, I18NInterface.SpriteParame> = new Map();

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
        this.initData();
        this.register();
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
        this.autoClearI18N();
        this.unregister();
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
     * 准备显示时回调 数据带入
     * @param data {...any[]} 多个数据参数
     */
    public onShow(...data: any[]): void {

    }

    /**
     * 多语言切换时回调
     * @param language {I18NDefine.Lang} 语言
     */
    protected onLanguage(language: I18NDefine.Lang): void {
        this.updateLabelLang();
        this.updateSpriteLang();
    }

    /**
     * 注册事件
     */

    protected register(): void {
        G.EventMgr.on(EventDefine.UIEvent.UI_I18N, this, this.onLanguage);
    }

    /**
     * 销毁事件
     */
    protected unregister(): void {
        G.EventMgr.off(EventDefine.UIEvent.UI_I18N, this);
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
     * 加载资源
     * @param {ResInterface.LoadResParam} 加载资源参数
     */
    protected load(param: ResInterface.LoadResParam): void {
        let completeCallback: (resCache: ResCache | null) => void = param.completeCallback;
        param.completeCallback = (resCache: ResCache | null) => {
            if (resCache && this._loadList) {
                this._loadList.push(resCache);
            }
            completeCallback(resCache);
        }
        G.ResMgr.load(param);
    }

    /**
     * 设置本地化文字
     * @parma key {string} key
     * @param data {I18NInterface.LabelParam} 文字数据参数
     */
    protected setLabelLang(label: cc.Label, data: I18NInterface.LabelParam): void {
        if (TypeUtils.isNull(data.bundleName)) {
            data.bundleName = this.bundleName;
        }

        label.string = G.LangMgr.getString(data.key, data.bundleName);
        this._labelLangMap.set(label, data);
    }

    /**
     * 更新本地化文字
     */
    private updateLabelLang(): void {
        this._labelLangMap.forEach((data: I18NInterface.LabelParam, label: cc.Label, _: Map<cc.Label, I18NInterface.LabelParam>) => {
            label.string = G.LangMgr.getString(data.key, data.bundleName);
        });
    }

    /**
     * 设置本地化图片
     * @param sprite {cc.Sprite} 精灵
     * @param data {I18NInterface.SpriteParame} 图片数据参数
     */
    protected setSpriteLang(sprite: cc.Sprite, data: I18NInterface.SpriteParame): void {
        if (TypeUtils.isNull(data.bundleName)) {
            data.bundleName = this.bundleName;
        }

        sprite.spriteFrame = G.LangMgr.getSpriteFrame(data.name, data.bundleName);
        this._spriteLangMap.set(sprite, data);
    }

    /**
     * 更新本地化图片
     */
    private updateSpriteLang(): void {
        this._spriteLangMap.forEach((data: I18NInterface.SpriteParame, sprite: cc.Sprite, _: Map<cc.Sprite, I18NInterface.SpriteParame>) => {
            sprite.spriteFrame = G.LangMgr.getSpriteFrame(data.name, data.bundleName);
        });
    }

    /**
     * 监听事件
     * @param event {string} 事件名
     * @param callback {Function} 监听回调函数
     */
    protected on(event: string, callback: Function): void {
        G.EventMgr.on(event, this, callback);
        this._eventList.push(event);
    }

    /**
     * 手动移除事件
     * @param event {string} 事件名
     */
    protected off(event: string): void {
        G.EventMgr.off(event, this);
    }

    /**
     * 自动移除事件
     * 由 UI 销毁后自动删除注册过的事件
     */
    private autoOff(): void {
        for (let i: number = 0; i < this._eventList.length; ++i) {
            let event: string = this._eventList[i];
            G.EventMgr.off(event, this);
        }
        this._eventList = [];
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

    private autoClearI18N(): void {
        this._labelLangMap.clear();
        this._spriteLangMap.clear();
    }

    /**
     * 点击回调
     * @param ev {cc.Event.EventTouch} 按钮事件
     * @param data {T} 数据
     */
    protected onClick<T>(ev: cc.Event.EventTouch, data?: T): void {

    }

}