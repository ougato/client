/*
 * Author       : ougato
 * Date         : 2023-12-26 10:53:43
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 15:13:00
 * FilePath     : /client/assets/src/core/manager/database/DBManager.ts
 * Description  : 数据库管理器
 */

import { DBConfig } from "../../../config/DBConfig";
import BaseManager from "../../base/BaseManager";
import { DBDefine } from "../../define/DBDefine";
import DBAbstract from "./DBAbstract";
import DBIndexed from "./DBIndexed";

export default class DBManager extends BaseManager {

    private static s_instance: DBManager = null;

    // 数据库对象
    protected _db: DBAbstract = null;

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

        this.init();
    }

    protected destroy(): void {

    }

    public init(): void {
        if (cc.sys.isBrowser) {
            this._db = new DBIndexed();
        } else if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            } else {

            }
        }

        this._db.init(DBConfig.NAME, DBConfig.VERSION);
    }

    public insert(table: DBDefine.Table, data: { [key: string]: any }) {
        this._db.insert(table, data);
    }

}