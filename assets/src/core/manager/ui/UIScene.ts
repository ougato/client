/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 01:22:36
 * FilePath     : /client/assets/src/core/manager/ui/UIScene.ts
 * Description  : 场景缓存
 */

import BaseView from "../../base/BaseView";
import UIBase from "./UIBase";
import UIView from "./UIView";
import ResCache from "../res/ResCache";
import BaseComponent from "../../base/BaseComponent";
import TypeUtils from "../../utils/TypeUtils";
import { UIDefine } from "../../define/UIDefine";
import { ResDefine } from "../../define/ResDefine";
import { UIInterface } from "../../interface/UIInterface";

export default class UIScene extends UIBase {

    // 视图 Map<类名, 视图对象>
    private _viewMap: Map<string, UIView> = null;
    // 每个视图最高层级 Map<层级枚举, 最高层级>
    private _viewTopZIndexMap: Map<UIDefine.ViewLayer, number> = null;
    // 视图加载定时器
    private _viewTimer: NodeJS.Timeout = null;

    constructor() {
        super()

        this._viewMap = new Map();
        this._viewTopZIndexMap = new Map();
    }

    protected destroy(): void {
        this._viewMap.forEach((value: UIView, key: string, map: Map<string, UIView>) => {
            value.release();
        });
        this._viewMap.clear();
        this._viewMap = null;
        this._viewTopZIndexMap.clear();
        this._viewTopZIndexMap = null;
        this.stopViewTimer();
        this._viewTimer = null;
        super.release();
    }

    /**
     * 添加视图
     * @param param {UIInterface.ViewParam<T>} 视图参数
     * @param data {...any[]} 打开后传递给视图的数据
     */
    public addView<T extends BaseView>(param: UIInterface.ViewParam<T>, ...data: any[]): void {
        let className: string = cc.js.getClassName(param.viewClass);

        let view: UIView = this._viewMap.get(className);
        if (view) {
            if (view.resCache.state === ResDefine.ResState.LOADING) {
                G.LogMgr.warn(`不能重复加载 ${className} 视图`);
            } else if (view.resCache.state === ResDefine.ResState.LOADED) {
                this.addToScene(view, param.layer);
                if (view.script && view.script.onShow) view.script.onShow.apply(view.script, data);
            }
            return;
        }

        view = new UIView();
        view.className = className;
        view.resCache = new ResCache();
        view.resCache.state = ResDefine.ResState.LOADED;
        this._viewMap.set(className, view);

        G.UIMgr.openBlock();
        this.startViewTimer(param.delay);

        G.ResMgr.load({
            base: param.viewClass.prefabPath,
            bundleName: param.bundleName,
            assetType: cc.Prefab,
            progressCallback: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => {
                if (param.onProgress) param.onProgress(finish, total, item);
            },
            completeCallback: (resCache: ResCache | null) => {
                if (resCache !== null && resCache.asset !== null) {
                    G.LogMgr.color("打开视图", className);
                    let node: cc.Node = cc.instantiate(resCache.asset as cc.Prefab);
                    let script: BaseComponent = view.setScript(node, param.viewClass);
                    script.bundleName = param.bundleName;
                    view.resCache = resCache;
                    view.node = node;
                    this.addToScene(view, param.layer);
                    if (param.onComplete) param.onComplete();
                    if (script.onShow) script.onShow.apply(script, data);
                } else {
                    G.LogMgr.warn(`打开视图失败：${className}`);
                    this._viewMap.delete(className);
                    if (param.onError) param.onError();
                }

                G.UIMgr.closeBlock();
                this.stopViewTimer();
            },
        })
    }

    /**
     * 删除并销毁视图
     * @param className {string} 类名
     * @param isReleaseRes {boolean} 释放资源
     */
    public delView(className: string, isReleaseRes: boolean = false): void {
        let view: UIView = this._viewMap.get(className)
        if (!view) {
            G.LogMgr.warn(`没有找到 ${className} 的视图删除`);
            return;
        }
        if (isReleaseRes) {
            while (view.resCache.decCache() > 0);
            G.ResMgr.release(view.resCache);
        }
        view.release();
        this._viewMap.delete(className);
        G.LogMgr.color("关闭视图", className);
    }

    /**
     * 场景释放
     */
    public release(): void {
        this._viewMap.forEach((value: UIView, key: string, map: Map<string, UIView>) => {
            value.release();
        });
        this._viewMap.clear();
        super.release();
    }

    /**
     * 启动等待视图定时器
     * @param ms {number} 等待多久打开等待视图（单位：毫秒）
     * @returns {number} 定时器 ID
     */
    private startViewTimer(ms: number): void {
        this.stopViewTimer();
        this._viewTimer = setTimeout(() => {
            G.UIMgr.openWaiting();
        }, ms);
    }

    /**
     * 停止等待视图定时器
     */
    private stopViewTimer(): void {
        if (!TypeUtils.isNull(this._viewTimer)) {
            clearTimeout(this._viewTimer);
            G.UIMgr.closeWaiting();
        }
    }

    /**
     * 添加到场景下的根节点（只允许 UIView 和 UIPersist）
     * @param ui {UIView | UIPersist} 需要添加的视图
     * @param layer {UIDefine.ViewLayer} 视图层枚举
     * @returns 
     */
    private addToScene(view: UIView, layer: UIDefine.ViewLayer): void {
        if (!view || !view.node || !cc.isValid(view.node)) {
            G.LogMgr.warn(`需要添加的 视图 / 常驻 不能为空`);
            return;
        }

        if (TypeUtils.isNull(layer)) {
            layer = UIDefine.ViewLayer.VIEW;
        }

        let viewTopZIndex: UIDefine.ViewLayer = this._viewTopZIndexMap.get(layer);
        if (TypeUtils.isNull(viewTopZIndex)) {
            viewTopZIndex = layer;
        }

        let zIndex: number = viewTopZIndex + 1;
        if (zIndex >= (layer + 1) * UIDefine.LAYER_INTERVAL) {
            zIndex = this.resetZIndex(layer) + 1;
        }

        if (view.node.isChildOf(this.node)) {
            view.node.zIndex = zIndex;
        } else {
            // view 在没有 widget 组件的情况下，自动添加全屏撑满，有则不处理
            let widget: cc.Widget = view.node.getComponent(cc.Widget);
            if (!widget) {
                widget = view.node.addComponent(cc.Widget);
                widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
            }
            this.node.addChild(view.node, zIndex);
        }

        this._viewTopZIndexMap.set(layer, zIndex);
    }

    /**
     * 重置指定层的层级顺序连续
     * @returns {number} 当前层最高层级
     */
    private resetZIndex(layer: UIDefine.ViewLayer): number {
        let layerViewCacheList: UIView[] = [];
        this._viewMap.forEach((view: UIView, className: string, map: Map<string, UIView>) => {
            if (view.node && cc.isValid(view.node)) {
                if (view.node.zIndex >= layer && view.node.zIndex < (layer + 1) * UIDefine.LAYER_INTERVAL) {
                    layerViewCacheList.push(view);
                }
            } else {
                G.LogMgr.warn(`请检查视图、节点不存在或者节点已无效、但是没有被移除 UIScene 列表以外`);
                this._viewMap.delete(className);
            }
        });

        layerViewCacheList.sort((a: UIView, b: UIView) => {
            return a.node.zIndex - b.node.zIndex;
        });

        let topZIndex: number = layer;
        for (let i: number = 0; i < layerViewCacheList.length; ++i) {
            let zIndex: number = topZIndex + i;
            let layerViewCache: UIView = layerViewCacheList[i];
            if (zIndex < (layer + 1) * UIDefine.LAYER_INTERVAL) {
                layerViewCache.node.zIndex = zIndex;
                topZIndex = zIndex;
            } else {
                G.LogMgr.warn(`${UIDefine.ViewLayer[layer]} 层已经超过了最大层级数量、请增加 UIDefine 里面 LAYER_INTERVAL 的容量大小、所有超出的视图将会被释放丢弃`);
                this.delView(layerViewCache.className, true);
            }
        }

        return topZIndex;
    }

}