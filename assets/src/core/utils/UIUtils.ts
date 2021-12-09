/*
 * Author       : ougato
 * Date         : 2021-11-04 14:05:26
 * LastEditors  : ougato
 * LastEditTime : 2021-11-04 14:06:46
 * FilePath     : /client/assets/src/core/utils/UIUtils.ts
 * Description  : 
 */

import BaseComponent from "../base/BaseComponent";
import * as UIInterface from "../interface/UIInterface";

export default class UIUtils {
    
    /**
     * 挂载根节点脚本组件
     */
     public static addScript<T extends BaseComponent>(node: cc.Node, uiClass: UIInterface.UIClass<T>): BaseComponent | null {
        let script: BaseComponent = null;

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
            if (!script) {
                G.LogMgr.warn(`挂载脚本失败 ${cc.js.getClassName(uiClass)}`);
                script = null;
            }
        }

        return script;
    }

}