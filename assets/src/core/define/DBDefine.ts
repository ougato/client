/*
 * Author       : ougato
 * Date         : 2023-12-27 18:28:07
 * LastEditors  : ougato
 * LastEditTime : 2024-01-08 22:48:41
 * FilePath     : /client/assets/src/core/define/DBDefine.ts
 * Description  : 数据库定义
 */

export namespace DBDefine {

    // 数据库状态
    export enum State {
        // 无
        NONE = 0,
        // 正在打开
        OPENING = 1,
        // 正在更新
        UPDATING = 2,
        // 已经打开
        OPENED = 3,
        // 锁定
        BLOCK = 4,
        // 正在关闭
        CLOSING = 5,
        // 已经关闭
        CLOSED = 6,
    }

    // 字段类型
    export enum FieldType {
        // 整数
        INTEGER = "INTEGER",
        // 字符串
        TEXT = "TEXT",
        // 浮点
        REAL = "REAL",
        // 二进制
        BLOB = "BLOB",
    }

    // 表名
    export enum Table {
        // 日志（打印记录）
        LOG = "log",
        // 埋点（关键记录）
        TRACK = "track",
        // 行为（玩家操作）
        ACTION = "action",
        // 录制（音视频录制）
        RECORD = "record",
    }

    // 日志表字段
    export enum LogField {
        // 自增 ID
        ID = "id",
        // 时间戳
        TIMESTAMP = "timestamp",
        // 用户 ID
        UID = "uid",
    }

    // 埋点表字段
    export enum TrackField {
        // 自增 ID
        ID = "id",
        // 时间戳
        TIMESTAMP = "timestamp",
        // 用户 ID
        UID = "uid",
    }

    // 行为表字段
    export enum ActionField {
        // 自增 ID
        ID = "id",
        // 时间戳
        TIMESTAMP = "timestamp",
        // 用户 ID
        UID = "uid",
        // 行动类型
        TYPE = "type",
        // 数据
        DATA = "data",
    }

    // 录制表字段
    export enum RecordField {
        // 自增 ID
        ID = "id",
        // 时间戳
        TIMESTAMP = "timestamp",
        // 用户 ID
        UID = "uid",
        // 录制类型
        TYPE = "type",
        // 数据
        DATA = "data",
    }

}