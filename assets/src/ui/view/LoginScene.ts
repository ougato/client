/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-10-27 23:36:19
 * FilePath     : /client/assets/src/ui/view/LoginScene.ts
 * Description  : 
 */

import BaseScene from "../../core/base/BaseScene";
import HallScene from "./HallScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/LoginScene";

    onLoad () {

    }

    start() {
        
    }

    /**
     * 点击游客登录
     */
    private onClickLoginGuest(): void {
        
    }

    // update (dt) {}
}
