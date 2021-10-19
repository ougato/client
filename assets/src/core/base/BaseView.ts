/*
 * Author       : ougato
 * Date         : 2021-07-07 00:22:32
 * LastEditors  : ougato
 * LastEditTime : 2021-07-09 00:14:55
 * FilePath     : /client/assets/src/core/base/BaseView.ts
 * Description  : 视图基类
 */

import BaseComponent from "./BaseComponent";

export default class BaseView extends BaseComponent {

    // 是否加载完成
    public isLoaded: boolean = false;

    protected onLoad(): void {
        super.onLoad();
        
    }

}