/*
 * @Author       : ougato
 * @Date         : 2020-08-24 09:33:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-15 00:17:17
 * @FilePath     : \client242\assets\src\ui\view\persist\LockTouchView.ts
 * @Description  : 屏幕短暂时间不能点击屏幕内容，当打开此节点时，最顶层遮挡了所有触摸事件
 */

import UIComponent from "../../UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LockTouchNode extends UIComponent implements PersistInterface {

    protected onLoad(): void {

    }

    protected start(): void {

    }

    /**
     * 打开禁止点击界面
     */
    public open(): void {
        this.node.active = true;
    }

    /**
     * 关闭禁止点击界面
     */
    public close(): void {
        this.node.active = false;
    }

}