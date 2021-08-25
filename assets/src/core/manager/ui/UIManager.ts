/*
 * Author       : ougato
 * Date         : 2021-07-07 00:36:55
 * LastEditors  : ougato
 * LastEditTime : 2021-07-11 17:04:12
 * FilePath     : /client/assets/src/core/manager/ui/UIManager.ts
 * Description  : 界面管理器、所有的视图和场景、都由 UIManager 统一管理、包括打开视图|关闭视图|切换场景等等
 */

import BaseManager from "../../base/BaseManager";
import * as UIInterface from "../../interface/UIInterface";
import * as BundleDefine from "../../define/BundleDefine";
import * as UIDefine from "../../define/UIDefine";
import BaseScene from "../../base/BaseScene";

export default class UIManager extends BaseManager {

    private static s_instance: UIManager = null;

    // 当前场景 单场景设计，所有场景都是以 Prefab 代替
    private _currScene: BaseScene = null;

    public static getInstance(): UIManager {
        if (this.s_instance === null) {
            this.s_instance = new UIManager();
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
     * 打开视图
     * @param param {UIInterface.ViewParam} 视图参数
     * @param data {...any[]} 数据
     */
    public openView(param: UIInterface.ViewParam, ...data: any[]): void {
        if (param.bundleName === null || param.bundleName === undefined) {
            param.bundleName = BundleDefine.Name.RESOURCES;
        }

        if (param.style === null || param.style === undefined) {
            param.style = UIDefine.Style.DEFAULT;
        }

        if (param.layer === null || param.layer === undefined) {
            param.layer = UIDefine.Layer.VIEW;
        }

    }

    /**
     * 打开场景
     * 由于整个游戏设计只有一个 fire 场景，其他场景概念都使用 prefab 来代替
     * 目的是更好的控制资源
     * @param param {UIInterface.SceneParam} 场景参数
     * @param data {...any[]} 数据
     */
    public openScene(param: UIInterface.SceneParam, ...data: any[]): void {
        
    }

    /**
     * 关闭除了当前场景以外的其他的场景
     */
    public closeExceptScene(): void {

    }

    /**
     * 关闭所有场景
     */
    public closeAllScene(): void {

    }

}