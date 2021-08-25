/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-08-26 01:07:46
 * FilePath     : /client/assets/src/core/manager/ui/UISceneCache.ts
 * Description  : 场景缓存
 */

import BaseScene from "../../base/BaseScene";

export default class UISceneCache {

    // 路径
    public path: string = null;
    // 场景类
    public class: BaseScene = null;
    // 是否加载完成
    public isLoaded: boolean = null;

    constructor() {
        this.init();
    }

    private init():void {
        this.isLoaded = false;
    }

}