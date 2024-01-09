/*
 * Author       : ougato
 * Date         : 2024-01-10 00:39:09
 * LastEditors  : ougato
 * LastEditTime : 2024-01-10 00:43:48
 * FilePath     : /client/assets/src/core/manager/record/RecordAndroid.ts
 * Description  : Android 环境录制
 */

import RecordBase from "./RecordBase";

const RECORD_FILE_PATH: string = "org/cocos2dx/javascript/utils/RecordUtils";

export default class RecordAndroid extends RecordBase {

    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        jsb.reflection.callStaticMethod(RECORD_FILE_PATH, "init", "(Ljava/lang/String;ILjava/lang/String;)Z", dbName, dbVersion, JSON.stringify(DBConfig.Struct));
    }

    public start(): void {

    }

    public stop(): void {

    }
}