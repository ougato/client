/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-11-04 14:09:29
 * FilePath     : /client/assets/src/core/manager/ui/UIBase.ts
 * Description  : 场景缓存
 */

import BaseComponent from "../../base/BaseComponent";
import ResCache from "../res/ResCache";
import * as UIInterface from "../../interface/UIInterface";
import UIUtils from "../../utils/UIUtils";

export default class UIBase {

    // 类名
    public className: string = null;
    // 根节点
    public node: cc.Node = null;
    // 脚本
    public script: BaseComponent = null;
    // 资源缓存信息
    public resCache: ResCache = null;

    constructor() {

    }

    /**
     * 挂载根节点脚本组件
     */
    public setScript<T extends BaseComponent>(node: cc.Node, uiClass: UIInterface.UIClass<T>): BaseComponent | null {
        this.script = UIUtils.addScript(node, uiClass);
        return this.script;
    }

    /**
     * 释放资源
     */
    public release(): void {
        this.className = null;
        this.node.destroy();
        this.node = null;
        this.script = null;
        this.resCache = null;
    }

}