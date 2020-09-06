/*
 * @Author       : ougato
 * @Date         : 2020-08-10 15:59:46
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-06 15:05:03
 * @FilePath     : \client242\assets\src\define\EventDefine.ts
 * @Description  : 事件定义
 */

// 系统事件定义 范围从 0-10000
export enum SystemEventDefine {
    
}

// 游戏事件定义 范围从 10001~ 开始
export enum GameEventDefine {
    // 开始游戏
    STRAT_GAME = 10001,
}

export default { ...SystemEventDefine, ...GameEventDefine };