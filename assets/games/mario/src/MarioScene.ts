/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 03:09:03
 * FilePath     : /client/assets/games/mario/src/MarioScene.ts
 * Description  : 
 */

import BaseScene from "../../../src/core/base/BaseScene";
import HallScene from "../../../src/ui/view/HallScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MarioScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/MarioScene";

    // onLoad () {}

    start() {

    }

    private onClickHall(): void {
        G.UIMgr.openScene({
            sceneClass: HallScene,
        })
    }

    // update (dt) {}
}
