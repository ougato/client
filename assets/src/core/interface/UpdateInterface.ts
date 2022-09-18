/*
 * Author       : ougato
 * Date         : 2021-11-19 15:28:43
 * LastEditors  : ougato
 * LastEditTime : 2021-11-19 15:28:44
 * FilePath     : /client/assets/src/core/interface/UpdateInterface.ts
 * Description  : 热更新接口
 */

import { UpdateDefine } from "../define/UpdateDefine";


export namespace UpdateInterface {
    export interface CheckResult {
        error?: UpdateDefine.ErrorState,
        state?: UpdateDefine.CheckState,
        downloadBytes?: number,
    }

    export interface UpdateResult {
        error?: UpdateDefine.ErrorState,
        state?: UpdateDefine.UpdateState,
    }

}