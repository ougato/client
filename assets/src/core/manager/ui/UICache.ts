/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 02:53:29
 * FilePath     : /client/assets/src/core/manager/ui/UICache.ts
 * Description  : 场景缓存
 */

import BaseUI from "../../base/BaseUI";
import ResCache from "../res/ResCache";
import * as UIInterface from "../../interface/UIInterface";

export default class UICache {

    // 类名
    public className: string = null;
    // 根节点
    public node: cc.Node = null;
    // 脚本
    public script: BaseUI = null;
    // 资源缓存信息
    public resCache: ResCache = null;

    constructor() {

    }

    /**
     * 挂载根节点脚本组件
     */
    public addScript<T extends BaseUI>(node: cc.Node, uiClass: UIInterface.UIClass<T>): BaseUI | null {
        let script: BaseUI = null;

        if (!node) {
            G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}、节点为空`);
            return null;
        }

        if (!uiClass) {
            G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}、脚本类为空`);
            return null;
        }

        script = node.getComponent(uiClass);
        if (!script) {
            script = node.addComponent(uiClass);
            if (script) {
                this.script = script;
            } else {
                G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}`);
                script = null;
            }
        }

        return script;
    }


    /**
     * 释放资源
     */
    public release(): void {
        this.className = null;
        this.node.destroyAllChildren();
        this.node.removeFromParent();
        this.node = null;
        this.script = null;
        this.resCache.decCache();
        this.resCache = null;
    }

}