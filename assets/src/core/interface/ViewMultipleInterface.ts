/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:42:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-31 01:19:14
 * @FilePath     : \client242\assets\src\core\interface\ViewMultipleInterface.ts
 * @Description  : 用于打开多个视图的参数接口
 */

/**
 * @param path {ViewDefineType} 视图在 resources 内的相对路径
 * @param data {T} 数据
 * @param completeCallback {Function} 完成后的回调
 */
interface ViewMultipleInterface<T> {
    path: ViewDefineType,
    data?: T,
    completeCallback?: () => void;
}