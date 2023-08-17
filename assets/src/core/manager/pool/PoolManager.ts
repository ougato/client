/*
 * Author       : ougato
 * Date         : 2023-08-17 23:15:13
 * LastEditors  : ougato
 * LastEditTime : 2023-08-17 23:16:06
 * FilePath     : /client/assets/src/core/manager/pool/PoolManager.ts
 * Description  : 池管理器
 */

import BaseManager from "../../base/BaseManager";

export default class PoolManager extends BaseManager {

    private static s_instance: PoolManager = null;

    public static getInstance(): PoolManager {
        if (this.s_instance === null) {
            this.s_instance = new PoolManager();
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

    /**
     * 销毁 清理所有控制器
     */
    protected destroy(): void {

    }

}