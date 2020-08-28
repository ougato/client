/*
 * @Author       : ougato
 * @Date         : 2020-08-22 11:42:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-28 17:11:49
 * @FilePath     : \client242\assets\src\core\interface\IView.ts
 * @Description  : 
 */

/**
 * 传入视图参数接口
 * @param path {ViewDefineType} 路径
 * @param data {any} 数据
 * @param completeCallback {Function} 完成后的回调
 */
export interface IViewParam {
    path: ViewDefineType,
    data?: any,
    completeCallback?: () => void;
}
