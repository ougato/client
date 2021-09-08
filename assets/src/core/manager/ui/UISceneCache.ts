/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 03:15:08
 * FilePath     : /client/assets/src/core/manager/ui/UISceneCache.ts
 * Description  : 场景缓存
 */

import BaseView from "../../base/BaseView";
import UICache from "./UICache";
import UIViewCache from "./UIViewCache";
import * as UIInterface from "../../interface/UIInterface";
import * as UIDefine from "../../define/UIDefine";
import ResCache from "../res/ResCache";
import BaseUI from "../../base/BaseUI";

export default class UISceneCache extends UICache {

    // 视图列表
    private _viewCacheList: UIViewCache[] = null;
    // 当前视图
    private _currViewCache: UIViewCache = null;
    // 每个视图最高层级 Map<层级枚举, 最高层级>
    private _viewTopZIndexMap: Map<UIDefine.ViewLayer, number> = null;
    // 视图加载等待定时器
    private _viewWaitingTimer: number = null;

    constructor() {
        super()

        this._viewCacheList = [];
        this._viewTopZIndexMap = new Map();
    }

    /**
     * 添加视图
     * @param param {UIInterface.ViewParam<T>} 视图参数
     * @param data {...any[]} 可变长参数
     */
    public addView<T extends BaseView>(param: UIInterface.ViewParam<T>, ...data: any[]): void {
        let className: string = cc.js.getClassName(param.viewClass);

        if (this._currViewCache.className === className) {
            G.LogMgr.warn(`不能重复加载视图 ${className}`);
            return;
        }

        G.UIMgr.openLockScreen();
        this.startWaitingTimer(param.delay);

        let newViewCache: UIViewCache = new UIViewCache();
        if (!this._currViewCache) {
            this._currViewCache = newViewCache;
            this._currViewCache.className = className;
        }

        G.ResMgr.load({
            base: param.viewClass.prefabPath,
            bundleName: param.bundleName,
            assetType: cc.Prefab,
            progressCallback: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => {
                if (param.onProgress) param.onProgress(finish, total, item);
            },
            completeCallback: (resCache: ResCache | null) => {
                if (resCache !== null) {
                    if (this._currViewCache !== newViewCache) {
                        this._currViewCache = newViewCache;
                        this._currViewCache.className = className;
                    }
                    let node: cc.Node = cc.instantiate(resCache.asset as cc.Prefab);
                    this.addToScene(node, param.layer);
                    let script: BaseUI = newViewCache.addScript(node, param.viewClass);
                    this._currViewCache.resCache = resCache;
                    this._currViewCache.node = node;
                    if (param.onComplete) param.onComplete();
                    if (script.onLoaded) script.onLoaded.apply(script, data);
                } else {
                    if (!this._currViewCache.resCache) {
                        this._currViewCache = null;
                    }
                    if (param.onError) param.onError();
                }

                G.UIMgr.closeLockScreen();
                this.stopWaitingTimer();
            },
        })
    }

    /**
     * 删除并释放视图
     * @param className 
     */
    public delView(className: string): void {
        let isDelele: boolean = false;
        for (let i: number = this._viewCacheList.length - 1; i >= 0; --i) {
            let viewCache: UIViewCache = this._viewCacheList[i];
            if (viewCache.className === className) {
                this._viewCacheList.splice(i, 1);
                viewCache.release();
                isDelele = true;
                break;
            }
        }

        if (!isDelele) {
            G.LogMgr.warn(`没有找到 ${className} 的视图删除`);
        }
    }

    /**
     * 场景释放
     */
    public release(): void {
        for (let i: number = 0; i < this._viewCacheList.length; ++i) {
            this._viewCacheList[i].release();
        }
        super.release();
    }

    /**
     * 启动等待视图定时器
     * @param ms {number} 等待多久打开等待视图（单位：毫秒）
     * @returns {number} 定时器 ID
     */
    private startWaitingTimer(ms: number): void {
        this.stopWaitingTimer();
        this._viewWaitingTimer = setTimeout(() => {
            G.UIMgr.openWaiting();
        }, ms);
    }

    /**
     * 停止等待视图定时器
     */
    private stopWaitingTimer(): void {
        if (this._viewWaitingTimer !== null && this._viewWaitingTimer !== undefined) {
            clearTimeout(this._viewWaitingTimer);
            G.UIMgr.closeWaiting();
        }
    }


    /**
     * 添加到 prefab 场景下的根节点
     * @param node {cc.Node} 需要添加的场景或者是常驻
     * @param layer {UIDefine.ViewLayer} 视图层枚举
     * @returns 
     */
    private addToScene(node: cc.Node, layer: UIDefine.ViewLayer): void {
        if (!this.node) {
            G.LogMgr.warn(`当前场景不能为空`);
            return;
        }

        let viewTopZIndex: UIDefine.ViewLayer = this._viewTopZIndexMap.get(layer);
        if (viewTopZIndex === null || viewTopZIndex === undefined) {
            viewTopZIndex = layer;
        }

        let zIndex: number = viewTopZIndex + 1;
        if (zIndex >= (layer + 1) * UIDefine.LAYER_INTERVAL) {
            zIndex = this.resetViewZIndex(layer) + 1;
        }
        this.node.addChild(node, zIndex);
        this._viewTopZIndexMap.set(layer, zIndex);
    }

    /**
     * 重置指定层的层级顺序连续
     * @returns {number} 当前层最高层级
     */
    private resetViewZIndex(layer: UIDefine.ViewLayer): number {
        let layerViewCacheList: UIViewCache[] = [];
        for (let i: number = 0; i < this._viewCacheList.length; ++i) {
            let viewCache: UIViewCache = this._viewCacheList[i];
            if (viewCache.node && cc.isValid(viewCache.node)) {
                if (viewCache.node.zIndex >= layer && viewCache.node.zIndex < (layer + 1) * UIDefine.LAYER_INTERVAL) {
                    layerViewCacheList.push(viewCache);
                }
            } else {
                G.LogMgr.warn(`请检查视图、节点不存在或者节点已无效、但是没有被移除 UISceneCache 列表以外`);
            }
        }

        layerViewCacheList = layerViewCacheList.sort((a: UIViewCache, b: UIViewCache) => {
            return a.node.zIndex - b.node.zIndex;
        });

        let topZIndex: number = layer;
        for (let i: number = 0; i < layerViewCacheList.length; ++i) {
            let zIndex: number = topZIndex + i;
            let layerViewCache: UIViewCache = layerViewCacheList[i];
            if (zIndex < (layer + 1) * UIDefine.LAYER_INTERVAL) {
                layerViewCache.node.zIndex = zIndex;
                topZIndex = zIndex;
            } else {
                G.LogMgr.warn(`${UIDefine.ViewLayer[layer]} 层已经超过了最大层级数量、请增加 UIDefine 里面 LAYER_INTERVAL 的容量大小、所有超出的视图将会被释放丢弃`);
                this.delView(layerViewCache.className);
            }
        }

        return topZIndex;
    }

}