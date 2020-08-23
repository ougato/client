/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:42:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-22 16:40:48
 * @FilePath     : \client242\assets\src\core\interface\IView.ts
 * @Description  : 
 */



/**
 * 传入需要打开视图接口
 * @param path {ViewDefineType} 路径
 * @param data {T} 数据
 * @param completeCallback {Function} 完成后的回调
 */
export interface IOpenParam {
    path: ViewDefineType,
    data?: any,
    completeCallback?: CompleteCallback
}
