/*
 * Author       : ougato
 * Date         : 2023-12-27 16:43:28
 * LastEditors  : ougato
 * LastEditTime : 2024-01-10 00:07:16
 * FilePath     : /client/assets/src/config/DBConfig.ts
 * Description  : 数据库配置
 */

import { DBDefine } from "../core/define/DBDefine";
import { DBInterface } from "../core/interface/DBInterface";

export namespace DBConfig {

    // 库名
    export const NAME: string = "GameDB";
    // 版本
    export const VERSION: number = 101;
    // 结构
    export const Struct: DBInterface.Table[] = [
        {
            name: DBDefine.Table.LOG,
            options: { keyPath: DBDefine.LogField.ID, autoIncrement: true },
            fieldList: [
                { name: DBDefine.LogField.TIMESTAMP, keyPath: DBDefine.LogField.TIMESTAMP, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.LogField.UID, keyPath: DBDefine.LogField.UID, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
            ]
        },
        {
            name: DBDefine.Table.ACTION,
            options: { keyPath: DBDefine.ActionField.ID, autoIncrement: true },
            fieldList: [
                { name: DBDefine.ActionField.TIMESTAMP, keyPath: DBDefine.ActionField.TIMESTAMP, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.ActionField.UID, keyPath: DBDefine.ActionField.UID, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.ActionField.TYPE, keyPath: DBDefine.ActionField.TYPE, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.ActionField.DATA, keyPath: DBDefine.ActionField.DATA, isIndex: false, type: DBDefine.FieldType.BLOB, options: { unique: false } },
            ]
        },
        {
            name: DBDefine.Table.TRACK,
            options: { keyPath: DBDefine.TrackField.ID, autoIncrement: true },
            fieldList: [
                { name: DBDefine.TrackField.TIMESTAMP, keyPath: DBDefine.TrackField.TIMESTAMP, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.TrackField.UID, keyPath: DBDefine.TrackField.UID, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
            ]
        },
        {
            name: DBDefine.Table.RECORD,
            options: { keyPath: DBDefine.RecordField.ID, autoIncrement: true },
            fieldList: [
                { name: DBDefine.RecordField.TIMESTAMP, keyPath: DBDefine.RecordField.TIMESTAMP, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.RecordField.UID, keyPath: DBDefine.RecordField.UID, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.RecordField.TYPE, keyPath: DBDefine.RecordField.TYPE, isIndex: true, type: DBDefine.FieldType.INTEGER, options: { unique: false } },
                { name: DBDefine.RecordField.DATA, keyPath: DBDefine.RecordField.DATA, isIndex: false, type: DBDefine.FieldType.BLOB, options: { unique: false } },
            ]
        },
    ];

}