/*
 * Author       : ougato
 * Date         : 2024-01-03 16:22:00
 * LastEditors  : ougato
 * LastEditTime : 2024-01-16 15:24:33
 * FilePath     : /client/assets/src/core/manager/record/RecordManager.ts
 * Description  : 录像管理器
 */

import BaseManager from "../../base/BaseManager";
import { RecordDefine } from "../../define/RecordDefine";
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

        this.init();
    }

    private isSupport(type: RecordDefine.RecordType): boolean {
        let is: boolean = false;
        switch (type) {
            case RecordDefine.RecordType.VIDEO:
                is = !!this._videoRecord;
                break;
            case RecordDefine.RecordType.AUDIO:
                is = !!this._audioRecord;
                break;
        }
        return is;
    }

    public init(): void {
        if (cc.sys.isBrowser) {
            this._videoRecord = new RecordWeb();
        } else if (cc.sys.isNative) {
            // 原生暂时不支持，没有想到更好的解决方案
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            } else {

            }
            G.LogMgr.warn(`暂不支持录像功能`);
        }
    }

    public start(type: RecordDefine.RecordType): void {
        if (!this.isSupport(type)) {
            return;
        }

        switch (type) {
            case RecordDefine.RecordType.VIDEO: {
                this._videoRecord.start();
            }
                break;
            case RecordDefine.RecordType.AUDIO:
                this._audioRecord.start();
                break;
        }
    }

    public stop(type: RecordDefine.RecordType): void {
        if (!this.isSupport(type)) {
            return;
        }

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

        if (this._videoRecord) {
            this._videoRecord.destroy();
            this._videoRecord = null;
        }

        if (this._audioRecord) {
            this._audioRecord.destroy();
            this._audioRecord = null;
        }
    }

}