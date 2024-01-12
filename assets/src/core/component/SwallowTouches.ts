/*
 * Author       : ougato
 * Date         : 2024-01-12 19:34:13
 * LastEditors  : ougato
 * LastEditTime : 2024-01-12 19:36:25
 * FilePath     : /client/assets/src/core/component/SwallowTouches.ts
 * Description  : 允许点击穿透（按钮无效）
 */

import { NodeInterface } from "../../interface/NodeInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SwallowTouches extends cc.Component {

    start() {
        let node: NodeInterface.NodeExtend = this.node as NodeInterface.NodeExtend;
        if (node._touchListener) {
            node._touchListener.setSwallowTouches(false);
        }
    }

}
