/*
 * Author       : ougato
 * Date         : 2023-12-29 14:48:01
 * LastEditors  : ougato
 * LastEditTime : 2023-12-29 14:48:11
 * FilePath     : /client/assets/src/core/manager/report/ReportManager.ts
 * Description  : 上报管理器
 */

import BaseManager from "../../base/BaseManager";

export default class ReportManager extends BaseManager {

    private static s_instance: ReportManager = null;

    public static getInstance(): ReportManager {
        if (this.s_instance === null) {
            this.s_instance = new ReportManager();
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