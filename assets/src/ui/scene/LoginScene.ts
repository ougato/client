/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2024-01-04 11:58:01
 * FilePath     : /client/assets/src/ui/scene/LoginScene.ts
 * Description  : 登陆场景
 */

import BaseScene from "../../core/base/BaseScene";
import GameData from "../../data/GameData";
import HallController from "../../controller/HallController";
import DeviceData from "../../data/DeviceData";
import UserData from "../../data/UserData";
import { RecordDefine } from "../../core/define/RecordDefine";

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
    private clickLoginPhone(): void {
        G.UIMgr.openDialog({
            title: "标题",
            content: "弹窗内容",
            isShowClose: false,
        })
    }

    /**
     * 点击游客登录
     */
    private async clickLoginGuest(): Promise<void> {
        // let hallController: HallController = G.ControllerMgr.get(HallController);
        // await hallController.loginRequest({ type: "visitor", user_id: G.DataMgr.get(UserData).getLastLoginUid() + "", game: "shooter", }, { uuid: G.DataMgr.get(DeviceData).uuid });
        // await hallController.getWebSocketRequest({ token: G.DataMgr.get(GameData).token, });
        // hallController.connect();

        G.RecordMgr.stop(RecordDefine.RecordType.VIDEO);
    }

    /**
     * 点击用户协议
     */
    private onClickAgreement(): void {

    }

    protected onClick<T>(ev: cc.Event.EventTouch, data?: T): void {
        super.onClick(ev, data);

        switch (ev.target.name) {
            case "btnPhone":
                this.clickLoginPhone();
                break;
            case "btnQuick":
                this.clickLoginGuest();
                break;
        }
    }

    // update (dt) {}
}
