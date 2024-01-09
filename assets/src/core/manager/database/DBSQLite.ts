/*
 * Author       : ougato
 * Date         : 2024-01-05 14:45:02
 * LastEditors  : ougato
 * LastEditTime : 2024-01-10 00:07:05
 * FilePath     : /client/assets/src/core/manager/database/DBSQLite.ts
 * Description  : Android 和 iOS 环境使用
 */

import { DBConfig } from "../../../config/DBConfig";
import { DBDefine } from "../../define/DBDefine";
import DBBase from "./DBBase";

const ANDROID_DB_UTILS_FILE_PATH: string = "org/cocos2dx/javascript/utils/DBUtils";

export default class DBSQLite extends DBBase {

    public async init(dbName: string, dbVersion: number = 1): Promise<boolean> {
        return new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void, reject: (reason?: any) => void) => {
            let isOK: boolean = false;
            if (cc.sys.os === cc.sys.OS_ANDROID) {
                isOK = jsb.reflection.callStaticMethod(ANDROID_DB_UTILS_FILE_PATH, "init", "(Ljava/lang/String;ILjava/lang/String;)Z", dbName, dbVersion, JSON.stringify(DBConfig.Struct));
            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
            resolve(isOK);
        })
    }

    public insert(table: DBDefine.Table, data: { [key: string]: any; }): void {
        if (cc.sys.os === cc.sys.OS_ANDROID) {

        } else if (cc.sys.os === cc.sys.OS_IOS) {

        }
    }

    public delele(): void {

    }

    public update(): void {

    }

    public select(table: DBDefine.Table, key: string): void {

    }

    public destroy(): void {
        super.destroy();

    }


}