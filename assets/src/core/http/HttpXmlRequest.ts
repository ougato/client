/*
 * Author       : ougato
 * Date         : 2020-10-21 18:00:36
 * LastEditors  : ougato
 * LastEditTime : 2021-10-30 02:51:42
 * FilePath     : /client/assets/src/core/http/HttpXmlRequest.ts
 * Description  : 原生上不支持 fetch 的写法，只有默认使用 XMLHttpRequest
 */

import * as EventDefine from "../define/EventDefine";
import * as HttpDefine from "../define/HttpDefine";
import * as HttpInterface from "../interface/HttpInterface";

export default class HttpXmlRequest implements HttpInterface.Http {

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
    // 等待界面定时器
    private m_waitingTimer: NodeJS.Timeout = null;

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
     * @param body {XMLHttpRequestBodyInit} 数据
     * @param param {HttpInterface.RequestParam} 请求参数
     * @return {Promise<HttpInterface.ResponseInfo>}
     */
    public async request(url: string, method: HttpDefine.Method, body?: XMLHttpRequestBodyInit, param?: HttpInterface.RequestParam): Promise<HttpInterface.ResponseInfo> {
        this.m_url = url;
        this.m_method = method;

        if (body === undefined) {
            body = null;
        }

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


        return new Promise((resolve, reject) => {
            G.LogMgr.log(`${this.m_method} 请求 ${this.m_url}`);
            G.LogMgr.log(body);

            this.m_requestResolve = resolve;

            this.m_xhr.open(method, url);

            this.m_xhr.responseType = param.responseType;
            param.requestHeader.forEach((value: string, key: HttpDefine.RequestHeader, map: Map<HttpDefine.RequestHeader, string>) => {
                this.m_xhr.setRequestHeader(key, value);
            });

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
     * 启动等待界面定时器
     */
    private startWaitingTimer(): void {
        this.stopWaitingTimer();
        G.UIMgr.openLockScreen();
        this.m_waitingTimer = setTimeout(() => {
            G.UIMgr.openWaiting();
        }, HttpDefine.WAITING_TIMEOUT * 1000);
    }

    /**
     * 停止等待界面定时器
     */
    private stopWaitingTimer(): void {
        if (this.m_waitingTimer !== null && this.m_waitingTimer !== undefined) {
            clearTimeout(this.m_waitingTimer);
            this.m_waitingTimer = null;
            G.UIMgr.closeLockScreen();
            G.UIMgr.closeWaiting();
        }
    }

    /**
     * 取消请求回调
     * 当调用 xhr.abort() 后触发
     */
    private onAbort(): void {
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.ABORT,
            body: null
        });
    }

    /**
     * 请求错误回调
     * 在请求过程中，若发生 Network error 则会触发此事件（若发生 Network error 时，上传还没有结束，则会先触发 xhr.upload.onerror，再触发 xhr.onerror；
     * 若发生 Network error 时，上传已经结束，则只会触发 xhr.onerror）。
     * 注意，只有发生了网络层级别的异常才会触发此事件，对于应用层级别的异常，如响应返回的 xhr.statusCode 是 4xx 时，并不属于 Network error，所以不会触发 onerror 事件，而是会触发 onload 事件。
     */
    private onError(): void {
        G.LogMgr.log(`${this.m_method} 错误 ${this.m_url}`);
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.ERROR,
            body: null
        });
        G.EventMgr.emit(EventDefine.NetEvent.NET_HTTP_ERROR);
    }

    /**
     * 加载请求 回调
     * 当请求成功完成时触发，此时 xhr.readystate = 4
     * @param event {Event} 事件接收数据
     */
    private onLoad(): void {

    }

    /**
     * 请求完毕 回调
     * 当请求结束（包括请求成功和请求失败）时触发
     */
    private onLoadend(): void {
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.OK,
            body: null
        });
        this.stopWaitingTimer();
    }

    /**
     * 开始请求 回调
     * 调用 xhr.send() 方法后立即触发，若 xhr.send() 未被调用则不会触发此事件。
     */
    private onLoadstart(): void {
        this.startWaitingTimer();
    }

    /**
     * 请求字节数 回调
     * xhr.upload.onprogress 在上传阶段(即 xhr.send() 之后，xhr.readystate = 2 之前)触发，每 50ms 触发一次；
     * xhr.onprogress 在下载阶段（即 xhr.readystate = 3 时）触发，每 50ms 触发一次。
     */
    private onProgress(): void {

    }

    /**
     * 请求超时 回调
     * xhr.timeout 不等于 0，由请求开始即 onloadstart 开始算起，当到达 xhr.timeout 所设置时间请求还未结束即 onloadend，则触发此事件。
     */
    private onTimeout(): void {
        G.LogMgr.warn(`${this.m_method} 超时 ${this.m_url}`);
        this.m_requestResolve && this.m_requestResolve({
            state: HttpDefine.StateType.TIMEOUT,
            body: null,
        });
        G.EventMgr.emit(EventDefine.NetEvent.NET_HTTP_TIMEOUT);
    }

    /**
     * 请求状态改变 回调
     * 每当 xhr.readyState 改变时触发；但 xhr.readyState 由非 0 值变为 0 时不触发。
     */
    private onReadystatechange(): void {
        if (this.m_xhr.readyState === HttpDefine.ReadyState.DONE) {
            let responseInfo: HttpInterface.ResponseInfo;
            G.LogMgr.log(`${this.m_method} 响应 ${this.m_xhr.status}`);
            if (this.m_xhr.status >= 200 && this.m_xhr.status <= 400) {
                G.LogMgr.log(this.m_xhr.response);
                responseInfo = {
                    state: HttpDefine.StateType.OK,
                    body: this.m_xhr.response,
                };
                if (responseInfo.body.code !== 0) {
                    G.EventMgr.emit(EventDefine.NetEvent.NET_HTTP_CODE_ERROR, responseInfo.body.msg);
                }
            } else {
                responseInfo = {
                    state: HttpDefine.StateType.ERROR,
                    body: null,
                };
                G.EventMgr.emit(EventDefine.NetEvent.NET_HTTP_ERROR);
            }

            this.m_requestResolve && this.m_requestResolve(responseInfo);
        }
    }
}