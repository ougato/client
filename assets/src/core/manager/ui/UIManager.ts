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
import UIBundleNode from "./UIBundleNode";
import BaseView from "../../base/BaseView";

export default class UIManager extends BaseManager {

    private static s_instance: UIManager = null;

    // 包的根节点 Map
    private _bundleRootNodeMap: Map<BundleDefine.Name, UIBundleNode> = new Map();
    // 包的节点树视图 Map
    private _bundleViewMap: Map<BundleDefine.Name, BaseView> = new Map();

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
     * @param param {ViewParam} 视图参数
     * @param data {...any[]} 数据
     */
    public openView(param: UIInterface.ViewParam, ...data: any[]): void {

    }

    /**
     * 打开场景
     * 由于整个游戏设计只有一个 fire 场景，其他场景概念都使用 prefab 来代替
     * 目的是更好的控制资源加载和释放
     */
    public openScene(): void {

    }
}