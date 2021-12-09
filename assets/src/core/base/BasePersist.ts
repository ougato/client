/*
 * Author       : ougato
 * Date         : 2021-07-07 00:22:32
 * LastEditors  : ougato
 * LastEditTime : 2021-12-03 10:44:00
 * FilePath     : /client/assets/src/core/base/BasePersist.ts
 * Description  : 常驻基类
 */

import BaseComponent from "./BaseComponent";

export default class BasePersist extends BaseComponent {

    // 是否加载完成
    public isLoaded: boolean = false;

    protected onLoad(): void {
        super.onLoad();

    }

    /**
     * 重写显示
     */
    public show(): void {
        if (this.node && cc.isValid(this.node) && !this.node.active) {
            this.node.active = true;
        }
    }

    /**
     * 重写隐藏
     */
    public hide(): void {
        if (this.node && cc.isValid(this.node) && this.node.active) {
            this.node.active = false;
        }
    }

}