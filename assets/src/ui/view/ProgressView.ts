/*
 * @Author       : ougato
 * @Date         : 2020-08-24 09:33:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-27 18:50:50
 * @FilePath     : \client242\assets\src\ui\view\ProgressView.ts
 * @Description  : 加载进度视图
 */
import { BaseView } from "./BaseView";
import Logger from "../../core/machine/Logger";

const { ccclass, property } = cc._decorator;

// 最小百分比
const MIN_PERCENT = 0;
// 最大百分比
const MAX_PERCENT = 100;
// 每帧增加百分比间隔
const PER_FRAME_INTERVAL_PERCENT = 1;

@ccclass
export default class ProgressView extends BaseView {

    @property({ type: cc.ProgressBar, tooltip: "加载资源进度条" })
    private pobLoad: cc.ProgressBar = null;

    // 当前进度百分比
    private m_currPercent: number = null;
    // 实时进度百分比
    private m_realTimePercent: number = null;

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
        this.m_currPercent = 0;
        this.m_realTimePercent = 0;
    }

    /**
     * 初始化视图
     */
    private initView(): void {
        this.pobLoad.progress = this.m_currPercent;
    }

    /**
     * 打开进度条视图（只做单纯显示，百分比增加需要调用 setPercent 方法）
     */
    public open(): void {
        this.node.active = true;
    }

    /**
     * 传入进度条的百分比（要求：0-100之间的任意小数和整数）
     * @param value {number} 百分比值
     */
    public setPercent(value: number): void {
        if (value < MIN_PERCENT) {
            value = MIN_PERCENT;
        } else if(value > MAX_PERCENT) {
            value = MAX_PERCENT;
        } else {
            this.m_realTimePercent = value;
        }
    }

    /**
     * 关闭进度条视图（不销毁）
     */
    public close(): void {
        this.initData();
        this.initView();
        this.node.active = false;
    }

    /**
     * 每帧检测是否需要移动百分比的显示（平滑移动）
     * @param {number} 距离上次被调用的间隔时间（单位：秒）
     */
    protected update(dt: number): void {
        if (this.m_currPercent < this.m_realTimePercent) {
            this.m_currPercent += PER_FRAME_INTERVAL_PERCENT;
            this.pobLoad.progress = this.m_currPercent / 100;
        }
    }

}