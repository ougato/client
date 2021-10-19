/*
 * Author       : ougato
 * Date         : 2021-10-11 23:11:48
 * LastEditors  : ougato
 * LastEditTime : 2021-10-12 00:34:32
 * FilePath     : /client/assets/src/core/manager/sys/SysManager.ts
 * Description  : 系统管理器
 */

import BaseManager from "../../base/BaseManager";

export default class SysManager extends BaseManager {

    private static s_instance: SysManager = null;

    public static getInstance(): SysManager {
        if (this.s_instance === null) {
            this.s_instance = new SysManager();
        }

        cc.sys.NetworkType
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    public init(): void {

    }

    protected destroy(): void {

    }

}