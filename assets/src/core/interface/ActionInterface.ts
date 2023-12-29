/*
 * Author       : ougato
 * Date         : 2023-12-28 14:21:05
 * LastEditors  : ougato
 * LastEditTime : 2023-12-29 14:13:21
 * FilePath     : /client/assets/src/core/interface/ActionInterface.ts
 * Description  : 用户行为接口
 */

export namespace ActionInterface {

    // 触摸开始数据
    export interface TouchStartData {
        x: number,
        y: number,
    }

    // 触摸移动数据
    export interface TouchMoveData {
        x: number,
        y: number,
    }

    // 触摸取消数据
    export interface TouchCancelData {
        x: number,
        y: number,
    }

    // 触摸结束数据
    export interface TouchEndData {
        x: number,
        y: number,
    }
}