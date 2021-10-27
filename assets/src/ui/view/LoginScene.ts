/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-09-08 00:31:17
 * FilePath     : /client/assets/src/ui/view/LoginScene.ts
 * Description  : 
 */

import MarioScene from "../../../games/mario/src/MarioScene";
import BaseScene from "../../core/base/BaseScene";
import * as BundleDefine from "../../core/define/BundleDefine";
import HallScene from "./HallScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/LoginScene";

    // onLoad () {
    // }

    start() {
        
    }

    private onClickMario(): void {
        G.UIMgr.openWaiting();
        // G.UIMgr.openScene({
        //     sceneClass: HallScene,
        //     bundleName: BundleDefine.Name.RESOURCES,
        // })
    }

    // update (dt) {}
}
