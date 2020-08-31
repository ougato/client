import UIComponent from "../UIComponent";

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

}