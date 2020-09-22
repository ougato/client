/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-23 01:30:58
 * @FilePath     : \client242\assets\src\core\http\Http.ts
 * @Description  : Http 请求对象
 */

import * as HttpDefine from "../../define/HttpDefine";
import * as HttpInterface from "../../interface/HttpInterface";

// 超时时间（单位：秒）
const TIMEOUT : number = 10;

export default class Http implements HttpInterface.Method {

    // 取消控制器
    private m_abortController: AbortController = null;
    // 请求信息
    private m_requestInfo: RequestInit = null;
    // 超时定时器
    private m_timer: number = null;

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
        this.m_requestInfo.signal = this.m_abortController.signal; // https://davidwalsh.name/cancel-fetch
    }

    /**
     * 请求 fetch
     * @param url {string} 链接 
     * @param method {HttpDefine.Method} 方法
     * @param body {BodyInit} 数据
     * @return {Promise<HttpInterface.ResponseInfo>}
     */
    public async request(url: string, method: HttpDefine.Method, body?: BodyInit): Promise<HttpInterface.ResponseInfo> {
        return new Promise((resolve: (data: HttpInterface.ResponseInfo) => void) => {
            this.startTimer();
            this.m_requestInfo.method = method;
            if (body !== null || body !== undefined) {
                this.m_requestInfo.body = body;
            }

            let data: HttpInterface.ResponseInfo = {
                state: null,
                body: null
            };

            fetch(url, this.m_requestInfo).then(async (response: Response) => {
                this.stopTimer();
                if (response.ok) {
                    data.state = HttpDefine.StateType.OK;
                    data.body = await this.transBody(response);
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
     * 转换收到的 body 数据
     * @param response {Response} 收到数据
     * @return {Promise<BodyInit>}
     */
    private async transBody(response: Response): Promise<BodyInit> {
        let type: string = response.headers.get("Content-Type");
        if (type && type.length > 0) {
            if (type.indexOf('json') > -1) {
                return await response.json();
            }
            if (type.indexOf('text') > -1) {
                return await response.text();
            }
            if (type.indexOf('form') > -1) {
                return await response.formData();
            }
            if (type.indexOf('video') > -1) {
                return await response.blob();
            }
        }
        return await response.text();
    }


    /**
     * 开始定时器
     */
    private startTimer(): void {
        if (this.m_timer === null) {
            this.m_timer = setTimeout(() => {
                this.m_abortController.abort();
                this.m_timer = null;
            }, TIMEOUT * 1000);
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