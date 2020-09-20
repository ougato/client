/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-21 02:32:31
 * @FilePath     : \client242\assets\src\core\manager\network\HttpRequest.ts
 * @Description  : Http 对外接口
 */

import * as HttpInterface from "../../../interface/HttpInterface";
import * as HttpDefine from "../../../define/HttpDefine";
import Http from "./Http";

const controller = (new AbortController()).signal;

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
     * @return {Promise<HttpInterface.ResponseInfo>} 调用者使用 .then 做回调参数，可使用链式调用
     */
    public static async get<T extends HttpInterface.Method>(url: string, cls?: (new () => T)): Promise<HttpInterface.ResponseInfo> {
        if (!this.checkLegal(url)) {
            console.warn(`GET 请求 ${url} 错误`);
            return;
        }

        let response: HttpInterface.ResponseInfo;
        if(cls === null || cls ===undefined) {
            response = await (new Http()).request(url, HttpDefine.Method.GET);
        } else {
            response = await (new cls()).request(url, HttpDefine.Method.GET);
        }
        return response
    }

    /**
     * POST 请求
     * @param url {string} 请求链接
     * @param body {string} JSON 打包后的字符串数据
     * @return {Promise<HttpInterface.ResponseInfo>} 调用者使用 .then 做回调参数，可使用链式调用
     */
    public static async post<T extends HttpInterface.Method>(url: string, body: string, cls?: (new () => T)): Promise<HttpInterface.ResponseInfo> {
        if (!this.checkLegal(url)) {
            console.warn(`POST 请求 ${url} 错误`);
            return;
        }

        let response: HttpInterface.ResponseInfo;
        if(cls === null || cls ===undefined) {
            response = await (new Http()).request(url, HttpDefine.Method.POST, body);
        } else {
            response = await (new cls()).request(url, HttpDefine.Method.POST, body);
        }
        return response
    }
}