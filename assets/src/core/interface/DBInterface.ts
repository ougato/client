/*
 * Author       : ougato
 * Date         : 2023-12-26 16:34:12
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 11:59:56
 * FilePath     : /client/assets/src/core/interface/DBInterface.ts
 * Description  : 数据接口
 */

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

}