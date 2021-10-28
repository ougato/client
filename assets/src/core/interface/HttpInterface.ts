/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:56:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-10-22 17:12:57
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
    body: any,
}

/**
 * Http 请求方法约束
 * @param url {string} 链接 
 * @param method {HttpDefine.Method} 方法
 * @param body {BodyInit} 数据
 * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型
 * @return {Promise<ResponseInfo>} 调用者使用 .then 或 .catch，可使用链式调用
 */
export interface Method {
    request: (url: string, method: HttpDefine.Method, body?: BodyInit, responseType?: XMLHttpRequestResponseType, requestHeader?: Map<string, string>) => Promise<ResponseInfo>;
}