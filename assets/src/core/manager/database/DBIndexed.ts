/*
 * Author       : ougato
 * Date         : 2023-12-26 15:25:49
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 21:09:42
 * FilePath     : /client/assets/src/core/manager/database/DBIndexed.ts
 * Description  : IndexedDB 用于 Web 环境使用
 */

import { DBConfig } from "../../../config/DBConfig";
import { DBDefine } from "../../define/DBDefine";
import { DBInterface } from "../../interface/DBInterface";
import { ConverUtils } from "../../utils/ConverUtils";
import DBBase from "./DBBase";

export default class DBIndexed extends DBBase<IDBDatabase> {

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
                tableInfo.name === oldTableName;
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
                    indexInfo.name === oldIndexName;
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

    public init(dbName: string, dbVersion?: number): boolean {
        let isOK: boolean = false;

        this._indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

        if (!this._indexedDB) {
            G.LogMgr.warn(`浏览器不支持 IndexedDB 数据库`);
            return isOK;
        }

        let request: IDBOpenDBRequest = this._indexedDB.open(dbName, dbVersion);

        request.onsuccess = (ev: Event) => {
            this.db = (ev.target as IDBRequest<IDBDatabase>).result;

            this.db.onversionchange = function () {
                this.close();
                alert("Database is outdated, please reload the page.")
            };
        }

        request.onerror = (ev: Event) => {
            G.LogMgr.warn(`打开 [${dbName}][${dbVersion}] 数据库失败：${(ev.target as IDBRequest<IDBDatabase>).error}`);

        };

        request.onupgradeneeded = (ev: IDBVersionChangeEvent) => {
            G.LogMgr.log(`正在更新 [${dbName}][${ev.oldVersion}->${ev.newVersion}] 数据库`);

            const target: IDBOpenDBRequest = ev.target as IDBOpenDBRequest;
            const db: IDBDatabase = target.result;
            this.upgradeTable(db);
            this.upgradeIndex(target);
        };

        request.onblocked = (ev: IDBVersionChangeEvent) => {

        }

        return isOK;
    }

    public insert(table: DBDefine.Table, data: { [key: string]: any; }): void {
        let request: IDBRequest<IDBValidKey> = this.db.transaction([table], "readwrite")
            .objectStore(table)
            .add(data);

        request.onsuccess = (ev: Event) => {

        }

        request.onerror = (ev: Event) => {

        }
    }

    delele(): void {
        throw new Error("Method not implemented.");
    }

    update(): void {
        throw new Error("Method not implemented.");
    }

    select(): void {
        throw new Error("Method not implemented.");
    }
}