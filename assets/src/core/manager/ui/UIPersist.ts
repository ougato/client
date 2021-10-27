/*
 * Author       : ougato
 * Date         : 2021-08-26 01:00:54
 * LastEditors  : ougato
 * LastEditTime : 2021-10-22 01:02:35
 * FilePath     : /client/assets/src/core/manager/ui/UIPersist.ts
 * Description  : 常驻类
 */

import BasePersist from "../../base/BasePersist";
import UIBase from "./UIBase";

export default class UIPersist extends UIBase {

    // 脚本
    public script: BasePersist = null;

    constructor() {
        super()

    }

    /**
     * 视图释放
     */
    public release(): void {
        super.release();
    }

}