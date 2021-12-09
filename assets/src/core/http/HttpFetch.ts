/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * LastEditors  : ougato
 * LastEditTime : 2021-11-03 01:22:17
 * FilePath     : /client/assets/src/core/http/HttpFetch.ts
 * @Description  : HttpFetch 请求对象
 */

import * as HttpDefine from "../define/HttpDefine";
import * as HttpInterface from "../interface/HttpInterface";

export default class HttpFetch implements HttpInterface.Http {

    // 取消控制器
    private _abortController: AbortController = null;
    // 请求信息
    private _requestInfo: RequestInit = null;
    // 超时定时器
    private _timer: NodeJS.Timeout = null;
    // 请求链接
    private _url: string = null;
    // 请求方法
    private _method: HttpDefine.Method = null;

    constructor() {
        this._abortController = new AbortController();
        this._requestInfo = {};
        this.initRequestInfo();
    }

    /**
     * 初始化请求信息
     * 继承需重写此方法
     */
    protected initRequestInfo(): void {
        this._requestInfo.body = null;
        this._requestInfo.cache = "default"; // https://developer.mozilla.org/zh-CN/docs/Web/API/Request/cache
        this._requestInfo.credentials = "omit"; // https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        this._requestInfo.headers = {
            "Content-Type": HttpDefine.ContentType.JSON
        };
        // this._requestInfo.integrity = "";
        this._requestInfo.keepalive = false;
        this._requestInfo.method = HttpDefine.Method.GET;
        this._requestInfo.mode = "cors";
        this._requestInfo.redirect = "follow"; // follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47 之前的默认值是 follow，从 Chrome 47 开始是 manual。
        this._requestInfo.referrer = ""; // https://javascript.info/fetch-api
        this._requestInfo.referrerPolicy = "no-referrer-when-downgrade"; // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy
        this._requestInfo.signal = this._abortController.signal; // https://davidwalsh.name/cancel-fetch （android 无法使用所以注释此功能）
    }

    /**
     * 请求 fetch
     * @param url {string} 链接 
     * @param method {HttpDefine.Method} 方法
     * @param body {BodyInit} 数据
     * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型 // 
     * @return {Promise<HttpInterface.ResponseInfo>}
     */
    public async request(url: string, method: HttpDefine.Method, body?: BodyInit, param?: HttpInterface.RequestParam): Promise<HttpInterface.ResponseInfo> {
        this._url = url;
        this._method = method;

        if (!param) {
            param = {};
        }

        if (param.responseType === null || param.responseType === undefined) {
            param.responseType = "json";
        }

        if (param.requestHeader === null || param.requestHeader === undefined) {
            param.requestHeader = new Map();
        }
        if (!param.requestHeader.has(HttpDefine.RequestHeader.CONTENT_TYPE)) {
            param.requestHeader.set(HttpDefine.RequestHeader.CONTENT_TYPE, HttpDefine.ContentType.JSON);
        }

        if (param.responseHeader === null || param.responseHeader === undefined) {
            param.responseHeader = new Map();
        }
        if (!param.responseHeader.has(HttpDefine.ResponseHeader.CONTENT_TYPE)) {
            param.responseHeader.set(HttpDefine.ResponseHeader.CONTENT_TYPE, HttpDefine.ContentType.JSON);
        }

        return new Promise((resolve: (data: HttpInterface.ResponseInfo) => void) => {
            G.LogMgr.log(`${this._method} 请求 ${this._url}`);
            G.LogMgr.log(body);
            this._requestInfo.method = method;
            if (body !== null || body !== undefined) {
                this._requestInfo.body = body;
            }

            let data: HttpInterface.ResponseInfo = {
                state: null,
                body: null
            };

            this.startTimer();
            fetch(url, this._requestInfo).then(async (response: Response) => {
                this.stopTimer();
                G.LogMgr.log(`${this._method} 响应 ${response.status}`);
                if (response.ok) {
                    data.state = HttpDefine.StateType.OK;
                    data.body = await this.getBodyByResponse(param.responseType, response) as any;
                    G.LogMgr.log(data.body);
                } else {
                    data.state = HttpDefine.StateType.ERROR;
                    data.body = null;
                }
                resolve(data);
            }).catch((e) => {
                this.stopTimer();
                if (e.name === "AbortError") {
                    data.state = HttpDefine.StateType.TIMEOUT;
                } else {
                    data.state = HttpDefine.StateType.ERROR;
                }
                data.body = e.message;
                resolve(data);
            });
        });
    }

    /**
     * 获取 Response 中的 body 数据
     * @param response {Response} 收到数据
     * @return {Promise<BodyInit>}
     */
    private async getBodyByResponse(responseType: XMLHttpRequestResponseType, response: Response): Promise<BodyInit> {
        switch (responseType) {
            case "":
            case "text":
                return await response.text();
            case "json":
                return await response.json();
            case "arraybuffer":
                return await response.arrayBuffer();
            case "blob":
                return await response.blob();
            case "document":
                return await response.formData();
            default:
                return await response.text();
        }
    }

    /**
     * 开始定时器
     */
    private startTimer(): void {
        if (this._timer === null) {
            this._timer = setTimeout(() => {
                G.LogMgr.warn(`${this._method} 超时 ${this._url}`);
                this._abortController.abort();
                this._timer = null;
            }, HttpDefine.TIMEOUT * 1000);
        }
    }

    /**
     * 停止定时器
     */
    private stopTimer(): void {
        if (this._timer !== null) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    }

}