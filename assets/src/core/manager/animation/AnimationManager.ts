/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:11:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-25 23:53:53
 * @FilePath     : \client242\assets\src\core\manager\animation\AnimationManager.ts
 * @Description  : 动画管理器，用于播放（帧、骨骼、龙骨、补间）动画
 */

import Manager from "../Manager";

export default class AnimationManager extends Manager implements ManagerInterface {

    private static s_instance: AnimationManager = null;

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
     * 销毁
     */
    public destroy(): void {

    }

}