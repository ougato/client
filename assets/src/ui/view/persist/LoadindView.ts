/*
 * @Author       : ougato
 * @Date         : 2020-08-23 17:27:05
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 23:17:58
 * @FilePath     : \client242\assets\src\ui\view\persist\LoadingNode.ts
 * @Description  : 加载等待节点
 */

import UIComponent from "../../UIComponent";
import LoadingClip from "../animation/LoadingClip";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingNode extends UIComponent implements PersistInterface {

    @property({ type: cc.Label, tooltip: "文字提示" })
    private labTips: cc.Label = null;

    @property({ type: cc.Node, tooltip: "转动动画" })
    private loadingClip: cc.Node = null;

    private m_loadingScript: LoadingClip = null;

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
        this.m_loadingScript = this.loadingClip.getComponent("LoadingClip");
    }

    /**
     * 初始化视图
     */
    private initView(): void {
        this.labTips.string = "";
    }

    /**
     * 打开加载界面
     * @param content {string} 提示内容
     */
    public open(content?: string): void {
        this.m_loadingScript.play();
        if (content) {
            this.labTips.string = content;
        }
        this.node.active = true;
    }

    /**
     * 关闭加载界面
     */
    public close(): void {
        if (this.node.active) {
            this.node.active = false;
            this.initView();
            this.m_loadingScript.stop();
        }
    }

}