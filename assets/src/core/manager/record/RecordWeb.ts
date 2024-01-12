/*
 * Author       : ougato
 * Date         : 2024-01-04 10:32:43
 * LastEditors  : ougato
 * LastEditTime : 2024-01-12 17:57:58
 * FilePath     : /client/assets/src/core/manager/record/RecordWeb.ts
 * Description  : Web 环境录制 Canvas
 */

import * as pako from 'pako';
import RecordRTC = require("../../../lib/record-rtc");
import { RecordDefine } from "../../define/RecordDefine";
import RecordBase from "./RecordBase";
import UnitUtils from '../../utils/UnitUtils';

export default class RecordWeb extends RecordBase {

    // 录制器
    private _recorder: RecordRTC = null;

    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        const canvas = document.getElementById(RecordDefine.CANVAS_NAME) as HTMLCanvasElement;
        this._recorder = new RecordRTC(canvas, {
            type: 'canvas',
            mimeType: "video/mp4",
        });
    }

    public start(): void {
        this._recorder.startRecording();
    }

    public stop(): void {
        this._recorder.stopRecording(() => {
            let blob = this._recorder.getBlob();
            let a = pako.deflate(this._recorder.buffer, { level: 9 });
            G.LogMgr.log(`blob ${UnitUtils.bytesToFileUnit(blob.size)}`);
            G.LogMgr.log(`pako ${UnitUtils.bytesToFileUnit(a.byteLength)}`);
            // 处理录制的 Blob 数据，这里示例为保存为文件
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'recorded-video.webm';
            downloadLink.click();
        });
    }
}