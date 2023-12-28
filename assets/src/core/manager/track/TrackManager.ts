/*
 * Author       : ougato
 * Date         : 2023-12-26 10:38:23
 * LastEditors  : ougato
 * LastEditTime : 2023-12-26 11:06:04
 * FilePath     : /client/assets/src/core/manager/track/TrackManager.ts
 * Description  : 用户操作轨迹管理器
 */

import BaseManager from "../../base/BaseManager";

export default class TrackManager extends BaseManager {

    private static s_instance: TrackManager = null;

    public static getInstance(): TrackManager {
        if (this.s_instance === null) {
            this.s_instance = new TrackManager();
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

    protected destroy(): void {

    }

}