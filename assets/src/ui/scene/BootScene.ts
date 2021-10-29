/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 18:34:52
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import LoginScene from "../view/LoginScene";
import * as URLConfig from "../../config/URLConfig";
import * as WebAPIConfig from "../../config/WebAPIConfig";
import * as HttpInterface from "../../core/interface/HttpInterface";
import HttpRequest from "../../core/http/HttpRequest";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends BaseScene {

    protected onLoad(): void {
        super.onLoad();

    }

    protected start(): void {
        super.start();

        this.launch();
    }

    private async asyncURL(): Promise<void> {
        let url: string = URLConfig.WEB_API_URL + WebAPIConfig.GET_DYNAMIC_URL;
        let responseInfo: HttpInterface.ResponseInfo = await HttpRequest.get(url);
        if (responseInfo.state) {

        }
    }

    /**
     * 游戏启动
     */
    private async launch(): Promise<void> {
        await G.UIMgr.asyncInit();
        await this.asyncURL();

        G.UIMgr.openScene({
            sceneClass: LoginScene,
        });
    }

}