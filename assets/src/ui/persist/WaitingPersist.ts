/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * LastEditors  : ougato
 * LastEditTime : 2021-11-15 10:33:25
 * FilePath     : /client/assets/src/ui/persist/WaitingPersist.ts
 * @Description  : 等待常驻（菊花转）
 */

import BasePersist from "../../core/base/BasePersist";

// 播放转动一圈需要时间（单位：秒）
const PLAY_ROUND_TIME: number = 2;

const { ccclass, property } = cc._decorator;

@ccclass
export default class WaitingPersist extends BasePersist {

    @property(cc.Sprite)
    private imgWaiting: cc.Sprite = null;

    public static prefabPath: string = "prefab/persist/WaitingPersist";

    // 等待转圈动作
    private waitingTween: cc.Tween = null;

    protected onLoad(): void {
        super.onLoad();

    }

    protected onEnable(): void {
        this.playWaitingTurn();
    }

    protected onDisable(): void {
        this.stopWaitingTurn();
    }

    private playWaitingTurn(): void {
        this.waitingTween = cc.tween(this.imgWaiting.node)
            .by(PLAY_ROUND_TIME, { angle: -360 })
            .repeatForever()
            .start();
    }

    private stopWaitingTurn(): void {
        if (this.waitingTween !== null) {
            this.waitingTween.stop();
            this.waitingTween = null;
            this.imgWaiting.node.angle = 0;
        }
    }
}