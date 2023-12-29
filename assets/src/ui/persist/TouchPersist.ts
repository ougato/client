/*
 * Author       : ougato
 * Date         : 2023-12-29 11:20:07
 * LastEditors  : ougato
 * LastEditTime : 2023-12-29 16:52:05
 * FilePath     : /client/assets/src/ui/persist/TouchPersist.ts
 * Description  : 触摸监听
 */

import BasePersist from "../../core/base/BasePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchPersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/TouchPersist";

    protected onLoad(): void {
        super.onLoad();

    }

    protected register(): void {
        super.register();

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    protected onTouchStart(ev: cc.Event.EventTouch): void {
        let point: cc.Vec2 = ev.getLocation();
        G.ActionMgr.touchStart({
            x: point.x,
            y: point.y,
        });
    }

    protected onTouchMove(ev: cc.Event.EventTouch): void {
        let point: cc.Vec2 = ev.getLocation();
        G.ActionMgr.touchMove({
            x: point.x,
            y: point.y,
        });
    }

    protected onTouchEnd(ev: cc.Event.EventTouch): void {
        let point: cc.Vec2 = ev.getLocation();
        G.ActionMgr.touchEnd({
            x: point.x,
            y: point.y,
        });
    }

    protected onTouchCancel(ev: cc.Event.EventTouch): void {
        let point: cc.Vec2 = ev.getLocation();
        G.ActionMgr.touchCancel({
            x: point.x,
            y: point.y,
        });
    }

}