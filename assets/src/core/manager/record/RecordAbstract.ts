/*
 * Author       : ougato
 * Date         : 2024-01-04 10:37:41
 * LastEditors  : ougato
 * LastEditTime : 2024-01-04 10:50:31
 * FilePath     : /client/assets/src/core/manager/record/RecordAbstract.ts
 * Description  : 录制抽象类
 */

import { RecordDefine } from "../../define/RecordDefine";

export default abstract class RecordAbstract {
    abstract state: RecordDefine.State;
    abstract start(): void;
    abstract stop(): void;
    abstract pause(): void;
    abstract resume(): void;
}