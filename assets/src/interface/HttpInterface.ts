/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:56:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-21 02:02:18
 * @FilePath     : \client242\assets\src\interface\HttpInterface.ts
 * @Description  : Http 接口
 */

import * as HttpDefine from "../define/HttpDefine";

/**
 * 响应数据接口
 */
export interface ResponseInfo {
    // 返回状态
    state: HttpDefine.StateType,
    // 数据
    body: BodyInit,
}

/**
 * Http 方法约束
 */
export interface Method {
    request: (url: string, method: HttpDefine.Method, body?: BodyInit) => Promise<ResponseInfo>;
}