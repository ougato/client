/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-12-09 11:50:36
 * FilePath     : /client/assets/src/ui/scene/HallScene.ts
 * Description  : 大厅场景
 */

import BaseScene from "../../core/base/BaseScene";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HallScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/HallScene";

    onLoad() {
        super.onLoad();

    }

    register() {
        super.register();
    }

    start() {

    }

    // update (dt) {}

}
