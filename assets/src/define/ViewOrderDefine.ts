/*
 * @Author       : ougato
 * @Date         : 2020-08-31 02:06:47
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-31 02:08:27
 * @FilePath     : \client242\assets\src\define\ViewOrderDefine.ts
 * @Description  : 视图层级定义
 */

// 层级间隔
const ORDER_INTERVAL: number = 100;

// 层级定义
enum ViewOrderDefine {
    BOTTOM = 0,
    UI = 1 * ORDER_INTERVAL,
    POPUP = 2 * ORDER_INTERVAL,
    TOP = 3 * ORDER_INTERVAL,
    SYSTEM = 4 * ORDER_INTERVAL,
}

export default ViewOrderDefine;