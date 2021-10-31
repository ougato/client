/*
 * Author       : ougato
 * Date         : 2021-10-30 22:48:20
 * LastEditors  : ougato
 * LastEditTime : 2021-10-30 22:48:20
 * FilePath     : /client/assets/src/core/interface/ControllerInterface.ts
 * Description  : 控制器接口
 */
 
import BaseController from "../base/BaseController";

export interface ControllerClass<T extends BaseController> {
    new(): T;
}