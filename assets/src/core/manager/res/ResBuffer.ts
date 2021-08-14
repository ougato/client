/*
 * Author       : ougato
 * Date         : 2021-07-08 23:37:00
 * LastEditors  : ougato
 * LastEditTime : 2021-08-10 02:16:51
 * FilePath     : /client/assets/src/core/manager/res/ResBuffer.ts
 * Description  : 资源缓存器、用于缓存加载过的资源
 */

import ResCache from "./ResCache";
import * as BundleDefine from "../../define/BundleDefine";

export default class ResBuffer {

    // 缓存表 Map<"包名称", Map<本地资源路径、远程资源链接, ResCache>>
    private _cacheMap: Map<string, Map<string, ResCache>> = null;

    constructor() {
        this._cacheMap = new Map();
    }

    /**
     * 设置资源缓存
     * @param data {ResCache} 缓存数据
     */
    public setCache(data: ResCache): void {
        if (!data) {
            return;
        }

        let bundleName: BundleDefine.Name = data.getBundleName();
        if (bundleName) {
            this._cacheMap.set(bundleName, new Map([[data.base, data]]));
        }
    }

    /**
     * 获取资源缓存
     * @param base {string} 本地资源路径 / 远程资源链接
     * @param bundleName {BundleDefine.Name} 包名
     * @returns {ResCache} 缓存数据
     */
    public getCache(base: string, bundleName: BundleDefine.Name): ResCache {
        let cache: ResCache = null;

        if (bundleName === null || bundleName === undefined || bundleName.length <= 0) {
            return cache;
        }

        if (base === null || base === undefined || base.length <= 0) {
            return cache;
        }

        let baseCacheMap: Map<string, ResCache> = this._cacheMap.get(bundleName);
        if (!baseCacheMap) {
            return cache;
        }

        let resCache: ResCache = baseCacheMap.get(base);
        if (resCache) {
            cache = resCache;
        }

        return cache;
    }

    /**
     * 删除资源缓存
     * @param base {string} 本地资源路径 / 远程资源链接
     * @param bundleName {BundleDefine.Name} 包名
     */
    public delCache(base: string, bundleName: BundleDefine.Name): void {
        if (bundleName === null || bundleName === undefined || bundleName.length <= 0) {
            return;
        }

        if (base === null || base === undefined || base.length <= 0) {
            return;
        }

        let baseCacheMap: Map<string, ResCache> = this._cacheMap.get(bundleName);
        if (!baseCacheMap) {
            return;
        }

        let resCache: ResCache = baseCacheMap.get(base);
        if (resCache) {
            baseCacheMap.delete(base);
        }

        if (baseCacheMap.size <= 0) {
            this._cacheMap.delete(bundleName);
        }
    }

    public print(): void {
        let info: string = "资源缓存：\n";
        this._cacheMap.forEach((value: Map<string, ResCache>, bundleName: string, map: Map<string, Map<string, ResCache>>) => {
            info += `[${bundleName}` + "\n";
            value.forEach((resCache: ResCache, base: string, map: Map<string, ResCache>) => {
                info += `  ${base} ` + `${resCache.getCacheCount()}\n`;
                if (resCache.asset instanceof Array) {
                    for (let i: number = 0; i < resCache.asset.length; ++i) {
                        let asset: cc.Asset = resCache.asset[i];
                        info += `    ${asset.name} ${asset.refCount}\n`;
                    }
                } else {
                    info += `    ${resCache.asset.name} ${resCache.asset.refCount}\n`;
                }
            })
        });
        G.LogMgr.log(info);
    }

}