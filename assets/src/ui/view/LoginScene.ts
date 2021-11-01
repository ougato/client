/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 15:51:17
 * FilePath     : /client/assets/src/ui/view/LoginScene.ts
 * Description  : 登陆场景
 */

import BaseScene from "../../core/base/BaseScene";
import * as HttpInterface from "../../core/interface/HttpInterface";
import HallScene from "./HallScene";
import GameData from "../../data/GameData";
import DeviceData from "../../data/DeviceData";
import HttpUtils from "../../utils/HttpUtils";
import HallController from "../../controller/HallController";

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
        await G.ControllerMgr.get(HallController).loginRequest({
            type: "visitor",
            user_id: "",
            game: "shooter",
        });

        await G.ControllerMgr.get(HallController).getWebSocketRequest({
            token: G.DataMgr.get(GameData).token,
        })
        
        
    }

    // update (dt) {}
}
