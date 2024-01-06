/*
 * Author       : ougato
 * Date         : 2024-01-05 11:20:36
 * LastEditors  : ougato
 * LastEditTime : 2024-01-05 14:14:47
 * FilePath     : /client/assets/src/core/interface/NavigatorInterface.ts
 * Description  : 扩展 Navigato 接口
 */

export namespace NavigatorInterface {

    // Navigator 扩展接口
    export interface NavigatorEx extends Navigator {
        getBattery(): Promise<Battery>;
        addEventListener(type: "levelchange" | "chargingchange" | "chargingtimechange" | "dischargingtimechange", callback: Function): void;
    }

    // 电池接口
    export interface Battery {
        // 电量
        level: number;
        // 是否充电
        charging: boolean;
        // 当前状态开始充电所需的时间 以秒为单位。如果设备没有连接电源，此值为 Infinity。
        chargingTime: number;
        // 当前状态开始放电所需的时间 以秒为单位。如果设备正在充电，此值为 Infinity
        dischargingTime: number;
    }

}