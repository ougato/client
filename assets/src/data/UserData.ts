/*
 * Author       : ougato
 * Date         : 2021-11-05 12:05:12
 * LastEditors  : ougato
 * LastEditTime : 2023-12-28 15:10:56
 * FilePath     : /client/assets/src/data/UserData.ts
 * Description  : 用户数据
 */

import BaseData from "../core/base/BaseData";
import ClassDecorator from "../core/decorator/ClassDecorator";

@ClassDecorator.classname
export default class UserData extends BaseData {

    // ID
    public uid: number = null;
    // 昵称
    public nick: string = null;

}
