/*
 * @Author       : ougato
 * @Date         : 2020-08-13 02:00:18
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-05 17:22:10
 * @FilePath     : \client242\assets\src\core\machine\Loader.ts
 * @Description  : 加载器 封装资源加载类
 */

import Logger from "./Logger";
import Util from "../../utils/Util";

export default class Loader {

    private static g_instance: Loader = null;

    // 加载后的缓存资源
    private m_cacheAssets: Map<AssetsPathDefineType, cc.Asset>;

    public static getInstance(): Loader {
        if (this.g_instance === null) {
            this.g_instance = new Loader();
        }
        return this.g_instance;
    }

    public static destroy(): void {
        if (this.g_instance !== null) {
            this.g_instance.destroy();
        }
        this.g_instance = null;
    }

    constructor() {
        this.m_cacheAssets = new Map();
    }

    /**
     * 检测路径是否合法
     * @param path {AssetsPathDefineType} 动态资源路径
     * @return {boolean}
     */
    private checkLegal(path: AssetsPathDefineType): boolean {
        let isLegal: boolean = true;
        if (path === null || path === undefined || path.length <= 0) {
            isLegal = false;
        }
        return isLegal;
    }

    /**
     * 添加动态加载资源到表缓存 增加引用计数
     * @param path {AssetsPathDefineType} 动态资源路径
     * @param value {cc.Asset} 资源节点
     */
    private addAsset(path: AssetsPathDefineType, value: cc.Asset): void {
        let asset: cc.Asset = this.m_cacheAssets.get(path);
        if (asset === null || asset === undefined) {
            this.m_cacheAssets.set(path, value);
            value.addRef();
        } else {
            Logger.getInstance().warn(`${path} 资源已加载缓存，无需多次加载`);
        }
    }

    /**
     * 删除资源引用计数
     * @param path {AssetsPathDefineType} 动态资源路径
     */
    private delAsset(path: AssetsPathDefineType): void {
        let asset: cc.Asset = this.m_cacheAssets.get(path);
        if (asset !== null && asset !== undefined) {
            this.m_cacheAssets.delete(path);
            asset.decRef();
            asset = null;
        } else {
            Logger.getInstance().warn(`找不到加载缓存过的资源 ${path}`);
        }
    }

    /**
     * 预加载动态资源
     * @param path  {AssetsPathDefineType} 动态资源路径
     * @param onComplete {(items: cc.AssetManager.RequestItem[]) => void} 预加载完成回调
     * @param onProgress {(percent: number) => void} 预加载过程中的百分比（0-100）
     * @param appendNum {number} 追加百分比计算数量
     */
    public preload(path: AssetsPathDefineType, onComplete?: (items: cc.AssetManager.RequestItem[]) => void, onProgress?: (percent: number) => void, appendTotal?: number): void {
        if (!this.checkLegal(path)) {
            if (onComplete) {
                onComplete(null);
            }
            return;
        }

        if (appendTotal === null || appendTotal === undefined) {
            appendTotal = 0;
        }

        cc.resources.preload(path, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            let percent: number = Util.toFixed(finish / (total + appendTotal) * 100);
            if (onProgress) {
                onProgress(percent);
            }
        }, (error: Error, items: cc.AssetManager.RequestItem[]) => {
            if (error) {
                Logger.getInstance().warn(`预加载路径失败 ${error.stack}`);
            } else {
                if (onComplete) {
                    onComplete(items);
                }
            }
        });
    }

    /**
     * 加载动态资源
     * @param path  {AssetsPathDefineType} 动态资源路径
     * @param onComplete {(items: cc.AssetManager.RequestItem[]) => void} 加载完成回调
     * @param onProgress {(percent: number) => void} 加载过程中的百分比（0-100）
     */
    public load(path: AssetsPathDefineType, onComplete?: (items: cc.Asset | cc.Asset[]) => void, onProgress?: (percent: number) => void) {
        if (!this.checkLegal(path)) {
            if (onComplete) {
                onComplete(null);
            }
            return;
        }

        cc.resources.load(path, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            let percent: number = Math.floor((finish / total * 100) * 100) / 100;
            if (onProgress) {
                onProgress(percent);
            }
        }, (error: Error, assets: cc.Asset | cc.Asset[]) => {
            if (error) {
                Logger.getInstance().warn(`加载路径失败 ${error.stack}`);
            } else {
                if (assets instanceof Array) {
                    for (let i: number = 0; i < assets.length; ++i) {
                        this.addAsset(path[i], assets[i]);
                    }
                } else {
                    this.addAsset(path, assets);
                }

                if (onComplete) {
                    onComplete(assets);
                }
            }
        });
    }

    /**
     * 释放已动态加载过的资源
     * @param path {AssetsPathDefineType} 动态资源路径
     * @param onComplete {(items: cc.AssetManager.RequestItem[]) => void} 释放完成回调
     * @param onProgress {(percent: number) => void} 释放过程中的百分比（0-100）
     */
    public release(path: AssetsPathDefineType, onComplete?: Function, onProgress?: (percent: number) => void) {
        if (this.checkLegal(path)) {
            if (path instanceof Array) {
                let releaseSize: number = path.length;
                for (let i: number = 0; i < path.length; ++i) {
                    if (onProgress) {
                        onProgress(Util.toFixed((i + 1) / releaseSize * 100));
                    }
                    this.delAsset(path[i]);
                }
            } else {
                this.delAsset(path);
            }
        }

        if (onComplete) {
            onComplete();
        }
    }

    /**
     * 释放所有已动态加载过的资源
     * @param onComplete {(items: cc.AssetManager.RequestItem[]) => void} 释放所有完成回调
     * @param onProgress {(percent: number) => void} 释放所有过程中的百分比（0-100）
     */
    public releaseAll(onComplete?: Function, onProgress?: (percent: number) => void): void {
        let size: number = this.m_cacheAssets.size;
        if (this.m_cacheAssets && size > 0) {
            let index: number = 0;
            this.m_cacheAssets.forEach((value: cc.Asset, key: AssetsPathDefineType, map: Map<AssetsPathDefineType, cc.Asset>) => {
                if (onProgress) {
                    onProgress(Util.toFixed((++index / size) * 100));
                }
                this.delAsset(key);
            });
        }

        if (onComplete) {
            onComplete();
        }
    }

    /**
     * 销毁
     */
    private destroy(): void {
        if (this.m_cacheAssets && this.m_cacheAssets.size > 0) {
            this.m_cacheAssets.forEach((value: cc.Asset, key: any, map: Map<any, cc.Asset>) => {
                value.decRef();
            });
            this.m_cacheAssets.clear();
            this.m_cacheAssets = null;
        }
    }
}