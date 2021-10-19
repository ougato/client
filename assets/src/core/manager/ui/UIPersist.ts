/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 03:15:08
 * FilePath     : /client/assets/src/core/manager/ui/UIPersist.ts
 * Description  : 场景缓存
 */

import UIBase from "./UIBase";

export default class UIPersist extends UIBase {

    // 常驻 Map<常驻类名, 常驻对象>
    private _persistMap: Map<string, UIPersist> = null;

    constructor() {
        super()

        this._persistMap = new Map();
    }

    /**
     * 显示禁止触摸视图
     */
    public showLockScreen(): void {

    }

    /**
     * 隐藏禁止触摸视图
     */
    public hideLockScreen(): void {

    }

    /**
     * 显示加载进度视图
     */
    public showLoading(): void {

    }

    /**
     * 隐藏加载进度视图
     */
    public hideLoading(): void {

    }

    /**
     * 设置进度百分比
     * @param percent {string} 字符串保留小数点后相同位数
     */
    public setLoading(percent: string): void {

    }

    /**
     * 显示等待转圈视图
     */
    public showWaiting(): void {

    }

    /**
     * 隐藏等待转圈视图
     */
    public hideWaiting(): void {

    }

}