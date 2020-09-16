/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:56:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-17 01:19:45
 * @FilePath     : \client242\assets\src\interface\HttpInterface.ts
 * @Description  : Http 接口
 */

import * as HttpDefine from "../define/HttpDefine";

/**
 * 请求头接口
 */
export interface RequestHeaderInterface {
    contentType: string,
    xRequestedWith: string,
    token: string,
    [propName: string]: any,
}

/**
 * 请求信息接口
 */
export interface RequestInfoInerface<T> {
    body?: T,
    method?: string,
    headers?: RequestHeaderInterface,
    token?: string,
    contentType?: string,
}

/**
 * 响应数据接口
 */
export interface ResponseDataInterface {
    // 返回状态
    state: HttpDefine.StateType,
    // 数据
    body: BodyInit,
}