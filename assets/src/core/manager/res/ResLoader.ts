/*
 * Author       : ougato
 * Date         : 2021-07-08 23:32:24
 * LastEditors  : ougato
 * LastEditTime : 2021-08-04 03:29:46
 * FilePath     : /client/assets/src/core/manager/res/ResLoader.ts
 * Description  : 资源加载器、用于动态加载资源
 */

import * as ResInterface from "../../interface/ResInterface";
import * as ResDefine from "../../define/ResDefine";
import ResCache from "./ResCache";
import * as EventDefine from "../../define/EventDefine";

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
                G.LogMgr.sys(`加载 资源 失败 ${param.path}`);
            } else {
                G.LogMgr.log(`加载 资源 成功 ${param.path}`);
                resCache.asset = assets;
                resCache.addRef();
            }

            param.completeCallback(resCache);
            resCache && resCache.callRepeatParam();
            this.loadedCallback && this.loadedCallback(resCache);
        };

        if (param.progressCallback) {
            bundle.load(param.path, param.assetType, param.progressCallback, onComplete);
        } else {
            bundle.load(param.path, param.assetType, onComplete);
        }

        return resCache;
    }

    private loadLocalDir(param: ResInterface.LoadLocalResParam): ResCache {
        let resCache: ResCache = null;

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