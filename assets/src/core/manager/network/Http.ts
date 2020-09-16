/*
 * @Author       : ougato
 * @Date         : 2020-09-15 23:51:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-17 01:26:05
 * @FilePath     : \client242\assets\src\core\manager\network\Http.ts
 * @Description  : Http 对外接口
 */

import * as HttpInterface from "../../../interface/HttpInterface";
import * as HttpDefine from "../../../define/HttpDefine";

export default class Http {

    // 请求次数下标
    private static s_index = 0;

    constructor() {

    }

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
     * 请求接口
     */
    protected static async request<T>(url: string, info: HttpInterface.RequestInfoInerface<T>): Promise<BodyInit | HttpDefine.StateType> {



        // export const baseUrl = '/'

        // let promise: Response
        // let contentType: string
        // if (config['Content-Type'] !== undefined) {
        //     contentType = config['Content-Type']
        // } else if (config.method === HttpMethod.post) {
        //     contentType = ContentType.form
        // } else {
        //     contentType = ContentType.json
        // }
        // const reqUrl = (baseUrl + url).replace('//', '/')
        // const headers: Headers = new Headers({
        //     // 如果实例配置没传token过来的话，直接使用保存在sessionStorage的token
        //     // 这里假设后端直接读头文件的token字段，我直接用token当字段了，Authorization也同理
        //     token: config.token === undefined ? sessionStorage.token : config.token,
        //     'Content-Type': contentType
        // } as IHeader)
        // if (!config.method || config.method === HttpMethod.get) {
        //     promise = await fetch(reqUrl, {
        //         headers
        //     })
        // } else if (config.method === HttpMethod.post) {
        //     promise = await fetch(reqUrl, {
        //         body: JSON.stringify(config.body),
        //         headers,
        //         method: HttpMethod.post
        //     })
        // } else {
        //     promise = await fetch(reqUrl, {
        //         body: JSON.stringify(config.body),
        //         headers,
        //         method: config.method
        //     })
        // }


        // return handleRes(promise)

        // const handleRes = async (res: Response) => {
        //     const parsedRes = await parseRes(res)
        //     // 如果res.ok，则请求成功
        //     if (res.ok) {
        //         return parsedRes
        //     }
        //     // 请求失败，返回解析之后的失败的数据
        //     const error = parsedRes
        //     throw error
        // }

        // const parseRes = async (res: Response) => {
        //     const contentType = res.headers.get('Content-Type')
        //     // 判定返回的内容类型，做不同的处理
        //     if (contentType) {
        //         if (contentType.indexOf('json') > -1) {
        //             return await res.json()
        //         }
        //         if (contentType.indexOf('text') > -1) {
        //             return await res.text()
        //         }
        //         if (contentType.indexOf('form') > -1) {
        //             return await res.formData()
        //         }
        //         if (contentType.indexOf('video') > -1) {
        //             return await res.blob()
        //         }
        //     }
        //     return await res.text()
        // }
    }

    /**
     * GET 请求
     * @param url {string} 请求链接
     * @param callback {(data: HttpInterface.ResponseDataInterface<T>) => void} 请求完成后回调
     */
    public static get(url: string, callback?: (data: HttpInterface.ResponseDataInterface) => void): void {
        if (!this.checkLegal(url)) {
            console.warn(`GET 请求 ${url} 错误`);
            return;
        }

        let requestInfo: HttpInterface.RequestInfoInerface<void> = {
            method: HttpDefine.HttpMethod.GET,
        }
        let responseData: HttpInterface.ResponseDataInterface;
        this.request<void>(url, requestInfo).then((body: BodyInit) => {
            responseData.state = HttpDefine.StateType.OK;
            responseData.body = body;
            if (callback) {
                callback(responseData);
            }
        }).catch((state: HttpDefine.StateType) => {
            responseData.state = state;
            if (callback) {
                callback(responseData);
            }
        });
    }

    public static post(url: string, body: BodyInit, callback?: (data: HttpInterface.ResponseDataInterface) => void): void {

    }
}