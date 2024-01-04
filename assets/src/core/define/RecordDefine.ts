/*
 * Author       : ougato
 * Date         : 2021-07-07 00:56:31
 * LastEditors  : ougato
 * LastEditTime : 2024-01-04 11:30:20
 * FilePath     : /client/assets/src/core/define/RecordDefine.ts
 * Description  : 录制定义
 */

export namespace RecordDefine {

    // 画布名称
    export const CANVAS_NAME: string = "GameCanvas";
    // 状态
    export enum State {
        // 空闲
        IDLE = 0,
        // 录制中
        RECORDING = 1,
        // 暂停中
        PAUSING = 2,
        // 停止后
        STOPED = 3,
    }
    // 录制类型
    export enum RecordType {
        // 视频
        VIDEO = 0,
        // 音频
        AUDIO = 1,
    }
}