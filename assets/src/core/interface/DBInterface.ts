/*
 * Author       : ougato
 * Date         : 2023-12-26 16:34:12
 * LastEditors  : ougato
 * LastEditTime : 2024-01-09 00:33:39
 * FilePath     : /client/assets/src/core/interface/DBInterface.ts
 * Description  : 数据接口
 */

import { ActionDefine } from "../define/ActionDefine";
import { DBDefine } from "../define/DBDefine";

export namespace DBInterface {

    export interface Field {
        name: string,
        keyPath: string | string[],
        isIndex: boolean,
        type: DBDefine.FieldType,
        options?: IDBIndexParameters,
    }

    export interface Table {
        name: string,
        options?: IDBObjectStoreParameters,
        fieldList?: Field[],
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