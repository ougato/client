/*
 * @Author       : ougato
 * @Date         : 2020-09-22 23:21:09
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-23 01:39:09
 * @FilePath     : \client242\assets\src\define\ProtocolDefine.ts
 * @Description  : 协议定义
 */

// 系统协议定义
export enum SystemProtocolDefine {
    Ping = 0,
}

// 大厅协议定义
export enum LoobyProtocolDefine {

}

// 游戏协议定义
export enum GameProtocolDefine {

}

export default { ...SystemProtocolDefine, ...LoobyProtocolDefine, ...GameProtocolDefine };