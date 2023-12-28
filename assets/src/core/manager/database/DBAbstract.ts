/*
 * Author       : ougato
 * Date         : 2023-12-26 16:55:37
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 13:07:02
 * FilePath     : /client/assets/src/core/manager/database/DBAbstract.ts
 * Description  : 数据库抽象类
 */

import { DBDefine } from "../../define/DBDefine";

export default abstract class DBAbstract {
    abstract init(dbName: string, dbVersion?: number): boolean;
    abstract insert(table: DBDefine.Table, data: { [key: string]: any }): void;
    abstract delele(): void;
    abstract update(): void;
    abstract select(): void;
}