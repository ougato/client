/*
 * Author       : ougato
 * Date         : 2021-09-04 23:39:20
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 02:43:43
 * FilePath     : /client/assets/src/ui/view/LoginScene.ts
 * Description  : 登陆场景
 */

import HttpController from "../../controller/HttpController";
import BaseScene from "../../core/base/BaseScene";
import * as HttpInterface from "../../core/interface/HttpInterface";
import * as HttpDefine from "../../core/define/HttpDefine";
import HallScene from "./HallScene";
import GameData from "../../data/GameData";
import DeviceData from "../../data/DeviceData";

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
        let responseInfo: HttpInterface.ResponseInfo = await G.ControllerMgr.get(HttpController).loginRequest({
            type: "visitor",
            user_id: "",
            game: "shooter",
        })

        if (responseInfo.state === HttpDefine.StateType.OK && responseInfo.body.code === 0) {

            let gameData: GameData = G.DataMgr.get(GameData);
            let deviceData: DeviceData = G.DataMgr.get(DeviceData);
            await G.ControllerMgr.get(HttpController).getWebSocketRequest({
                token: gameData.token,
                os: deviceData.os,
                clientVersion: gameData.version,
                channel: gameData.channel,
            })
        } else {
            // TODO: 处理登陆失败
        }
    }

    // update (dt) {}
}
