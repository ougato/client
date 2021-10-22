/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * LastEditors  : ougato
 * LastEditTime : 2021-10-22 01:26:32
 * FilePath     : /client/assets/src/ui/persist/WaitingPersist.ts
 * @Description  : 等待常驻（菊花转）
 */

import BasePersist from "../../core/base/BasePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WaitingPersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/WaitingPersist";

    protected onLoad(): void {
        super.onLoad();

    }

}