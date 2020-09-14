/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-15 02:36:08
 * @FilePath     : \client242\assets\src\ui\scene\AccountScene.ts
 * @Description  : 
 */
import UIComponent from "../UIComponent";
import ViewDefine from "../../define/ViewDefine";
import ViewStyleDefine from "../../define/ViewStyleDefine";

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
        G.UIMgr.openView(ViewDefine.Test1);
    }

}