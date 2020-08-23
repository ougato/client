/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:11:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-17 10:47:54
 * @FilePath     : \client\assets\src\core\manager\animation\AnimationManager.ts
 * @Description  : 动画管理器，用于播放（帧、骨骼、龙骨、补间）动画
 */

import { Manager } from "../Manager";

export class AnimationManager extends Manager implements IManager {

    private static g_instance: AnimationManager = null;

    public static getInstance(): AnimationManager {
        if (this.g_instance === null) {
            this.g_instance = new AnimationManager();
        }
        return this.g_instance;
    }

    public static destroy(): void {
        if (this.g_instance !== null) {
            this.g_instance.destroy();
        }
        this.g_instance = null;
    }

    constructor() {
        super();

    }

    /**
     * 销毁
     */
    public destroy(): void {

    }

}