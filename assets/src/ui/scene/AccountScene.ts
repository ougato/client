/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-16 01:03:41
 * @FilePath     : \client242\assets\src\ui\scene\AccountScene.ts
 * @Description  : 
 */
import UIComponent from "../UIComponent";
import ViewDefine from "../../define/ViewDefine";
import ViewStyleDefine from "../../define/ViewStyleDefine";
import WxHttp from "../../core/manager/network/WxHttp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends UIComponent {

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
     * 初始化视图
     */
    private initView(): void {

    }

    /**
     * 点击释放
     */
    private onClickRelease():void {
        WxHttp.post();
        // G.UIMgr.openView(ViewDefine.Test1);
    }

}