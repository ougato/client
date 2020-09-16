/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:53:59
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-17 00:30:59
 * @FilePath     : \client242\assets\src\define\HttpDefine.ts
 * @Description  : Http 定义
 */

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export enum ContentType {
    JSON = 'application/json;charset=UTF-8',
    FROM = 'application/x-www-form-urlencoded; charset=UTF-8'
}

export enum StateType {
    OK = 0,
    ERROR = 1,
    TIMEOUT = 2,
}