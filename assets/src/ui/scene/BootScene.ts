/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-08-10 00:10:07
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";
import * as BundleDefine from "../../core/define/BundleDefine";
import * as LangDefine from "../../core/define/LangDefine";
import ResCache from "../../core/manager/res/ResCache";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends BaseScene {

    @property(cc.Node)
    private s9: cc.Node = null;

    private pfb: cc.Node = null;


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
        this.load({
            base: "prefab/NewNode",
            assetType: cc.Prefab,
            completeCallback: (resCache: ResCache) => {
                let asset: cc.Prefab = resCache.asset as cc.Prefab;
                let pfb: cc.Node = cc.instantiate(asset);
                pfb.parent = this.node;

                this.pfb = pfb;

                let a = cc.loader.getDependsRecursively(resCache.asset as cc.Asset);
                console.log(a);

                console.log("ddddddddddddd");
                console.log(this.s9.uuid);
            }
        })

        setTimeout(() => {
            this.pfb.destroy();
        }, 5000);

    }

}