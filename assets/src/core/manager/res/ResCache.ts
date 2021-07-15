/*
 * Author       : ougato
 * Date         : 2021-07-10 00:39:14
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 02:09:05
 * FilePath     : /client/assets/src/core/manager/res/ResCache.ts
 * Description  : 资源缓存
 */

import * as ResDefine from "../../define/ResDefine";
import * as BundleDefine from "../../define/BundleDefine";

export default class ResCache {

    // 本地资源路径、远程资源链接
    public url: string = null;
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
    // 释放后回调
    public releasedCallback: Function = null;

    constructor() {

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
}