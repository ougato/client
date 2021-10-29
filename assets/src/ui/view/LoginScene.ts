/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 17:09:29
 * FilePath     : /client/assets/src/ui/view/LoginScene.ts
 * Description  : 登陆场景
 */

import BaseScene from "../../core/base/BaseScene";
import HttpRequest from "../../core/http/HttpRequest";
import * as URLConfig from "../../config/URLConfig";
import * as WebAPIConfig from "../../config/WebAPIConfig";
import * as WebParamInterface from "../../interface/WebParamInterface";
import * as HttpInterface from "../../core/interface/HttpInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/LoginScene";

    onLoad() {

    }

    start() {

    }

    /**
     * 点击游客登录
     */
    private async onClickLoginGuest(): Promise<void> {

    }

    // update (dt) {}
}
