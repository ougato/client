/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:56:17
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 15:59:25
 * FilePath     : /client/assets/src/core/interface/HttpInterface.ts
 * @Description  : Http 接口
 */

import * as HttpDefine from "../define/HttpDefine";

// 响应数据信息
export interface ResponseBodyInfo {
    // 错误码
    code: number,
    // 错误描述
    msg: string,
    // 数据
    data: any,
}

// 响应信息
export interface ResponseInfo {
    // 返回状态
    state: HttpDefine.StateType,
    // 数据
    body: ResponseBodyInfo,
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
     * @param param {RequestParam} 请求参数
     * @return {Promise<ResponseInfo>} 调用者使用 .then 或 .catch，可使用链式调用
     */
    request: (url: string, method: HttpDefine.Method, body?: BodyInit, param?: RequestParam) => Promise<ResponseInfo>;
}