/*
 * Author       : ougato
 * Date         : 2021-10-29 17:45:36
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 17:45:37
 * FilePath     : /client/assets/src/core/interface/DataInterface.ts
 * Description  : 数据接口
 */

import BaseData from "../base/BaseData";

export interface DataClass<T extends BaseData> {
    new(): T;
}