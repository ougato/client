/*
 * Author       : ougato
 * Date         : 2021-07-08 23:31:28
 * LastEditors  : ougato
 * LastEditTime : 2022-09-18 18:39:38
 * FilePath     : /client/assets/src/core/manager/res/ResManager.ts
 * Description  : 资源管理器、所有游戏中用到的资源操作、由 ResManager 进行统一管理
 */

import BaseManager from "../../base/BaseManager";
import ResBuffer from "./ResBuffer";
import ResLoader from "./ResLoader";
import ResCache from "./ResCache";
import TypeUtils from "../../utils/TypeUtils";
import { BundleDefine } from "../../../define/BundleDefine";
import { ResDefine } from "../../define/ResDefine";
import { ResInterface } from "../../interface/ResInterface";

export default class ResManager extends BaseManager {

    private static s_instance: ResManager = null;

    public static getInstance(): ResManager {
        if (this.s_instance === null) {
            this.s_instance = new ResManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    // 缓存器
    private _buffer: ResBuffer = null;
    // 加载器
    private _loader: ResLoader = null;

    constructor() {
        super();

        this._buffer = new ResBuffer();
        this._loader = new ResLoader();

        this._buffer.releasedCallback = this.onReleased;
        this._loader.loadedCallback = this.onLoaded;
    }

    /**
     * 加载资源
     * 注：
     * 如果手动调用全局的 ResManager 请一定要手动释放
     * 不是必须调用全局的 ResManager 请继承 BaseComponent 后，在自定义 UI 界面使用 this.load
     * @param param {ResInterface.LoadResParam} 加载资源参数
     */
    public load(param: ResInterface.LoadResParam): void {
        if (TypeUtils.isNull(param.bundleName)) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (TypeUtils.isNull(param.loadType)) {
            param.loadType = ResDefine.LoadType.ASSET;
        }

        if (TypeUtils.isNull(param.loadMode)) {
            param.loadMode = ResDefine.LoadMode.LOCAL;
        }

        if (TypeUtils.isNull(param.progressCallback)) {
            param.progressCallback = null;
        }

        let resCache: ResCache = this._buffer.getCache(param.base, param.bundleName);
        if (resCache) {
            if (resCache.state === ResDefine.ResState.LOADED) {
                resCache.addCache();
                resCache.callFinishedProgress(param.progressCallback);
                param.completeCallback(resCache);
            } else if (resCache.state === ResDefine.ResState.LOADING) {
                resCache.addWaitParam(param);
            }
            return;
        }

        let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(param.bundleName);
        if (!bundle) {
            G.LogMgr.sys(`找不到 "${param.bundleName}" 包名、加载 bundle 失败`);
            param.completeCallback(resCache);
            return;
        }

        let asset: cc.Asset = bundle.get(param.base, param.assetType);
        if (asset) {
            resCache = new ResCache();
            resCache.base = param.base;
            resCache.asset = asset;
            resCache.type = param.assetType;
            resCache.bundle = bundle;
            resCache.mode = ResDefine.LoadMode.LOCAL;
            resCache.state = ResDefine.ResState.LOADED;
            resCache.addCache();
            resCache.callFinishedProgress(param.progressCallback);
            param.completeCallback(resCache);
            this._buffer.setCache(resCache);
            return;
        }

        if (param.loadMode === ResDefine.LoadMode.LOCAL) {
            let localParam: ResInterface.LoadLocalResParam = {
                path: param.base,
                bundleName: param.bundleName,
                assetType: param.assetType,
                loadType: param.loadType,
                progressCallback: param.progressCallback,
                completeCallback: param.completeCallback,
            }
            resCache = this._loader.loadLocal(localParam);
        } else if (param.loadMode === ResDefine.LoadMode.REMOTE) {
            let remoteParam: ResInterface.LoadRemoteResParam = {
                url: param.base,
                bundleName: param.bundleName,
                assetType: param.assetType,
                progressCallback: param.progressCallback,
                completeCallback: param.completeCallback,
            }
            resCache = this._loader.loadRemote(remoteParam);
        } else {
            G.LogMgr.sys(`资源管理器加载方式错误`);
        }

        if (resCache) {
            this._buffer.setCache(resCache);
        }
    }

    /**
     * 释放资源
     * @param resCache {ResCache} 资源缓存
     * 
     * @param base {string} 本地资源路径 / 远程资源链接
     * @param bundleName {BundleDefine.Name} 包名
     */
    public release(resCache: ResCache): void;
    public release(base: string, bundleName?: BundleDefine.Name): void;
    public release(): void {
        let resCache: ResCache = null;
        if (arguments.length === 1 && arguments[0] instanceof ResCache) {
            resCache = arguments[0];
        } else if ((arguments.length === 1 || arguments.length === 2) && typeof arguments[0] === "string" &&
            (typeof arguments[1] === undefined || typeof arguments[1] === null || typeof arguments[1] === "string")) {
            let base: string = arguments[0];
            let bundleName: BundleDefine.Name = arguments[1];

            if (TypeUtils.isNull(bundleName)) {
                bundleName = BundleDefine.Name.RESOURCES;
            }
            resCache = this._buffer.getCache(base, bundleName);
        } else {
            G.LogMgr.warn(`资源释放参数错误`);
            return;
        }

        if (resCache && resCache.decCache() <= 0) {
            this._buffer.delCache(resCache.base, resCache.getBundleName());
        }
    }

    private onLoaded(resCache: ResCache): void {

    }

    private onReleased(base: string, bundleName: BundleDefine.Name): void {
        G.LogMgr.log(`释放资源 ${base}`);
    }

    public print(): void {
        this._buffer.print();
    }

}