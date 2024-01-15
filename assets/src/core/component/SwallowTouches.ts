/*
 * Author       : ougato
 * Date         : 2024-01-12 19:34:13
 * LastEditors  : ougato
 * LastEditTime : 2024-01-15 12:00:05
 * FilePath     : /client/assets/src/core/component/SwallowTouches.ts
 * Description  : 允许点击穿透（按钮无效）
 */

import { NodeInterface } from "../../interface/NodeInterface";
import BaseComponent from "../base/BaseComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SwallowTouches extends BaseComponent {

    start() {
        let node: NodeInterface.NodeExtend = this.node as NodeInterface.NodeExtend;
        if (node._touchListener) {
            node._touchListener.setSwallowTouches(false);
        }
    }

}
