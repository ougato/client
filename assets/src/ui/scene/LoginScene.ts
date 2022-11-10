/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2022-11-09 14:46:09
 * FilePath     : /client/assets/src/ui/scene/LoginScene.ts
 * Description  : 登陆场景
 */

import BaseScene from "../../core/base/BaseScene";
import GameData from "../../data/GameData";
import HallController from "../../controller/HallController";
import DeviceData from "../../data/DeviceData";
import UserData from "../../data/UserData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "prefab/scene/LoginScene";

    @property(cc.Toggle)
    private togAgreement: cc.Toggle = null;

    onLoad() {
        super.onLoad();
    }

    start() {

    }

    protected register(): void {

    }

    /**
     * 点击手机登录
     */
    private onClickLoginPhone(): void {
        G.UIMgr.openDialog({
            title: "标题",
            content: "弹窗内容",
            isShowClose: false,
        })
    }

    /**
     * 点击游客登录
     */
    private async onClickLoginGuest(): Promise<void> {
        let hallController: HallController = G.ControllerMgr.get(HallController);
        await hallController.loginRequest({ type: "visitor", user_id: G.DataMgr.get(UserData).getLastLoginUid() + "", game: "shooter", }, { uuid: G.DataMgr.get(DeviceData).uuid });
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
