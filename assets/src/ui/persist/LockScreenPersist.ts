/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * LastEditors  : ougato
 * LastEditTime : 2021-10-22 01:23:28
 * FilePath     : /client/assets/src/ui/persist/LockScreenPersist.ts
 * @Description  : 锁屏常驻（用户触摸点击无效）
 */

import BasePersist from "../../core/base/BasePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LockScreenPersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/LockScreenPersist";

    protected onLoad(): void {
        super.onLoad();

    }

}