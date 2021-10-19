/*
 * Author       : ougato
 * Date         : 2021-07-10 00:39:14
 * LastEditors  : ougato
 * LastEditTime : 2021-09-05 02:52:46
 * FilePath     : /client/assets/src/core/manager/ui/UIView.ts
 * Description  : 视图缓存
 */

import UIBase from "./UIBase";


export default class UIView extends UIBase {

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