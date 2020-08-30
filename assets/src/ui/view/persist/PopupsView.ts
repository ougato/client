/*
 * @Author       : ougato
 * @Date         : 2020-08-28 11:38:37
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 16:46:22
 * @FilePath     : \client242\assets\src\ui\view\persist\PopupsView.ts
 * @Description  : 通用弹窗
 */

import UIComponent from "../UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupsView extends UIComponent {

    @property({ type: cc.Label, tooltip: "标题" })
    labTitle: cc.Label = null;

    @property({ type: cc.Label, tooltip: "内容" })
    labContent: cc.Label = null;

    @property({ type: cc.Button, tooltip: "取消" })
    btnCancel: cc.Label = null;

    @property({ type: cc.Button, tooltip: "确定" })
    btnConfirm: cc.Label = null;

    // 确定回调
    private m_confirmCallback: Function = null;
    // 取消回调
    private m_cancelCallback: Function = null;

    protected onLoad(): void {
        this.initData();
        this.initView();
    }

    protected start(): void {

    }

    private initData(): void {
        this.m_confirmCallback = null;
        this.m_cancelCallback = null;
    }

    private initView(): void {
        this.labTitle.string = "";
        this.labContent.string = "";
        this.btnCancel.node.active = false;
        this.btnConfirm.node.active = false;
    }

    /**
     * 设置内容 弹窗高度动态随着文字长度改变
     * @param data {string} 内容
     */
    private setContent(data: string): void {
        let content: string = "";
        if (typeof (data) === "string") {
            content = data;
        }
        this.labContent.string = content;

        // TODO: 改变文字动态变化弹框高度
    }

    /**
     * 设置标题
     * @param data 
     */
    private setTitle(data?: string): void {
        let title: string = "";
        if (typeof (data) === "string") {
            title = data;
        }
        this.labTitle.string = title;
    }

    private setButton(confirmCallback: Function, cancelCallback?: Function): void {
        if (confirmCallback) {
            this.m_confirmCallback = confirmCallback;
        }
        if (cancelCallback) {
            this.m_cancelCallback = cancelCallback;
            // 分布排列（取消在左，确定在右）
            let parent: cc.Node = this.btnCancel.node.parent;
            let intervalWidth: number = (parent.width - this.btnCancel.node.width - this.btnConfirm.node.width) / 3;
            let cancelX: number = ((parent.width / 2) * -1) + intervalWidth + (this.btnCancel.node.width / 2);
            let confirmX: number = cancelX + (this.btnCancel.node.width / 2) + intervalWidth + (this.btnConfirm.node.width / 2);
            this.btnCancel.node.x = cancelX;
            this.btnConfirm.node.x = confirmX;
            this.btnCancel.node.active = true;
        } else {
            // 确定按钮居中
            this.btnConfirm.node.x = 0;
            this.btnCancel.node.active = false;
        }

        this.btnConfirm.node.active = true;
    }

    public close(): void {
        if(this.node.active) {
            this.initData();
            this.initView();
            this.node.active = false;
        }
    }

    /**
     * 绑定点击取消按钮回调
     */
    private onClickCancel(): void {
        if (this.m_cancelCallback) {
            this.m_cancelCallback();
        }
        this.close();
    }

    /**
     * 绑定点击确定按钮回调
     */
    private onClickConfirm(): void {
        if (this.m_confirmCallback) {
            this.m_confirmCallback();
        }
        this.close();
    }

    /**
     * 打开弹窗视图
     * @param content {string} 内容
     * @param title {string} 标题
     * @param confirmCallback {Function} 确定回调方法
     * @param cancelCallback {Function} 取消回调方法
     */
    public open(content: string, title?: string, confirmCallback?: Function, cancelCallback?: Function): void {
        this.setContent(content);
        this.setTitle(title);
        this.setButton(confirmCallback, cancelCallback);
        this.node.active = true;
    }

}