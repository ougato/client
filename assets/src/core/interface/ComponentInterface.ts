/*
 * Author       : ougato
 * Date         : 2021-12-15 17:46:25
 * LastEditors  : ougato
 * LastEditTime : 2021-12-15 18:08:36
 * FilePath     : /client/assets/src/core/interface/ComponentInterface.ts
 * Description  : 列表滑动视图项接口类
 */

/**
 * 滑动列表项的接口类约束
 */
export interface ListViewItemClass {

    /**
     * 设置数据
     * @param {T} 泛型数据
     */
    set: <T>(data: T) => void;

} 