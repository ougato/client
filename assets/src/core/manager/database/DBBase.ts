/*
 * Author       : ougato
 * Date         : 2023-12-26 15:27:23
 * LastEditors  : ougato
 * LastEditTime : 2024-01-04 11:49:42
 * FilePath     : /client/assets/src/core/manager/database/DBBase.ts
 * Description  : 数据库基类
 */

import { DBDefine } from "../../define/DBDefine";
import DBAbstract from "./DBAbstract";

export default class DBBase extends DBAbstract {

    // 状态
    public state: DBDefine.State = null;

    constructor() {
        super();

    }

    public async init(dbName: string, dbVersion?: number): Promise<boolean> {
        return new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void, reject: (reason?: any) => void) => {
            resolve(false);
        })
    }

    public insert(table: DBDefine.Table, data: { [key: string]: any; }): void {

    }

    public delele(): void {

    }

    public update(): void {

    }

    public select(table: DBDefine.Table, key: string): void {

    }

    public destroy(): void {

    }

}