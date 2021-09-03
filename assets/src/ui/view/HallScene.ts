import BaseScene from "../../core/base/BaseScene";
import BaseView from "../../core/base/BaseView";
import ResCache from "../../core/manager/res/ResCache";
import * as UIInterface from "../../core/interface/UIInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallScene extends BaseScene {

    @property(cc.Sprite)
    private s1: cc.Sprite = null;

    @property(cc.Sprite)
    private s2: cc.Sprite = null;

    @property(cc.Sprite)
    private s3: cc.Sprite = null;

    // 预制路径
    public static prefabPath: string = "scene/HallScene";

    // onLoad () {}

    start () {
        
        // this.load({
        //     base: "texture/IMG_9456",
        //     assetType: cc.SpriteFrame,
        //     completeCallback: (resCache: ResCache) => {
        //         this.s1.spriteFrame = resCache.asset as cc.SpriteFrame;
        //     }
        // })

        // this.load({
        //     base: "texture/IMG_9456",
        //     assetType: cc.SpriteFrame,
        //     completeCallback: (resCache: ResCache) => {
        //         this.s2.spriteFrame = resCache.asset as cc.SpriteFrame;
        //     }
        // })

        // this.load({
        //     base: "texture/IMG_9456",
        //     assetType: cc.SpriteFrame,
        //     completeCallback: (resCache: ResCache) => {
        //         this.s3.spriteFrame = resCache.asset as cc.SpriteFrame;
        //     }
        // })
    }

    // update (dt) {}
}
