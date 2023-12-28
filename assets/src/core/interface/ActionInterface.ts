/*
 * Author       : ougato
 * Date         : 2023-12-28 14:21:05
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 14:46:18
 * FilePath     : /client/assets/src/core/interface/ActionInterface.ts
 * Description  : 用户行为接口
 */

import { ActionDefine } from "../define/ActionDefine"

export namespace ActionInterface {

    // 记录数据
    export interface RecordData<T> {
        // 时间戳
        timestamp?: number,
        // 用户 ID
        uid?: number,
        // 行为类型
        action_type: ActionDefine.Type,
        // 行为数据
        action_data: T,
    }

}