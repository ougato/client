/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 03:15:08
 * FilePath     : /client/assets/src/core/manager/ui/UISceneCache.ts
 * Description  : 场景缓存
 */

import BaseScene from "../../base/BaseScene";
import BaseUI from "../../base/BaseUI";
import UICache from "./UICache";
import UIViewCache from "./UIViewCache";

export default class UISceneCache extends UICache {

    // 视图 Map
    private _viewCacheMap: Map<string, UIViewCache> = null;

    constructor() {
        super()

        this.init();
    }

    private init(): void {
        this._viewCacheMap = new Map();
    }

    /**
     * 场景释放
     */
    public release(): void {
        this._viewCacheMap.forEach((value: UIViewCache, key: string, map: Map<string, UIViewCache>) => {
            value.release();
        });
        super.release();
    }

}