/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * LastEditors  : ougato
 * LastEditTime : 2021-12-09 11:08:37
 * FilePath     : /client/assets/src/core/http/HttpRequest.ts
 * @Description  : Http 对外接口
 */

import * as HttpInterface from "../interface/HttpInterface";
import * as HttpDefine from "../define/HttpDefine";
import HttpXmlRequest from "./HttpXmlRequest";
import TypeUtils from "../utils/TypeUtils";


export default class HttpRequest {
    
    /**
     * 检测 URL 是否合法
     * @param url {string} 请求地址
     * @return {boolean}
     */
    private static checkLegal(url: string): boolean {
        let legal: boolean = true;
        if (TypeUtils.isNull(url) || url === "") {
            legal = false;
        }
        return legal;
    }

    /**
     * GET 请求
     * @param url {string} 请求链接
     * @param param {HttpInterface.RequestParam} 请求参数
     * @param cls {T extends HttpInterface.Http} 执行请求对象
     * @return {Promise<HttpInterface.ResponseInfo>} 调用者使用 .then 做回调参数，可使用链式调用
     */
    public static async get<T extends HttpInterface.Http>(url: string, param?: HttpInterface.RequestParam, cls?: (new () => T)): Promise<HttpInterface.ResponseInfo> {
        if (!this.checkLegal(url)) {
            G.LogMgr.warn(`GET 地址不合法 ${url}`);
            return;
        }

        let response: HttpInterface.ResponseInfo;
        if (TypeUtils.isNull(cls)) {
            response = await (new HttpXmlRequest()).request(url, HttpDefine.Method.GET, null, param);
        } else {
            response = await (new cls()).request(url, HttpDefine.Method.GET, null, param);
        }

        return response;
    }

    /**
     * POST 请求
     * @param url {string} 请求链接
     * @param body {string} JSON 打包后的字符串数据
     * @param param {RequestParam} 请求参数
     * @param cls {T extends HttpInterface.Http} 执行请求对象
     * @return {Promise<HttpInterface.ResponseInfo>} 调用者使用 .then 或 .catch，可使用链式调用
     */
    public static async post<T extends HttpInterface.Http>(url: string, body?: string, param?: HttpInterface.RequestParam, cls?: (new () => T)): Promise<HttpInterface.ResponseInfo> {
        if (!this.checkLegal(url)) {
            G.LogMgr.warn(`POST 地址不合法 ${url}`);
            return;
        }

        let response: HttpInterface.ResponseInfo;
        if (TypeUtils.isNull(cls)) {
            response = await (new HttpXmlRequest()).request(url, HttpDefine.Method.POST, body, param);
        } else {
            response = await (new cls()).request(url, HttpDefine.Method.POST, body, param);
        }
        return response;
    }
}