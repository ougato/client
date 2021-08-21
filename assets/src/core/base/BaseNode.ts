/*
 * Author       : ougato
 * Date         : 2021-07-07 00:22:32
 * LastEditors  : ougato
 * LastEditTime : 2021-07-09 00:14:55
 * FilePath     : /client/assets/src/core/base/BaseNode.ts
 * Description  : 节点基类
 */

import BaseUI from "./BaseUI";

export default class BaseNode extends BaseUI {

    // 是否加载完成
    public isLoaded: boolean = false;

    protected onLoad(): void {
        super.onLoad();

    }

}