/*
 * @Author       : ougato
 * @Date         : 2020-08-24 09:33:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 16:46:14
 * @FilePath     : \client242\assets\src\ui\view\persist\LockScreenView.ts
 * @Description  : 屏幕短暂时间不能触摸屏幕内容时，使用锁定视图
 */

import UIComponent from "../UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadScreenView extends UIComponent {

    protected onLoad(): void {
        this.initView();

    }

    protected start(): void {

    }

    /**
     * 初始化视图
     */
    private initView():void {

    }

    /**
     * 打开锁定触摸视图
     */
    public open(): void {
        this.node.active = true;
    }

    /**
     * 关闭锁定触摸视图
     */
    public close(): void {
        this.node.active = false;
    }

}