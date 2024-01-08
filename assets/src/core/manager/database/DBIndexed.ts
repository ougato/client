/*
 * Author       : ougato
 * Date         : 2023-12-26 15:25:49
 * LastEditors  : ougato
 * LastEditTime : 2024-01-08 12:05:03
 * FilePath     : /client/assets/src/core/manager/database/DBIndexed.ts
 * Description  : Web 环境数据库
 */

import { DBConfig } from "../../../config/DBConfig";
import { DBDefine } from "../../define/DBDefine";
import { DBInterface } from "../../interface/DBInterface";
import { ConverUtils } from "../../utils/ConverUtils";
import UnitUtils from "../../utils/UnitUtils";
import DBBase from "./DBBase";

export default class DBIndexed extends DBBase {

    // 连接后可操作数据库的对象
    protected _db: IDBDatabase = null;
    // 连接前的数据库
    protected _indexedDB: IDBFactory = null;

    constructor() {
        super();

    }

    /**
     * 更新表
     * @param db {IDBDatabase} 数据库
     * @returns
     */
    protected upgradeTable(db: IDBDatabase): void {
        const oldTableNameList: string[] = ConverUtils.converEnumToArrayGetValue(db.objectStoreNames);

        for (let oldTableName of oldTableNameList) {
            let isNewTable: boolean = DBConfig.Struct.some((tableInfo: DBInterface.Table) => {
                return tableInfo.name === oldTableName;
            })

            if (!isNewTable) {
                db.deleteObjectStore(oldTableName);
            }
        }

        for (let tableInfo of DBConfig.Struct) {
            if (!db.objectStoreNames.contains(tableInfo.name)) {
                db.createObjectStore(tableInfo.name, tableInfo.options);
            }
        }
    }

    /**
     * 更新索引
     * @param target {IDBOpenDBRequest} 打开数据后的对象
     * @returns
     */
    protected upgradeIndex(target: IDBOpenDBRequest): void {
        for (let tableInfo of DBConfig.Struct) {
            let table: IDBObjectStore = target.transaction.objectStore(tableInfo.name);

            const oldIndexNameList: string[] = ConverUtils.converEnumToArrayGetValue(table.indexNames);
            for (let oldIndexName of oldIndexNameList) {
                let isNewIndex: boolean = tableInfo.indexList.some((indexInfo: DBInterface.Index) => {
                    return indexInfo.name === oldIndexName;
                })

                if (!isNewIndex) {
                    table.deleteIndex(oldIndexName);
                }
            }

            for (let indexInfo of tableInfo.indexList) {
                if (!table.indexNames.contains(indexInfo.name)) {
                    table.createIndex(indexInfo.name, indexInfo.keyPath, indexInfo.options);
                }
            }
        }
    }

    public async init(dbName: string, dbVersion?: number): Promise<boolean> {
        return new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void, reject: (reason?: any) => void) => {
            this._indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

            if (!this._indexedDB) {
                G.LogMgr.warn(`浏览器不支持 IndexedDB 数据库`);
                return resolve(false);
            }

            this.state = DBDefine.State.OPENING;

            let request: IDBOpenDBRequest = this._indexedDB.open(dbName, dbVersion);

            request.onsuccess = (ev: Event) => {
                this.state = DBDefine.State.OPENED;
                G.LogMgr.log(`打开 [${dbName}] 数据库成功`);

                this._db = request.result;

                this._db.onversionchange = function () {
                    this.close();
                    G.UIMgr.openDialog({
                        title: "错误",
                        content: "数据库过期，请重新加载",
                    })
                };

                resolve(true);
            }

            request.onerror = (ev: Event) => {
                this.state = null;

                G.LogMgr.warn(`打开 [${dbName}][${dbVersion}] 数据库失败：${request.error}`);
                resolve(false);
            };

            request.onupgradeneeded = (ev: IDBVersionChangeEvent) => {
                this.state = DBDefine.State.UPDATING;

                G.LogMgr.log(`正在更新 [${dbName}][${ev.oldVersion}->${ev.newVersion}] 数据库`);

                const target: IDBOpenDBRequest = ev.target as IDBOpenDBRequest;
                const db: IDBDatabase = target.result;
                this.upgradeTable(db);
                this.upgradeIndex(target);
            };

            request.onblocked = (ev: IDBVersionChangeEvent) => {
                this.state = DBDefine.State.BLOCK;
                G.LogMgr.log(`正在锁定 [${dbName}] 数据库`);

            }
        })
    }

    public insert(table: DBDefine.Table, data: { [key: string]: any; }): void {
        try {
            let request: IDBRequest<IDBValidKey> = this._db.transaction(table, "readwrite")
                .objectStore(table)
                .add(data);

            request.onsuccess = (ev: Event) => {

            }

            request.onerror = (ev: Event) => {
                G.LogMgr.warn(`插入数据失败：${request.error}`);
            }
        } catch (e) {
            G.LogMgr.warn(`插入数据报错：${e}`);
        }
    }

    public delele(): void {

    }

    public update(): void {

    }

    public select(table: DBDefine.Table, key?: string): void {
        try {
            let request: IDBRequest<IDBValidKey> = this._db.transaction(table, "readonly")
                .objectStore(table)
                .getAll();

            request.onsuccess = (ev: Event) => {
                G.LogMgr.log(UnitUtils.bytesToFileUnit(JSON.stringify(request.result).length));
            }

            request.onerror = (ev: Event) => {
                G.LogMgr.warn(`查询数据失败：${(ev.target as IDBRequest<IDBValidKey>).error}`);
            }
        } catch (e) {
            G.LogMgr.warn(`查询数据报错：${e}`);
        }
    }

    public destroy(): void {
        super.destroy();

    }

}