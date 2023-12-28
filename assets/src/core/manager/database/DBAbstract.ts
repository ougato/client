/*
 * Author       : ougato
 * Date         : 2023-12-26 16:55:37
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 23:23:11
 * FilePath     : /client/assets/src/core/manager/database/DBAbstract.ts
 * Description  : 数据库抽象类
 */

import { DBDefine } from "../../define/DBDefine";

export default abstract class DBAbstract {
    abstract state: DBDefine.State;
    abstract init(dbName: string, dbVersion?: number): Promise<boolean>;
    abstract insert(table: DBDefine.Table, data: { [key: string]: any }): void;
    abstract delele(): void;
    abstract update(): void;
    abstract select(): void;
}