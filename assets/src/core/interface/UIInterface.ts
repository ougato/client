/*
 * @Author       : ougato
 * @Date         : 2020-08-30 00:16:51
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-31 01:22:30
 * @FilePath     : \client242\assets\src\core\interface\UIInterface.ts
 * @Description  : 界面接口（每个场景、视图都需要继承这个接口）
 */

/**
 * @param {T} 接收外部打开界面时传入的数据参数
 */
interface UIInterface<T> {
    // 用于打开界面传入的处理数据
    readonly data: T;
}