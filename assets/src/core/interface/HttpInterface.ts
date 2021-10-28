/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:56:17
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 00:52:16
 * FilePath     : /client/assets/src/core/interface/HttpInterface.ts
 * @Description  : Http 接口
 */

import * as HttpDefine from "../define/HttpDefine";

// 响应数据
export interface ResponseInfo {
    // 返回状态
    state: HttpDefine.StateType,
    // 数据
    body: any,
}

// 请求参数
export interface RequestParam {
    // 请求头
    requestHeader?: Map<HttpDefine.RequestHeader, string>,
    // 响应头
    responseHeader?: Map<HttpDefine.ResponseHeader, string>,
    // 响应类型
    responseType?: XMLHttpRequestResponseType,
}

// Http 接口约束
export interface Http {
    /**
     * Http 请求方法
     * @param url {string} 链接 
     * @param method {HttpDefine.Method} 方法
     * @param body {BodyInit} 数据
     * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型
     * @return {Promise<ResponseInfo>} 调用者使用 .then 或 .catch，可使用链式调用
     */
    request: (url: string, method: HttpDefine.Method, body?: BodyInit, param?: RequestParam) => Promise<ResponseInfo>;
}