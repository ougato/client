/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * LastEditors  : ougato
 * LastEditTime : 2021-10-22 01:52:20
 * FilePath     : /client/assets/src/ui/persist/DialogPersist.ts
 * @Description  : 对话框（按钮自定义文字）
 */

import BasePersist from "../../core/base/BasePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DialogPersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/DialogPersist";

    protected onLoad(): void {
        super.onLoad();

    }

}