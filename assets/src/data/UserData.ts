/*
 * Author       : ougato
 * Date         : 2021-11-05 12:05:12
 * LastEditors  : ougato
 * LastEditTime : 2021-11-10 10:34:11
 * FilePath     : /client/assets/src/data/UserData.ts
 * Description  : 
 */

import BaseData from "../core/base/BaseData";
import ClassDecorator from "../core/decorator/ClassDecorator";
import Proto = require("../protobuf/Proto");

@ClassDecorator.classname
export default class UserData extends BaseData {

    // 玩家id
    _id: string = null;
    // 昵称
    _nick: string = '';
    // 战力
    _power: number | Long = 0;
    // 灵石
    _stone: number | Long = 0;
    //头像
    _avatar: number = 0;
    // 上次登录 时间戳
    // _lastLoginTimestamp: Long | number = 0;
    _realmLevel: number = 0;
    _aura: number = 0;
    _skillexp: number = 0;
    get isNeedCreatorRole() {
        return !this._nick  //暂时
    }

    reset() {
        this._id = null;
        this._nick = null;
        this._power = null;
        this._stone = null;
        this._avatar = null;
        this._aura = null;
        this._skillexp = null;
    }
    initInfo(userInfo: Proto.IUserInfo) {
        this._id = userInfo.id;
        this._nick = userInfo.nick;
        this._power = userInfo.power;
        this._stone = userInfo.stone;
        this._avatar = userInfo.avatar;
        this._realmLevel = userInfo.realmLevel
        this._aura = userInfo.aura;
        this._skillexp = userInfo.skillexp;
        G.LocalStorageMgr.setItem("LAST_LOGIN_USER_ID", this._id)
    }
    // 最后登录的uid 
    getLastLoginUid() {
        return G.LocalStorageMgr.getItem("LAST_LOGIN_USER_ID") || ""
    }

}
