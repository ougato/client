/*
 * Author       : ougato
 * Date         : 2021-12-18 01:55:27
 * LastEditors  : ougato
 * LastEditTime : 2021-12-19 01:04:53
 * FilePath     : /client/assets/src/ui/item/ListViewItem.ts
 * Description  : 
 */

import BaseItem from "../../core/base/BaseItem";
import * as ComponentInterface from "../../core/interface/ComponentInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ListViewItem extends BaseItem implements ComponentInterface.ListViewItemClass {

    @property(cc.Label)
    private labContent: cc.Label = null;

    // 数据
    private _data: string = null;
    // 点击回调
    public clickCallback?: Function = null;

    protected onLoad(): void {
        super.onLoad();
    }

    protected initData(): void {
        this._data = null;
    }

    protected initUI(): void {
        this.labContent.string = "";
    }

    public onShow(data: string): void {
        this._data = data;
        this.labContent.string = data;
    }

    public reset(): void {
        this.initData();
        this.initUI();
    }

}