/*
 * @Author       : ougato
 * @Date         : 2020-08-13 02:00:18
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-10 01:19:08
 * @FilePath     : \client242\assets\src\core\machine\Loader.ts
 * @Description  : 资源加载器 维护已加载的资源管理
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

    public print(): void {
        console.log(this.m_cacheAssets);
    }

    /**
     * 检测路径是否合法
     * @param path {AssetsPathDefineType} 资源路径
     * @return {boolean}
     */
    private _checkLegal(path: AssetsPathDefineType): boolean {
        let isLegal: boolean = true;
        if (path === null || path === undefined) {
            isLegal = false;
        } else {
            if (path instanceof Array && path.length <= 0) {
                isLegal = false;
            }
        }
        return isLegal;
    }

    /**
     * 添加动态加载资源到表缓存 增加引用计数
     * @param path {AssetsPathDefineType} 资源路径
     * @param value {cc.Asset} 资源节点
     */
    private _addAsset(path: AssetsPathDefineType, value: cc.Asset): void {
        let asset: cc.Asset = this.getCache(path);
        if (asset === null || asset === undefined) {
            this.m_cacheAssets.set(path, value);
        }
        value.addRef();
    }

    /**
     * 删除资源引用计数
     * @param path {AssetsPathDefineType} 资源路径
     */
    private _decAsset(path: AssetsPathDefineType): void {
        let asset: cc.Asset = this.getCache(path);
        if (asset !== null && asset !== undefined) {
            asset.decRef();
            if (asset.refCount <= 0) {
                cc.assetManager.releaseAsset(asset);
                this.m_cacheAssets.delete(path);
                asset = null;
            }
        } else {
            Logger.getInstance().warn(`资源引用计数减1过程中，找不到加载缓存过的资源 ${path}`);
        }
    }

    /**
     * 获取已加载后并缓存过的资源
     * @param path {AssetsPathDefineType} 资源路径
     * @return {cc.Asset | undefined} 如果资源已经加载过返回加载后的 cc.Asset，如果未加载或者已释放返回 undefined
     */
    public getCache(path: AssetsPathDefineType): cc.Asset | undefined {
        return this.m_cacheAssets.get(path);
    }

    /**
     * 预加载动态资源
     * @param path {AssetsPathDefineType} 资源路径
     * @param onComplete {(items: cc.AssetManager.RequestItem[]) => void} 预加载完成回调
     * @param onProgress {(percent: number) => void} 预加载过程中的百分比（0-100）
     */
    public preload(path: AssetsPathDefineType, onComplete?: (items: cc.AssetManager.RequestItem[]) => void, onProgress?: (percent: number) => void): void {
        if (!this._checkLegal(path)) {
            if (onComplete) {
                onComplete(null);
            }
            return;
        }

        cc.resources.preload(path, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            let percent: number = Util.toFixed(finish / total * 100);
            if (onProgress) {
                onProgress(percent);
            }
        }, (error: Error, items: cc.AssetManager.RequestItem[]) => {
            if (error) {
                Logger.getInstance().warn(`预加载路径失败 ${error.stack}`);
                if (onComplete) {
                    onComplete(null);
                }
            } else {
                if (onComplete) {
                    onComplete(items);
                }
            }
        });
    }

    /**
     * 加载动态资源（完成后对资源的引用计数加 1）
     * @param path {AssetsPathDefineType} 资源路径
     * @param onComplete {(items: cc.AssetManager.RequestItem[] | null) => void} 加载完成回调
     * @param onProgress {(percent: number) => void} 加载过程中的百分比（0-100）
     */
    public load(path: AssetsPathDefineType, onComplete?: (items: cc.Asset | cc.Asset[] | null) => void, onProgress?: (percent: number) => void): void {
        if (!this._checkLegal(path)) {
            Logger.getInstance().warn(`加载非法路径 ${path}`);
            if (onComplete) {
                onComplete(null);
            }
            return;
        }

        cc.resources.load(path, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
            let percent: number = Util.toFixed(finish / total * 100);
            if (onProgress) {
                onProgress(percent);
            }
        }, (error: Error, assets: cc.Asset | cc.Asset[]) => {
            if (error) {
                Logger.getInstance().warn(`加载路径失败 ${error.stack}`);
                if (onComplete) {
                    onComplete(null);
                }
            } else {
                if (assets instanceof Array) {
                    for (let i: number = 0; i < assets.length; ++i) {
                        this._addAsset(path[i] as AssetsPathDefineType, assets[i]);
                    }
                } else {
                    this._addAsset(path, assets);
                }

                if (onComplete) {
                    onComplete(assets);
                }
            }
        });
    }

    /**
     * 卸载动态资源（完成后对资源的引用计数减 1）
     * @param path {AssetsPathDefineType} 资源路径
     * @param onComplete {Function} 卸载完成回调
     * @param onProgress {(percent: number) => void} 卸载过程中的百分比（0-100）
     */
    public unload(path: AssetsPathDefineType, onComplete?: Function, onProgress?: (percent: number) => void): void {
        if (!this._checkLegal(path)) {
            Logger.getInstance().warn(`卸载非法路径 ${path}`);
            if (onComplete) {
                onComplete();
            }
            return;
        }

        if (path instanceof Array) {
            let releaseSize: number = path.length;
            for (let i: number = 0; i < path.length; ++i) {
                if (onProgress) {
                    onProgress(Util.toFixed((i + 1) / releaseSize * 100));
                }
                this._decAsset(path[i]);
            }
        } else {
            this._decAsset(path);
        }

        if (onComplete) {
            onComplete();
        }
    }

    /**
     * 释放已动态加载过的资源（把资源引用计数归 0，达到释放资源目的）
     * @param path {AssetsPathDefineType} 资源路径
     * @param onComplete {(items: cc.AssetManager.RequestItem[]) => void} 释放完成回调
     * @param onProgress {(percent: number) => void} 释放过程中的百分比（0-100）
     */
    public release(path: AssetsPathDefineType, onComplete?: Function, onProgress?: (percent: number) => void): void {
        if (!this._checkLegal(path)) {
            Logger.getInstance().warn(`释放非法路径 ${path}`);
            if (onComplete) {
                onComplete();
            }
            return;
        }

        if (path instanceof Array) {
            let releaseSize: number = path.length;
            for (let i: number = 0; i < releaseSize; ++i) {
                if (onProgress) {
                    onProgress(Util.toFixed((i + 1) / releaseSize * 100));
                }
                let asset: cc.Asset = this.getCache(path[i]);
                if (asset !== null && asset !== undefined) {
                    for (let j: number = 0; j < asset.refCount; ++j) {
                        this._decAsset(path[i]);
                    }
                }
            }
        } else {
            let asset: cc.Asset = this.getCache(path);
            if (asset !== null && asset !== undefined) {
                for (let i: number = 0; i < asset.refCount; ++i) {
                    this._decAsset(path);
                }
            }
        }

        if (onComplete) {
            onComplete();
        }
    }

    /**
     * 释放所有已动态加载过的资源（把所有加载过的资源引用计数归 0）
     * @param onComplete {Function} 释放所有完成回调
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
                for (let i: number = 0; i < value.refCount; ++i) {
                    this._decAsset(key);
                }
            });
            this.m_cacheAssets.clear();
        }

        if (onComplete) {
            onComplete();
        }
    }

    /**
     * 销毁 清理已经加载缓存的资源并置空（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）
     */
    public destroy(): void {
        this.releaseAll(() => {
            this.m_cacheAssets = null;
        });
    }
}