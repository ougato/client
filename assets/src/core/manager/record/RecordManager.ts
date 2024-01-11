/*
 * Author       : ougato
 * Date         : 2024-01-03 16:22:00
 * LastEditors  : ougato
 * LastEditTime : 2024-01-11 18:46:02
 * FilePath     : /client/assets/src/core/manager/record/RecordManager.ts
 * Description  : 录像管理器
 */

import BaseManager from "../../base/BaseManager";
import { RecordDefine } from "../../define/RecordDefine";
import RecordAndroid from "./RecordAndroid";
import RecordBase from "./RecordBase";
import RecordWeb from "./RecordWeb";

export default class RecordManager extends BaseManager {

    private static s_instance: RecordManager = null;

    // 视频录制
    protected _videoRecord: RecordBase = null;
    // 音频录制
    protected _audioRecord: RecordBase = null;

    public static getInstance(): RecordManager {
        if (this.s_instance === null) {
            this.s_instance = new RecordManager();
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

    public init(): void {
        if (cc.sys.isBrowser) {
            this._videoRecord = new RecordWeb();
        } else if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {
                this._videoRecord = new RecordAndroid();
            } else if (cc.sys.os === cc.sys.OS_IOS) {

            } else {

            }
        }
    }

    public start(type: RecordDefine.RecordType): void {
        switch (type) {
            case RecordDefine.RecordType.VIDEO:
                this._videoRecord.start();
                break;
            case RecordDefine.RecordType.AUDIO:
                this._audioRecord.start();
                break;
        }
    }

    public stop(type: RecordDefine.RecordType): void {
        switch (type) {
            case RecordDefine.RecordType.VIDEO:
                this._videoRecord.stop();
                break;
            case RecordDefine.RecordType.AUDIO:
                this._audioRecord.stop();
                break;
        }
    }

    /**
     * 销毁 清理所有控制器
     */
    protected destroy(): void {
        super.destroy();

    }

}