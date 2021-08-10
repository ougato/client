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

    // 在 LOADING 状态中、重复加载的接口参数列表
    private _repeatLoadResParamList: ResInterface.LoadResParam[] = null;

    constructor() {
        this._repeatLoadResParamList = [];
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
     * 添加重复加载的接口参数
     * @param param {ResInterface.LoadResParam} 加载的接口参数
     */
    public addRepeatParam(param: ResInterface.LoadResParam): void {
        this._repeatLoadResParamList.push(param);
    }

    /**
     * 调用重复添加的接口参数
     */
    public callRepeatParam(): void {
        if (!this._repeatLoadResParamList) {
            return;
        }

        for (let i: number = 0; i < this._repeatLoadResParamList.length; ++i) {
            let param: ResInterface.LoadResParam = this._repeatLoadResParamList[i];
            this.asset
            param.completeCallback(this);
        }

        this._repeatLoadResParamList = [];
    }

    /**
     * 增加引用计数
     */
    public addRef(): void {
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
     * 减少引用计数
     */
    public decRef(): void {
        if (this.asset instanceof Array) {
            for (let i: number = 0; i < this.asset.length; ++i) {
                let asset: cc.Asset = this.asset[i];
                asset.decRef();
            }
        } else {
            this.asset.decRef();
        }
    }
}