/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-08-26 01:07:46
 * FilePath     : /client/assets/src/core/manager/ui/UISceneCache.ts
 * Description  : 场景缓存
 */

import UICache from "./UICache";
import UIViewCache from "./UIViewCache";

export default class UISceneCache extends UICache {

    // 视图 Map
    private _viewCacheMap: Map<string, UIViewCache> = null;

    constructor() {
        super()
    }
    
}