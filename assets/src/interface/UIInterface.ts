/*
 * @Author       : ougato
 * @Date         : 2020-08-30 00:16:51
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-12 23:19:55
 * @FilePath     : \client242\assets\src\interface\UIInterface.ts
 * @Description  : 界面接口（每个场景、视图都需要继承这个接口）
 */

/**
 * @param {T} 接收外部打开界面时传入的数据参数
 */
interface UIInterface<T> {
    // 用于打开界面传入的处理数据
    data?: T;
    // 用于直接刷新界面的接口实现方法
    refresh?: (data?: T) => void;
    // 用于切换语言时改变界面语言文字
    onLanguage: () => void;
}