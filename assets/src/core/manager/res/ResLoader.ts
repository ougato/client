/*
 * Author       : ougato
 * Date         : 2021-07-08 23:32:24
 * LastEditors  : ougato
 * LastEditTime : 2021-07-26 00:42:11
 * FilePath     : /client/assets/src/core/manager/res/ResLoader.ts
 * Description  : 资源加载器、用于动态加载资源
 */
 
export default class ResLoader {

    constructor() {

    }

    public loadLocalRes(): void {
        let resCache: ResCache = this.m_buffer.getCache(param.bundleName, param.path);
        if (resCache) {
            switch (resCache.state) {
                case ResDefine.ResState.LOADED:

                    break;
                case ResDefine.ResState.LOADING:
                    resCache = null;
                    break;
            }
            param.onComplete(resCache);
        } else {
            let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(param.bundleName);
            if (!bundle) {
                G.LogMgr.sys(`找不到 "${param.bundleName}" 包名、加载 bundle 失败`);
                param.onComplete(resCache);
                return;
            }

            resCache = new ResCache();
            resCache.url = param.path;
            resCache.type = param.type
            resCache.bundle = bundle;
            resCache.mode = ResDefine.LoadMode.LOCAL;
            resCache.state = ResDefine.ResState.LOADING;
            this.m_buffer.setCache(resCache);

            let asset: cc.Asset = bundle.get(resCache.url, resCache.type);
            if (asset) {
                resCache.asset = asset;
                param.onComplete(resCache);
            } else {
                let completeCallback: Function = ((error: Error, asset: cc.Asset) => {
                    if (error) {
                        this.m_buffer.delCache(resCache.bundle.name as BundleDefine.Name, resCache.url);
                        resCache = null;
                    } else {
                        resCache.asset = asset;
                        resCache.state = ResDefine.ResState.LOADED;
                    }
                    param.onComplete(resCache);
                });

                if (param.onProgress) {
                    bundle.load(resCache.url, resCache.type, param.onProgress, completeCallback.bind(this));
                } else if (param.onComplete) {
                    bundle.load(resCache.url, resCache.type, completeCallback.bind(this));
                }
            }
        }
    }

    public loadLocalDirRes(param: ResInterface.LoadLocalResParam): void {
        let resCache: ResCache = this.m_buffer.getCache(param.bundleName, param.path);
        if (resCache) {
            switch (resCache.state) {
                case ResDefine.ResState.LOADED:

                    break;
                case ResDefine.ResState.LOADING:
                    resCache = null;
                    break;
            }
            param.onComplete(resCache);
        } else {
            let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(param.bundleName);
            if (!bundle) {
                G.LogMgr.sys(`找不到 "${param.bundleName}" 包名、加载 bundle 失败`);
                param.onComplete(resCache);
                return;
            }

            resCache = new ResCache();
            resCache.url = param.path;
            resCache.type = param.type
            resCache.bundle = bundle;
            resCache.mode = ResDefine.LoadMode.LOCAL;
            resCache.state = ResDefine.ResState.LOADING;
            this.m_buffer.setCache(resCache);

            let asset: cc.Asset = bundle.get(resCache.url, resCache.type);
            if (asset) {
                resCache.asset = asset;
                param.onComplete(resCache);
            } else {
                let completeCallback: Function = ((error: Error, asset: cc.Asset | cc.Asset[]) => {
                    if (error) {
                        this.m_buffer.delCache(resCache.bundle.name as BundleDefine.Name, resCache.url);
                        resCache = null;
                    } else {
                        resCache.asset = asset;
                        resCache.state = ResDefine.ResState.LOADED;
                    }
                    param.onComplete(resCache);
                });

                if (param.onProgress) {
                    bundle.loadDir(resCache.url, resCache.type, param.onProgress, completeCallback.bind(this));
                } else if (param.onComplete) {
                    bundle.loadDir(resCache.url, resCache.type, completeCallback.bind(this));
                }
            }
        }
    }

    public loadRemoteRes(): void {

    }

}