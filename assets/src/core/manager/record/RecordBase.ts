/*
 * Author       : ougato
 * Date         : 2024-01-04 10:51:29
 * LastEditors  : ougato
 * LastEditTime : 2024-01-04 10:57:02
 * FilePath     : /client/assets/src/core/manager/record/RecordBase.ts
 * Description  : 录制基类
 */

import { RecordDefine } from "../../define/RecordDefine";
import RecordAbstract from "./RecordAbstract";

export default class RecordBase extends RecordAbstract {

    // 状态
    public state: RecordDefine.State = RecordDefine.State.IDLE;

    constructor() {
        super();

    }

    /**
     * 开始
     */
    public start(): void {

    }

    /**
     * 停止
     */
    public stop(): void {

    }

    /**
     * 暂停
     */
    public pause(): void {

    }

    /**
     * 恢复
     */
    public resume(): void {

    }

    public destroy(): void {

    }

}