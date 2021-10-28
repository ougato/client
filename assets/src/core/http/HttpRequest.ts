/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-10-22 17:13:06
 * @FilePath     : \client242\assets\src\core\http\HttpRequest.ts
 * @Description  : Http 对外接口
 */

import * as HttpInterface from "../interface/HttpInterface";
import * as HttpDefine from "../define/HttpDefine";
import HttpXmlRequest from "./HttpXmlRequest";

export default class HttpRequest {

    /**
     * 检测 URL 是否合法
     * @param url {string} 请求地址
     * @return {boolean}
     */
    private static checkLegal(url: string): boolean {
        let legal: boolean = true;
        if (url === null || url === undefined || url === "") {
            legal = false;
        }
        return legal;
    }

    /**
     * GET 请求
     * @param url {string} 请求链接
     * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型
     * @param cls {T extends HttpInterface.Method} 执行请求对象
     * @return {Promise<HttpInterface.ResponseInfo>} 调用者使用 .then 做回调参数，可使用链式调用
     */
    public static async get<T extends HttpInterface.Method>(url: string, responseType?: XMLHttpRequestResponseType, cls?: (new () => T)): Promise<HttpInterface.ResponseInfo> {
        if (!this.checkLegal(url)) {
            console.warn(`GET 地址不合法 ${url}`);
            return;
        }

        let response: HttpInterface.ResponseInfo;
        if (cls === null || cls === undefined) {
            response = await (new HttpXmlRequest()).request(url, HttpDefine.Method.GET);
        } else {
            response = await (new cls()).request(url, HttpDefine.Method.GET);
        }

        return response;
    }

    /**
     * POST 请求
     * @param url {string} 请求链接
     * @param body {string} JSON 打包后的字符串数据
     * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型
     * @param cls {T extends HttpInterface.Method} 执行请求对象
     * @return {Promise<HttpInterface.ResponseInfo>} 调用者使用 .then 或 .catch，可使用链式调用
     */
    public static async post<T extends HttpInterface.Method>(url: string, body?: string, responseType?: XMLHttpRequestResponseType, requestHeader?: Map<string, string>, cls?: (new () => T)): Promise<HttpInterface.ResponseInfo> {
        if (!this.checkLegal(url)) {
            console.warn(`POST 地址不合法 ${url}`);
            return;
        }

        let response: HttpInterface.ResponseInfo;
        if (cls === null || cls === undefined) {
            response = await (new HttpXmlRequest()).request(url, HttpDefine.Method.POST, body, responseType, requestHeader);
        } else {
            response = await (new cls()).request(url, HttpDefine.Method.POST, body, responseType, requestHeader);
        }
        return response;
    }
}