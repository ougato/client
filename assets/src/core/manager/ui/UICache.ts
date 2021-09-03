/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-08-26 01:07:46
 * FilePath     : /client/assets/src/core/manager/ui/UICache.ts
 * Description  : 场景缓存
 */

import BaseUI from "../../base/BaseUI";
import * as BundleDefine from "../../define/BundleDefine";

export default class UICache {

    // 路径
    public path: string = null;
    // 类
    public class: BaseUI = null;
    // 类名
    public className: string = null;
    // 包名
    public bundleName: BundleDefine.Name = null;
    // 是否加载完成
    public isLoaded: boolean = null;

    constructor() {
        this.init();
    }

    private init(): void {
        this.isLoaded = false;
    }

}