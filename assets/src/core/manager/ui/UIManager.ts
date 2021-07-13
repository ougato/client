/*
 * Author       : ougato
 * Date         : 2021-07-07 00:36:55
 * LastEditors  : ougato
 * LastEditTime : 2021-07-11 17:04:12
 * FilePath     : /client/assets/src/core/manager/ui/UIManager.ts
 * Description  : 界面管理器、所有的视图和场景、都由 UIManager 统一管理、包括打开视图|关闭视图|切换场景等等
 */

import BaseManager from "../../base/BaseManager";
import BaseView from "../../base/BaseView";
import { ViewParam } from "../../interface/UIInterface";

export default class UIManager extends BaseManager{
    
    private static s_instance: UIManager = null;

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
    public openView<T extends BaseView>(param: ViewParam, ...data: any[]): void {

    }
}