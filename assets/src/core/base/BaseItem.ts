/*
 * Author       : ougato
 * Date         : 2021-07-07 00:22:32
 * LastEditors  : ougato
 * LastEditTime : 2021-11-04 14:18:43
 * FilePath     : /client/assets/src/core/base/BaseNode.ts
 * Description  : 节点基类
 */

import BaseComponent from "./BaseComponent";

export default class BaseItem extends BaseComponent {

    // 是否加载完成
    public isLoaded: boolean = false;

    protected onLoad(): void {
        super.onLoad();

    }

}