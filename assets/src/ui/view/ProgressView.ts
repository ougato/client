/*
 * @Author       : ougato
 * @Date         : 2020-08-24 09:33:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-26 02:36:41
 * @FilePath     : \client242\assets\src\ui\view\ProgressView.ts
 * @Description  : 加载进度视图
 */
import { BaseView } from "./BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProgressView extends BaseView {

    // 进度百分比
    private m_percent: number = null;

    protected onLoad(): void {
        this.initData();
        this.initView();
    }

    protected start(): void {

    }

    /**
     * 初始化数据
     */
    initData(): void {
        this.m_percent = 0;
    }

    /**
     * 初始化视图
     */
    private initView(): void {

    }

    public open(): void {

    }

    public close(): void {
        this.node.active = false;
    }

}