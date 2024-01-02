/*
 * Author       : ougato
 * Date         : 2023-12-29 11:20:07
 * LastEditors  : ougato
 * LastEditTime : 2024-01-02 14:57:48
 * FilePath     : /client/assets/src/ui/persist/SimulatePersist.ts
 * Description  : 模拟用户操作
 */

import BasePersist from "../../core/base/BasePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimulatePersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/SimulatePersist";

    // 触摸数据
    // private _data: 

    protected onLoad(): void {
        super.onLoad();

    }

    protected register(): void {
        super.register();

    }

}