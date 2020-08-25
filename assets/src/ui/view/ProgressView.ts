/*
 * @Author       : ougato
 * @Date         : 2020-08-24 09:33:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-25 15:55:16
 * @FilePath     : \client242\assets\src\ui\view\ProgressView.ts
 * @Description  : 加载进度视图
 */
import { BaseView } from "./BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProgressView extends BaseView {

    protected onLoad(): void {
        this.initView();
    }

    protected start(): void {

    }

    /**
     * 初始化视图
     */
    private initView():void {
        this.node.active = false;
    }

}