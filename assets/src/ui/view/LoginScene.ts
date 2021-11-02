/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-11-02 17:52:59
 * FilePath     : /client/assets/src/ui/view/LoginScene.ts
 * Description  : 登陆场景
 */

import BaseScene from "../../core/base/BaseScene";
import GameData from "../../data/GameData";
import HallController from "../../controller/HallController";
import * as HttpInterface from "../../core/interface/HttpInterface";
import * as HttpParamInterface from "../../interface/HttpParamInterface";
import * as NetworkInterface from "../../core/interface/NetworkInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "scene/LoginScene";

    @property(cc.Toggle)
    private togAgreement: cc.Toggle = null;

    onLoad() {

    }

    start() {

    }

    /**
     * 点击手机登录
     */
    private onClickLoginPhone(): void {
        // G.UIMgr.openView();
    }

    /**
     * 点击游客登录
     */
    private async onClickLoginGuest(): Promise<void> {
        let hallController: HallController = G.ControllerMgr.get(HallController);
        await hallController.loginRequest({ type: "visitor", user_id: "", game: "shooter", });
        await hallController.getWebSocketRequest({ token: G.DataMgr.get(GameData).token, });
        hallController.connect();
    }

    /**
     * 点击用户协议
     */
    private onClickAgreement(): void {

    }

    // update (dt) {}
}
