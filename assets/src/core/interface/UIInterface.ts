/*
 * @Author       : ougato
 * @Date         : 2020-08-30 00:16:51
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 01:13:49
 * @FilePath     : \client242\assets\src\core\interface\UIInterface.ts
 * @Description  : 界面接口（每个场景、视图都需要继承这个接口）
 */

interface UIInterface<T> {
    // 用于打开界面传入的处理数据
    readonly data?: T;
}