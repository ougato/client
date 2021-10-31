/*
 * Author       : ougato
 * Date         : 2021-11-01 00:58:47
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 01:09:19
 * FilePath     : /client/assets/src/data/DeviceData.ts
 * Description  : 设备数据
 */

import BaseData from "../core/base/BaseData";

export default class DeviceData extends BaseData {

    // 唯一码
    public uuid: string = null;
    // 系统
    public os: string = null;
    // 系统版本号
    public osVersion: string = null;

    constructor() {
        super();

    }


}