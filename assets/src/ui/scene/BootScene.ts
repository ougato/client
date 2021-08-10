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

    @property(cc.Sprite)
    private s1: cc.Sprite = null;

    @property(cc.Sprite)
    private s2: cc.Sprite = null;

    @property(cc.Sprite)
    private s3: cc.Sprite = null;

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

        G.ResMgr.load({
            base: "prefab/NewNode",
            assetType: cc.Prefab,
            completeCallback: (resCache: ResCache) => {
                let asset: cc.Prefab = resCache.asset as cc.Prefab;
                let pfb: cc.Node = cc.instantiate(asset);
                pfb.parent = this.node;
            }
        });

        G.ResMgr.load({
            base: "texture/IMG_9456",
            assetType: cc.SpriteFrame,
            completeCallback: (resCache: ResCache) => {
                this.s1.spriteFrame = resCache.asset as cc.SpriteFrame;
            }
        });

        G.ResMgr.load({
            base: "texture/IMG_9456",
            assetType: cc.SpriteFrame,
            completeCallback: (resCache: ResCache) => {
                this.s2.spriteFrame = resCache.asset as cc.SpriteFrame;
            }
        });

        setTimeout(() => {
            G.ResMgr.load({
                base: "texture/IMG_9456",
                assetType: cc.SpriteFrame,
                completeCallback: (resCache: ResCache) => {
                    this.s3.spriteFrame = resCache.asset as cc.SpriteFrame;
                    G.ResMgr.release(resCache.asset as cc.Asset, "texture/IMG_9456");
                }
            });
        }, 1000);

    }

}