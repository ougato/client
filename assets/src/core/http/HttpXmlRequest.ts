/*
 * @Author       : ougato
 * @Date         : 2020-10-21 18:00:36
 * @LastEditors  : ougato
 * @LastEditTime : 2020-11-12 00:48:14
 * @FilePath     : \client243\assets\src\core\http\HttpXmlRequest.ts
 * @Description  : 原生上不支持 fetch 的写法，只有默认使用 XMLHttpRequest
 */

import EventDefine from "../../define/EventDefine";
import * as HttpDefine from "../../define/HttpDefine";
import * as HttpInterface from "../../interface/HttpInterface";
import Logger from "../machine/Logger";
import EventManager from "../manager/event/EventManager";

export default class HttpXmlRequest implements HttpInterface.Method {

    // XMLHttpRequest 对象
    private m_xhr: XMLHttpRequest = null;
    // request 请求结果
    private m_requestResolve: (data: HttpInterface.ResponseInfo) => void = null;
    // 超时定时器
    private m_timer: NodeJS.Timeout = null;
    // 请求链接
    private m_url: string = null;
    // 请求方法
    private m_method: HttpDefine.Method = null;

    constructor() {
        this.m_xhr = new XMLHttpRequest();
        this.m_xhr.onabort = this.onAbort.bind(this);
        this.m_xhr.onerror = this.onError.bind(this);
        this.m_xhr.onload = this.onLoad.bind(this);
        this.m_xhr.onloadend = this.onLoadend.bind(this);
        this.m_xhr.onloadstart = this.onLoadstart.bind(this);
        this.m_xhr.onprogress = this.onProgress.bind(this);
        this.m_xhr.ontimeout = this.onTimeout.bind(this);
        this.m_xhr.onreadystatechange = this.onReadystatechange.bind(this);
    }

    /**
     * 请求 XMLHttpRequest
     * @param url {string} 链接 
     * @param method {HttpDefine.Method} 方法
     * @param body {BodyInit} 数据
     * @param responseType {XMLHttpRequestResponseType} 响应后的数据类型
     * @return {Promise<HttpInterface.ResponseInfo>}
     */
    public async request(url: string, method: HttpDefine.Method, body?: BodyInit, responseType?: XMLHttpRequestResponseType, requestHeader?: Map<string, string>): Promise<HttpInterface.ResponseInfo> {
        this.m_url = url;
        this.m_method = method;
        if (body === undefined) {
            body = null;
        }
        if (responseType === null || responseType === undefined) {
            responseType = "text";
        }

        return new Promise((resolve, reject) => {
            Logger.getInstance().log(`${this.m_method} 请求 ${this.m_url}`);
            console.log(body);

            this.m_requestResolve = resolve;

            this.m_xhr.open(method, url);
            this.m_xhr.setRequestHeader("Content-Type", "application/json");
            if (requestHeader) {
                requestHeader.forEach((value: string, key: string, map: Map<string, string>) => {
                    this.m_xhr.setRequestHeader(key, value);
                });
            }
            this.m_xhr.responseType = responseType;

            this.startTimer();
            this.m_xhr.send(body);
        }).then((data: HttpInterface.ResponseInfo) => {
            this.stopTimer();
            return data;
        })
    }

    /**
     * 清理 Promise
     */
    private clearPromise(): void {
        this.m_requestResolve = null;
    }

    /**
     * 开始定时器
     */
    private startTimer(): void {
        if (this.m_timer === null) {
            this.m_timer = setTimeout(() => {
                this.onTimeout();
                this.m_xhr.abort();
                this.m_timer = null;
            }, HttpDefine.TIMEOUT * 1000);
        }
    }

    /**
     * 停止定时器
     */
    private stopTimer(): void {
        if (this.m_timer !== null) {
            this.clearPromise();
            clearTimeout(this.m_timer);
            this.m_timer = null;
        }
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
     * 取消请求回调
     */
    private onAbort(): void {
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.ABORT,
            body: ""
        });
    }

    /**
     * 请求错误回调
     */
    private onError(): void {
        Logger.getInstance().log(`${this.m_method} 错误 ${this.m_url}`);
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.ERROR,
            body: ""
        });
        EventManager.getInstance().emit(EventDefine.HTTP_ERROR);
    }

    /**
     * 加载请求 回调
     * @param event {Event} 事件接收数据
     */
    private onLoad(): void {

    }

    /**
     * 请求完毕 回调
     */
    private onLoadend(): void {
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.OK,
            body: this.m_xhr.responseText,
        });
    }

    /**
     * 开始请求 回调
     */
    private onLoadstart(): void {

    }

    /**
     * 请求字节数 回调
     */
    private onProgress(): void {

    }

    /**
     * 请求超时 回调
     */
    private onTimeout(): void {
        Logger.getInstance().warn(`${this.m_method} 超时 ${this.m_url}`);
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.TIMEOUT,
            body: "",
        });
        EventManager.getInstance().emit(EventDefine.HTTP_TIMEOUT);
    }

    /**
     * 请求状态改变 回调
     */
    private onReadystatechange(): void {
        if (this.m_xhr.readyState === HttpDefine.ReadyState.DONE) {
            let responseInfo: HttpInterface.ResponseInfo;
            Logger.getInstance().log(`${this.m_method} 响应 ${this.m_xhr.status}`);
            if (this.m_xhr.status >= 200 && this.m_xhr.status <= 400) {
                console.log(this.m_xhr.response);
                responseInfo = {
                    state: HttpDefine.StateType.OK,
                    body: this.m_xhr.response,
                };
                if (responseInfo.body.code !== 20000) {
                    EventManager.getInstance().emit(EventDefine.HTTP_CODE_ERROR, responseInfo.body.message);
                }
            } else {
                responseInfo = {
                    state: HttpDefine.StateType.ERROR,
                    body: this.m_xhr.statusText,
                };
                EventManager.getInstance().emit(EventDefine.HTTP_ERROR);
            }

            this.m_requestResolve && this.m_requestResolve(responseInfo);
        }
    }
}