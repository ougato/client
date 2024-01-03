/*
 * Author       : ougato
 * Date         : 2024-01-03 16:22:00
 * LastEditors  : ougato
 * LastEditTime : 2024-01-03 18:41:09
 * FilePath     : /client/assets/src/core/manager/record/RecordManager.ts
 * Description  : 录像管理器
 */

import { CanvasRecorder } from "../../../lib/record-rtc";
import RecordRTC = require("../../../lib/record-rtc");
import BaseManager from "../../base/BaseManager";
import { RecordDefine } from "../../define/RecordDefine";

export default class RecordManager extends BaseManager {

    private static s_instance: RecordManager = null;

    // 录制器
    private _recorder: RecordRTC = null;

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
        const canvas = document.getElementById(RecordDefine.CANVAS_NAME) as HTMLCanvasElement;
        this._recorder = new RecordRTC(canvas, {
            type: 'canvas',
            mimeType: "video/webm",
            frameInterval: 1,
            videoBitsPerSecond: 1,
        });
    }

    public start(): void {
        this.init();
        this._recorder.startRecording();
    }

    public stop(): void {
        this._recorder.stopRecording(() => {
            let blob = this._recorder.getBlob();
            // 处理录制的 Blob 数据，这里示例为保存为文件
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'recorded-video.webm';
            downloadLink.click();
        });
    }

    /**
     * 销毁 清理所有控制器
     */
    protected destroy(): void {
        super.destroy();

    }

}