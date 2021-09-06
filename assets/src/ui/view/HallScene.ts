/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-09-07 00:38:55
 * FilePath     : /client/assets/src/ui/view/HallScene.ts
 * Description  : 
 */

import BaseScene from "../../core/base/BaseScene";
import * as BundleDefine from "../../core/define/BundleDefine";
import LoginScene from "./LoginScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/HallScene";

    // onLoad () {}

    start() {

    }

    private onClickMario(): void {
        G.UIMgr.openScene({
            sceneClass: LoginScene,
            bundleName: BundleDefine.Name.RESOURCES,
        })
    }

    // update (dt) {}
}
