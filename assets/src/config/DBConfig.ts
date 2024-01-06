/*
 * Author       : ougato
 * Date         : 2023-12-27 16:43:28
 * LastEditors  : ougato
 * LastEditTime : 2024-01-05 18:03:02
 * FilePath     : /client/assets/src/config/DBConfig.ts
 * Description  : 数据库配置
 */

import { DBDefine } from "../core/define/DBDefine";
import { DBInterface } from "../core/interface/DBInterface";

export namespace DBConfig {

    // 库名
    export const NAME: string = "GameDB";
    // 版本
    export const VERSION: number = 12;
    // 结构
    export const Struct: DBInterface.Table[] = [
        {
            name: DBDefine.Table.LOG,
            options: { keyPath: DBDefine.LogField.ID, autoIncrement: true },
            indexList: [
                { name: DBDefine.LogField.TIMESTAMP, keyPath: DBDefine.LogField.TIMESTAMP, options: { unique: false } },
                { name: DBDefine.LogField.UID, keyPath: DBDefine.LogField.UID, options: { unique: false } },
            ]
        },
        {
            name: DBDefine.Table.ACTION,
            options: { keyPath: DBDefine.ActionField.ID, autoIncrement: true },
            indexList: [
                { name: DBDefine.ActionField.TIMESTAMP, keyPath: DBDefine.ActionField.TIMESTAMP, options: { unique: false } },
                { name: DBDefine.ActionField.UID, keyPath: DBDefine.ActionField.UID, options: { unique: false } },
                { name: DBDefine.ActionField.ACTION_TYPE, keyPath: DBDefine.ActionField.ACTION_TYPE, options: { unique: false } },
            ]
        },
        {
            name: DBDefine.Table.TRACK,
            options: { keyPath: DBDefine.TrackField.ID, autoIncrement: true },
            indexList: [
                { name: DBDefine.TrackField.TIMESTAMP, keyPath: DBDefine.TrackField.TIMESTAMP, options: { unique: false } },
                { name: DBDefine.TrackField.UID, keyPath: DBDefine.TrackField.UID, options: { unique: false } },
            ]
        },
        {
            name: DBDefine.Table.RECORD,
            options: { keyPath: DBDefine.RecordField.ID, autoIncrement: true },
            indexList: [
                { name: DBDefine.RecordField.TIMESTAMP, keyPath: DBDefine.RecordField.TIMESTAMP, options: { unique: false } },
                { name: DBDefine.RecordField.UID, keyPath: DBDefine.RecordField.UID, options: { unique: false } },
                { name: DBDefine.RecordField.RECORD_TYPE, keyPath: DBDefine.RecordField.RECORD_TYPE, options: { unique: false } },
                { name: DBDefine.RecordField.RECORD_DATA, keyPath: DBDefine.RecordField.RECORD_DATA, options: { unique: false } },
            ]
        },
    ];

}