import BaseView from "../../core/base/BaseView";
import ResCache from "../../core/manager/res/ResCache";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewNode extends BaseView {

    @property(cc.Sprite)
    private s1: cc.Sprite = null;

    @property(cc.Sprite)
    private s2: cc.Sprite = null;

    @property(cc.Sprite)
    private s3: cc.Sprite = null;

    // onLoad () {}

    start () {
        
        this.load({
            base: "texture/IMG_9456",
            assetType: cc.SpriteFrame,
            completeCallback: (resCache: ResCache) => {
                this.s1.spriteFrame = resCache.asset as cc.SpriteFrame;
            }
        })

        this.load({
            base: "texture/IMG_9456",
            assetType: cc.SpriteFrame,
            completeCallback: (resCache: ResCache) => {
                this.s2.spriteFrame = resCache.asset as cc.SpriteFrame;
            }
        })

        this.load({
            base: "texture/IMG_9456",
            assetType: cc.SpriteFrame,
            completeCallback: (resCache: ResCache) => {
                this.s3.spriteFrame = resCache.asset as cc.SpriteFrame;
            }
        })
    }

    // update (dt) {}
}
