/*
 * Author       : ougato
 * Date         : 2023-12-26 15:27:23
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 23:56:23
 * FilePath     : /client/assets/src/core/manager/database/DBBase.ts
 * Description  : 数据库基类
 */

import { DBDefine } from "../../define/DBDefine";
import DBAbstract from "./DBAbstract";

export default abstract class DBBase<T> extends DBAbstract {

    // 数据库实例对象
    public db: T = null;
    // 状态
    public state: DBDefine.State = null;

    constructor() {
        super();

    }

    public destroy(): void {

    }

}