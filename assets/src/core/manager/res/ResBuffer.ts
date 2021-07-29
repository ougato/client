/*
 * Author       : ougato
 * Date         : 2021-07-08 23:37:00
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 02:09:28
 * FilePath     : /client/assets/src/core/manager/res/ResBuffer.ts
 * Description  : 资源缓存器、用于缓存加载过的资源
 */

import ResCache from "./ResCache";
import * as BundleDefine from "../../define/BundleDefine";

export default class ResBuffer {

    // 缓存表 Map<"包名称", Map<本地资源路径、远程资源链接, ResCache>>
    private m_cacheMap: Map<string, Map<string, ResCache>> = null;

    constructor() {
        this.m_cacheMap = new Map();
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
            this.m_cacheMap.set(bundleName, new Map([[data.base, data]]));
        }
    }

    /**
     * 获取资源缓存
     * @param bundleName {BundleDefine.Name} 包名
     * @param base {string} 本地资源路径 / 远程资源链接
     * @returns {ResCache} 缓存数据
     */
    public getCache(bundleName: BundleDefine.Name, base: string): ResCache {
        let cache: ResCache = null;

        if (bundleName === null || bundleName === undefined || bundleName.length <= 0) {
            return cache;
        }

        if (base === null || base === undefined || base.length <= 0) {
            return cache;
        }

        let baseCacheMap: Map<string, ResCache> = this.m_cacheMap.get(bundleName);
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
     * @param bundleName {BundleDefine.Name} 包名
     * @param base {string} 本地资源路径 / 远程资源链接
     */
    public delCache(bundleName: BundleDefine.Name, base: string): void {
        if (bundleName === null || bundleName === undefined || bundleName.length <= 0) {
            return;
        }

        if (base === null || base === undefined || base.length <= 0) {
            return;
        }

        let baseCacheMap: Map<string, ResCache> = this.m_cacheMap.get(bundleName);
        if (!baseCacheMap) {
            return;
        }

        let resCache: ResCache = baseCacheMap.get(base);
        if (resCache) {
            baseCacheMap.delete(base);
        }
    }

}