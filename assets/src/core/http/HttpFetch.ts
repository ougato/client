/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-11-12 00:47:04
 * @FilePath     : \client243\assets\src\core\http\HttpFetch.ts
 * @Description  : HttpFetch 请求对象
 */

import * as HttpDefine from "../../define/HttpDefine";
import * as HttpInterface from "../../interface/HttpInterface";
import Logger from "../machine/Logger";

export default class HttpFetch implements HttpInterface.Method {

    // 取消控制器
    private m_abortController: AbortController = null;
    // 请求信息
    private m_requestInfo: RequestInit = null;
    // 超时定时器
    private m_timer: NodeJS.Timeout = null;
    // 请求链接
    private m_url: string = null;
    // 请求方法
    private m_method: HttpDefine.Method = null;

    constructor() {
        this.m_abortController = new AbortController();
        this.m_requestInfo = {};
        this.initRequestInfo();
    }

    /**
     * 初始化请求信息
     * 继承需重写此方法
     */
    protected initRequestInfo(): void {
        this.m_requestInfo.body = null;
        this.m_requestInfo.cache = "default"; // https://developer.mozilla.org/zh-CN/docs/Web/API/Request/cache
        this.m_requestInfo.credentials = "omit"; // https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        this.m_requestInfo.headers = {
            "Content-Type": HttpDefine.ContentType.JSON
        };
        // this.m_requestInfo.integrity = "";
        this.m_requestInfo.keepalive = false;
        this.m_requestInfo.method = HttpDefine.Method.GET;
        this.m_requestInfo.mode = "cors";
        this.m_requestInfo.redirect = "follow"; // follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47 之前的默认值是 follow，从 Chrome 47 开始是 manual。
        this.m_requestInfo.referrer = ""; // https://javascript.info/fetch-api
        this.m_requestInfo.referrerPolicy = "no-referrer-when-downgrade"; // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy
        this.m_requestInfo.signal = this.m_abortController.signal; // https://davidwalsh.name/cancel-fetch （android 无法使用所以注释此功能）
    }

    /**
     * 请求 fetch
     * @param url {string} 链接 
     * @param method {HttpDefine.Method} 方法
     * @param body {BodyInit} 数据
     * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型 // 
     * @return {Promise<HttpInterface.ResponseInfo>}
     */
    public async request(url: string, method: HttpDefine.Method, body?: BodyInit, responseType?: XMLHttpRequestResponseType): Promise<HttpInterface.ResponseInfo> {
        this.m_url = url;
        this.m_method = method;
        if (responseType === null || responseType === undefined) {
            responseType = "text";
        }

        return new Promise((resolve: (data: HttpInterface.ResponseInfo) => void) => {
            Logger.getInstance().log(`${this.m_method} 请求 ${this.m_url}`);
            console.log(body);
            this.m_requestInfo.method = method;
            if (body !== null || body !== undefined) {
                this.m_requestInfo.body = body;
            }

            let data: HttpInterface.ResponseInfo = {
                state: null,
                body: null
            };

            this.startTimer();
            fetch(url, this.m_requestInfo).then(async (response: Response) => {
                this.stopTimer();
                Logger.getInstance().log(`${this.m_method} 响应 ${status}`);
                if (response.ok) {
                    data.state = HttpDefine.StateType.OK;
                    data.body = await this.getBodyByResponse(responseType, response);
                    console.log(data.body);
                } else {
                    data.state = HttpDefine.StateType.ERROR;
                    data.body = response.statusText;
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
        if (this.m_timer === null) {
            this.m_timer = setTimeout(() => {
                Logger.getInstance().warn(`${this.m_method} 超时 ${this.m_url}`);
                this.m_abortController.abort();
                this.m_timer = null;
            }, HttpDefine.TIMEOUT * 1000);
        }
    }

    /**
     * 停止定时器
     */
    private stopTimer(): void {
        if (this.m_timer !== null) {
            clearTimeout(this.m_timer);
            this.m_timer = null;
        }
    }

}