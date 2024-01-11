/*
 * Author       : ougato
 * Date         : 2021-07-07 00:56:31
 * LastEditors  : ougato
 * LastEditTime : 2024-01-11 16:26:16
 * FilePath     : /client/assets/src/core/define/RecordDefine.ts
 * Description  : 录制定义
 */

export namespace RecordDefine {

    // 画布名称
    export const CANVAS_NAME: string = "GameCanvas";
    // 录制帧率
    export const FRAME_RATE: number = 24;

    // 状态
    export enum State {
        // 录制中
        RECORDING = 0,
        // 暂停中
        PAUSING = 1,
        // 停止后
        STOPED = 2,
    }

    // 录制类型
    export enum RecordType {
        // 视频
        VIDEO = 0,
        // 音频
        AUDIO = 1,
    }

}