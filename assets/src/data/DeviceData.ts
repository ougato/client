/*
 * Author       : ougato
 * Date         : 2021-11-01 00:58:47
 * LastEditors  : ougato
 * LastEditTime : 2021-11-05 11:49:16
 * FilePath     : /client/assets/src/data/DeviceData.ts
 * Description  : 设备数据
 */

import BaseData from "../core/base/BaseData";
import ClassDecorator from "../core/decorator/ClassDecorator";

@ClassDecorator.classname
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