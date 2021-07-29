/*
 * Author       : ougato
 * Date         : 2021-07-08 23:31:28
 * LastEditors  : ougato
 * LastEditTime : 2021-07-26 01:04:40
 * FilePath     : /client/assets/src/core/manager/res/ResManager.ts
 * Description  : 资源管理器、所有游戏中用到的资源操作、由 ResManager 进行统一管理
 */

import BaseManager from "../../base/BaseManager";
import ResBuffer from "./ResBuffer";
import ResLoader from "./ResLoader";
import * as ResInterface from "../../interface/ResInterface";
import ResCache from "./ResCache";
import * as ResDefine from "../../define/ResDefine";
import * as BundleDefine from "../../define/BundleDefine";

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

    public async load(param: ResInterface.LoadResParam): Promise<void> {
        if (param.bundleName === null || param.bundleName === undefined) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (param.loadType === null || param.loadType === undefined) {
            param.loadType = ResDefine.LoadType.ASSET;
        }

        if (param.loadMode === null || param.loadMode === undefined) {
            param.loadMode = ResDefine.LoadMode.LOCAL;
        }

        let resCache: ResCache = this.m_buffer.getCache(param.bundleName, param.base);
        if (resCache !== null) {
            param.onComplete(resCache);
            return;
        }

        if (param.loadMode === ResDefine.LoadMode.LOCAL) {
            let localParam: ResInterface.LoadLocalResParam = {
                path: param.base,
                bundleName: param.bundleName,
                assetType: param.assetType,
                loadType: param.loadType,
                onProgress: param.onProgress,
                onComplete: param.onComplete,
            }
            resCache = await this.m_loader.loadLocal(localParam);
        } else if (param.loadMode === ResDefine.LoadMode.REMOTE) {
            let remoteParam: ResInterface.LoadRemoteResParam = {
                url: param.base,
                bundleName: param.bundleName,
                assetType: param.assetType,
                onProgress: param.onProgress,
                onComplete: param.onComplete,
            }
            resCache = await this.m_loader.loadRemote(remoteParam);
        } else {
            G.LogMgr.sys(`资源管理器加载方式错误`);
        }

        if (resCache) {
            this.m_buffer.setCache(resCache);
        }
    }

}