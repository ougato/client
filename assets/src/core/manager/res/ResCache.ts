/*
 * Author       : ougato
 * Date         : 2021-07-10 00:39:14
 * LastEditors  : ougato
 * LastEditTime : 2021-08-10 00:30:31
 * FilePath     : /client/assets/src/core/manager/res/ResCache.ts
 * Description  : 资源缓存
 */

import * as ResDefine from "../../define/ResDefine";
import * as BundleDefine from "../../define/BundleDefine";
import * as ResInterface from "../../interface/ResInterface";

export default class ResCache {

    // 本地资源路径 / 远程资源链接
    public base: string = null;
    // 加载后的资源
    public asset: cc.Asset | cc.Asset[] = null;
    // 资源类型
    public type: AssetsType = null;
    // 包对象
    public bundle: cc.AssetManager.Bundle = null;
    // 加载方式
    public mode: ResDefine.LoadMode = null;
    // 状态
    public state: ResDefine.ResState = null;

    // 在 LOADING 状态中、等待加载的接口参数列表
    private _waitLoadResParamList: ResInterface.LoadResParam[] = null;
    // 缓存计数
    private _cacheCount: number = null;

    constructor() {
        this._waitLoadResParamList = [];
        this._cacheCount = 0;
    }

    /**
     * 获取包名称
     * @returns {string} 包名称
     */
    public getBundleName(): BundleDefine.Name {
        let bundleName: BundleDefine.Name = null;

        if (this.bundle) {
            bundleName = this.bundle.name as BundleDefine.Name;
        }

        return bundleName;
    }

    /**
     * 添加等待加载的接口参数
     * @param param {ResInterface.LoadResParam} 加载的接口参数
     */
    public addWaitParam(param: ResInterface.LoadResParam): void {
        this._waitLoadResParamList.push(param);
    }

    /**
     * 调用 LOADING 时等待添加的接口参数
     */
    public callWaitParam(): void {
        if (!this._waitLoadResParamList) {
            return;
        }

        for (let i: number = 0; i < this._waitLoadResParamList.length; ++i) {
            this.addCache();
            let param: ResInterface.LoadResParam = this._waitLoadResParamList[i];
            this.callFinishedProgress(param.progressCallback);
            param.completeCallback(this);
        }

        this._waitLoadResParamList = [];
    }

    /**
     * 调用加载完成后的资源百分比
     * @param progressCallback {(finish: number, total: number, item?: cc.AssetManager.RequestItem) => void} 百分比回调
     */
    public callFinishedProgress(progressCallback: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void): void {
        if (progressCallback && progressCallback instanceof Function) {
            let finish: number = 0;
            let total: number = 0;
            if (this.asset instanceof Array) {
                finish = this.asset.length;
            } else {
                finish = 1;
            }
            total = finish
            progressCallback(finish, total);
        }
    }

    /**
     * 增加缓存计数
     */
    public addCache(): void {
        ++this._cacheCount;
        if (this.asset instanceof Array) {
            for (let i: number = 0; i < this.asset.length; ++i) {
                let asset: cc.Asset = this.asset[i];
                asset.addRef();
            }
        } else {
            this.asset.addRef();
        }
    }

    /**
     * 减少缓存计数
     * @returns {number} 返回减少后的缓存计数
     */
    public decCache(): number {
        --this._cacheCount;
        if (this.asset instanceof Array) {
            for (let i: number = 0; i < this.asset.length; ++i) {
                let asset: cc.Asset = this.asset[i];
                asset.decRef();
            }
        } else {
            this.asset.decRef();
        }
        return this._cacheCount;
    }

    /**
     * 获取缓存计数
     * @returns {number} 引用数量
     */
    public getCacheCount(): number {
        return this._cacheCount;
    }
}