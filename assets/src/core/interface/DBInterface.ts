/*
 * Author       : ougato
 * Date         : 2023-12-26 16:34:12
 * LastEditors  : ougato
 * LastEditTime : 2023-12-29 14:12:29
 * FilePath     : /client/assets/src/core/interface/DBInterface.ts
 * Description  : 数据接口
 */

import { ActionDefine } from "../define/ActionDefine";

export namespace DBInterface {

    export interface Index {
        name: string,
        keyPath: string | string[],
        options?: IDBIndexParameters,
    }

    export interface Table {
        name: string,
        options?: IDBObjectStoreParameters,
        indexList?: Index[],
    }

    // 用户行为数据
    export interface ActionData<T> {
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