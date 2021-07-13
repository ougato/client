/*
 * Author       : ougato
 * Date         : 2021-07-08 23:37:00
 * LastEditors  : ougato
 * LastEditTime : 2021-07-13 00:32:00
 * FilePath     : /client/assets/src/core/manager/res/ResBuffer.ts
 * Description  : 资源缓存器、用于缓存加载过的资源
 */

import ResCache from "./ResCache";

export default class ResBuffer {

    // 缓存表 Map<"包名称", Map<本地资源路径、远程资源链接, ResCache>>
    private m_cacheMap: Map<string, Map<string, ResCache>> = null;

    constructor() {
        this.m_cacheMap = new Map();
    }

    public setCache(data: ResCache): void {
        if (!data) {
            return;
        }

        let bundleName: string = data.getBundleName();
        if (bundleName) {
            this.m_cacheMap.set(bundleName, new Map([[data.url, data]]));
        }
    }

    public getCache(bundleName: string, url: string): ResCache {
        let cache: ResCache = null;

        if (bundleName === null || bundleName === undefined || bundleName.length <= 0) {
            return cache;
        }

        if (url === null || url === undefined || url.length <= 0) {
            return cache;
        }

        let urlCacheMap: Map<string, ResCache> = this.m_cacheMap.get(bundleName);
        if (!urlCacheMap) {
            return cache;
        }

        let resCache: ResCache = urlCacheMap.get(url);
        if (resCache) {
            cache = resCache;
        }

        return cache;
    }

    public delCache(bundleName: string, url: string): void {
        if (bundleName === null || bundleName === undefined || bundleName.length <= 0) {
            return;
        }

        if (url === null || url === undefined || url.length <= 0) {
            return;
        }

        let urlCacheMap: Map<string, ResCache> = this.m_cacheMap.get(bundleName);
        if (!urlCacheMap) {
            return;
        }

        let resCache: ResCache = urlCacheMap.get(url);
        if (resCache) {
            urlCacheMap.delete(url);
        }
    }

}