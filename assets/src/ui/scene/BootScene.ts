/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2024-01-16 16:38:38
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import InitializeScene from "./InitializeScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends BaseScene {

    protected onLoad(): void {
        super.onLoad();

    }

    protected start(): void {
        super.start();

        cc.sys.dump();

        this.launch();
    }

    /**
     * 游戏启动
     */
    private launch(): void {
        G.UIMgr.openScene({
            sceneClass: InitializeScene,
        });
    }

}