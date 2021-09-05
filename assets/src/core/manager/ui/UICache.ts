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