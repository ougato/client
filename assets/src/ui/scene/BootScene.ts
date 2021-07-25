/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 23:57:44
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import * as BundleDefine from "../../core/define/BundleDefine";
import * as LangDefine from "../../core/define/LangDefine";

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
        // G.LangMgr.load(BundleDefine.Name.RESOURCES);
        cc.director.loadScene("Lobby");
        setTimeout(()=>{
            cc.director.loadScene("Mario");

        }, 800)
    }

}