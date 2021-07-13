/*
 * Author       : ougato
 * Date         : 2021-07-08 23:31:28
 * LastEditors  : ougato
 * LastEditTime : 2021-07-13 01:56:59
 * FilePath     : /client/assets/src/core/manager/res/ResManager.ts
 * Description  : 资源管理器、所有游戏中用到的资源操作、由 ResManager 进行统一管理
 */

import BaseManager from "../../base/BaseManager";
import ResBuffer from "./ResBuffer";
import ResLoader from "./ResLoader";
import * as ResInterface from "../../interface/ResInterface";
import ResCache from "./ResCache";
import * as ResDefine from "../../define/ResDefine";

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
    private m_buffer: ResBuffer = null;
    // 加载器
    private m_loader: ResLoader = null;

    constructor() {
        super();

        this.m_buffer = new ResBuffer();
        this.m_loader = new ResLoader();
    }

    public loadLocalRes(param: ResInterface.LoadLocalResParam): void {
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
                        this.m_buffer.delCache(resCache.bundle.name, resCache.url);
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

    public loadRemoteRes(): void {

    }

}