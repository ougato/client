/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-12-13 10:34:49
 * FilePath     : /client/assets/games/mario/src/MarioScene.ts
 * Description  : 
 */

import BaseScene from "../../../src/core/base/BaseScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MarioScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/MarioScene";

    // onLoad () {}

    start() {

    }

    private onClickHall(): void {

    }

    // update (dt) {}
}
