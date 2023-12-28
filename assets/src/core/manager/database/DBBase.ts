/*
 * Author       : ougato
 * Date         : 2023-12-26 15:27:23
 * LastEditors  : ougato
 * LastEditTime : 2023-12-27 16:58:41
 * FilePath     : /client/assets/src/core/manager/database/DBBase.ts
 * Description  : 数据库基类
 */

import DBAbstract from "./DBAbstract";

export default abstract class DBBase<T> extends DBAbstract {

    public db: T = null;

    constructor() {
        super();

    }

    public destroy(): void {

    }

}