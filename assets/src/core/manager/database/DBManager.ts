/*
 * Author       : ougato
 * Date         : 2023-12-26 10:53:43
 * LastEditors  : ougato
 * LastEditTime : 2024-01-09 00:27:22
 * FilePath     : /client/assets/src/core/manager/database/DBManager.ts
 * Description  : 数据库管理器
 */

import { DBConfig } from "../../../config/DBConfig";
import BaseManager from "../../base/BaseManager";
import { DBDefine } from "../../define/DBDefine";
import DBBase from "./DBBase";
import DBIndexed from "./DBIndexed";
import DBSQLite from "./DBSQLite";

export default class DBManager extends BaseManager {

    private static s_instance: DBManager = null;

    // 数据库对象
    protected _db: DBBase = null;

    public static getInstance(): DBManager {
        if (this.s_instance === null) {
            this.s_instance = new DBManager();
        }

        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    constructor() {
        super();

    }

    protected destroy(): void {

    }

    public async init(): Promise<boolean> {
        if (cc.sys.isBrowser) {
            this._db = new DBIndexed();
        } else if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {
                this._db = new DBSQLite();
            } else if (cc.sys.os === cc.sys.OS_IOS) {
                this._db = new DBSQLite();
            }
        }

        if (!this._db) {
            G.LogMgr.warn(`设备环境不支持数据库`);
            return false;
        }

        return this._db.init(DBConfig.NAME, DBConfig.VERSION);
    }

    public insert(table: DBDefine.Table, data: { [key: string]: any }): void {
        if (this._db.state !== DBDefine.State.OPENED) {
            G.LogMgr.warn(`当前数据库状态 [${this._db.state}] 无法许插入数据`)
            return;
        }
        this._db.insert(table, data);
    }

    public select(table: DBDefine.Table, key?: string): void {
        this._db.select(table, key);
    }

}