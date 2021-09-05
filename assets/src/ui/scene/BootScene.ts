/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 02:58:05
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import HallScene from "../view/HallScene";

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

    /**
     * 游戏启动
     */
    private async launch(): Promise<void> {
        G.UIMgr.openScene({
            sceneClass: HallScene,
        });
    }

}