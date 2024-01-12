/*
 * Author       : ougato
 * Date         : 2023-12-29 11:20:07
 * LastEditors  : ougato
 * LastEditTime : 2024-01-12 20:47:38
 * FilePath     : /client/assets/src/ui/persist/TouchPersist.ts
 * Description  : 触摸监听
 */

import BasePersist from "../../core/base/BasePersist";

// 移动频率间隔（单位：毫秒）
const MOVE_INTERVAL_TIME: number = 10;

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchPersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/TouchPersist";
    // 上一次移动时间
    protected _prevTime: number = 0;

    @property(cc.Prefab)
    private pfbTouchParticle: cc.Prefab = null;

    protected onLoad(): void {
        super.onLoad();

    }

    protected initUI(): void {

    }

    protected register(): void {
        super.register();

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);

    }

    protected onTouchStart(ev: cc.Event.EventTouch): void {
        this.playOnceParticle(this.node.convertToNodeSpaceAR(ev.getLocation()));

        // let point: cc.Vec2 = ev.getLocation();
        // G.ActionMgr.touchStart({
        //     x: point.x,
        //     y: point.y,
        // });

    }

    protected onTouchMove(ev: cc.Event.EventTouch): void {
        let currTime: number = Date.now();
        if (currTime < this._prevTime + MOVE_INTERVAL_TIME) {
            return;
        }
        this._prevTime = currTime;

        this.playOnceParticle(this.node.convertToNodeSpaceAR(ev.getLocation()));

        // let point: cc.Vec2 = ev.getLocation();
        // G.ActionMgr.touchMove({
        //     x: point.x,
        //     y: point.y,
        // });
    }

    protected onTouchEnd(ev: cc.Event.EventTouch): void {
        // let point: cc.Vec2 = ev.getLocation();
        // G.ActionMgr.touchEnd({
        //     x: point.x,
        //     y: point.y,
        // });
    }

    protected onTouchCancel(ev: cc.Event.EventTouch): void {
        // let point: cc.Vec2 = ev.getLocation();
        // G.ActionMgr.touchCancel({
        //     x: point.x,
        //     y: point.y,
        // });
    }

    protected playOnceParticle(pos: cc.Vec2): void {
        G.LogMgr.log(pos);
        let nodTouchParticle = cc.instantiate(this.pfbTouchParticle);
        nodTouchParticle.setPosition(pos);
        nodTouchParticle.parent = this.node;
        // nodTouchParticle.getComponent(cc.ParticleSystem).resetSystem();

    }

}