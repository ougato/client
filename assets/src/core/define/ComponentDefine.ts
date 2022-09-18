/*
 * Author       : ougato
 * Date         : 2022-06-05 20:00:12
 * LastEditors  : ougato
 * LastEditTime : 2022-09-18 18:34:38
 * FilePath     : /client/assets/src/core/define/ComponentDefine.ts
 * Description  : 组件定义
 */

export namespace ComponentDefine {

    // 方向类型
    export enum DirectionType {
        // 水平
        HORIZONTAL = 0,
        // 垂直
        VERTICAL = 1,
    }

    // ListView 加载方式
    export enum ListViewLoadMode {
        // 直接加载
        NONE = 0,
        // 分帧加载 
        FRAME = 1,
        // 无限加载
        ENDLESS = 2,
    }

}