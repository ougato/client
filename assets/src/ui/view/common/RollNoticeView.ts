/*
 * @Author       : ougato
 * @Date         : 2020-08-31 22:42:14
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 23:24:45
 * @FilePath     : \client242\assets\src\ui\view\notice\RollNoticeView.ts
 * @Description  : 跑马灯滚动通知
 */

import UIComponent from "../../UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RollNoticeView extends UIComponent {

    public data: any = null;

    protected onLoad(): void {
        this.initData();
        this.initView();
    }

    protected start(): void {

    }

    /**
     * 初始化数据
     */
    private initData(): void {

    }

    /**
     * 初始化界面
     */
    private initView(): void {

    }

}