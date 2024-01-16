/*
 * Author       : ougato
 * Date         : 2021-07-08 23:32:24
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 00:44:17
 * FilePath     : /client/assets/src/core/manager/res/ResLoader.ts
 * Description  : 资源加载器、用于动态加载资源
 */

import { ColorDefine } from "../../define/ColorDefine";
import { ResDefine } from "../../define/ResDefine";
import { ResInterface } from "../../interface/ResInterface";
import ResCache from "./ResCache";

export default class ResLoader {

    // 加载后回调
    public loadedCallback: (resCache: ResCache) => void = null;

    constructor() {

    }

    public loadLocal(param: ResInterface.LoadLocalResParam): ResCache {
        let resCache: ResCache = null;
        switch (param.loadType) {
            case ResDefine.LoadType.ASSET:
                resCache = this.loadLocalAsset(param);
                break;
            case ResDefine.LoadType.DIR:
                resCache = this.loadLocalDir(param);
                break;
            case ResDefine.LoadType.SCENE:
                resCache = this.loadLocalScene(param);
                break;
            default:
                G.LogMgr.sys(`加载本地 类型错误 ${param.loadType}`);
                break;
        }
        return resCache;
    }

    private loadLocalAsset(param: ResInterface.LoadLocalResParam): ResCache {
        let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(param.bundleName);
        let resCache: ResCache = new ResCache();
        resCache.base = param.path;
        resCache.asset = null;
        resCache.type = param.assetType;
        resCache.bundle = bundle;
        resCache.mode = ResDefine.LoadMode.LOCAL;
        resCache.state = ResDefine.ResState.LOADING;

        let onComplete: (error: Error, assets: cc.Asset) => void = (error: Error, assets: cc.Asset) => {
            if (error) {
                G.LogMgr.sys(`加载资源 失败 ${param.path}`);
                resCache.mode = null;
            } else {
                G.LogMgr.log(`加载资源`, param.path);
                resCache.asset = assets;
                resCache.state = ResDefine.ResState.LOADED;
                resCache.addCache();
            }

            param.completeCallback(resCache);
            resCache && resCache.callWaitParam();
            this.loadedCallback && this.loadedCallback(resCache);
        };

        if (param.progressCallback && param.progressCallback instanceof Function) {
            bundle.load(param.path, param.assetType, param.progressCallback, onComplete);
        } else {
            bundle.load(param.path, param.assetType, onComplete);
        }

        return resCache;
    }

    private loadLocalDir(param: ResInterface.LoadLocalResParam): ResCache {
        let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(param.bundleName);
        let resCache: ResCache = new ResCache();
        resCache.base = param.path;
        resCache.asset = null;
        resCache.type = param.assetType;
        resCache.bundle = bundle;
        resCache.mode = ResDefine.LoadMode.LOCAL;
        resCache.state = ResDefine.ResState.LOADING;

        let onProgress = (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            param.progressCallback(finish, total, item);
        }

        let onComplete: (error: Error, assets: Array<cc.Asset>) => void = (error: Error, assets: Array<cc.Asset>) => {
            if (error) {
                G.LogMgr.sys(`加载资源 失败 ${param.path}`);
                resCache.mode = null;
            } else {
                G.LogMgr.log(`加载资源`, param.path);
                resCache.asset = assets;
                resCache.state = ResDefine.ResState.LOADED;
                resCache.addCache();
            }

            param.completeCallback(resCache);
            resCache && resCache.callWaitParam();
            this.loadedCallback && this.loadedCallback(resCache);
        };

        if (param.progressCallback && param.progressCallback instanceof Function) {
            bundle.loadDir(param.path, param.assetType, onProgress, onComplete);
        } else {
            bundle.loadDir(param.path, param.assetType, onComplete);
        }

        return resCache;
    }

    private loadLocalScene(param: ResInterface.LoadLocalResParam): ResCache {
        let resCache: ResCache = null;

        return resCache;
    }

    public loadRemote(param: ResInterface.LoadRemoteResParam): ResCache {
        let resCache: ResCache = null;

        return resCache;
    }

}