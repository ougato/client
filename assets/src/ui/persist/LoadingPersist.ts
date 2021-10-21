/*
 * Author       : ougato
 * Date         : 2021-10-22 01:24:30
 * LastEditors  : ougato
 * LastEditTime : 2021-10-22 01:24:31
 * FilePath     : /client/assets/src/ui/persist/LoadingPersist.ts
 * Description  : 加载常驻（展示加载进度）
 */
 
import BasePersist from "../../core/base/BasePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingPersist extends BasePersist {

    protected onLoad(): void {
        super.onLoad();

    }

}