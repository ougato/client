/*
 * Author       : ougato
 * Date         : 2021-12-15 17:46:25
 * LastEditors  : ougato
 * LastEditTime : 2021-12-19 01:08:27
 * FilePath     : /client/assets/src/core/interface/ComponentInterface.ts
 * Description  : 列表滑动视图项接口类
 */

/**
 * 滑动列表项的接口类约束
 */
export interface ListViewItemClass {

    /**
     * 准备显示时 | 数据刷新回调 数据带入
     * @param {T} 泛型数据
     */
    onShow: (data: any) => void;

    /**
     * 重置数据和节点
     */
    reset: () => void;

}