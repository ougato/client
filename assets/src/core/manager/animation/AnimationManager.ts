/*
 * Author       : ougato
 * Date         : 2023-08-17 17:39:06
 * LastEditors  : ougato
 * LastEditTime : 2023-08-17 18:54:55
 * FilePath     : /client/assets/src/core/manager/animation/AnimationManager.ts
 * Description  : 动画管理器
 */

import BaseManager from "../../base/BaseManager";
import AnimationTween from "./AnimationTween";

export default class AnimationManager extends BaseManager {

    private static s_instance: AnimationManager = null;

    // Tween 动画 Map<ID, AnimationTween>
    private _tweenMap: Map<number, AnimationTween> = new Map();

    public static getInstance(): AnimationManager {
        if (this.s_instance === null) {
            this.s_instance = new AnimationManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    constructor() {
        super();

    }

    /**
     * 销毁 清理所有控制器
     */
    protected destroy(): void {

    }

    /**
     * 获取 AnimationTween 对象
     */
    public getTween(): AnimationTween {

    }

}