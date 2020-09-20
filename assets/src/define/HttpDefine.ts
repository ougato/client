/*
 * @Author       : ougato
 * @Date         : 2020-09-16 23:53:59
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-21 01:38:19
 * @FilePath     : \client242\assets\src\define\HttpDefine.ts
 * @Description  : Http 定义
 */

export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    HEAD = "HEAD",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    CONNECT = "CONNECT",
    LINK = "LINK",
    UNLINE = "UNLINE",
    
}

export enum ContentType {
    JSON = "application/json;charset=UTF-8",
    FROM = "application/x-www-form-urlencoded;charset=UTF-8",
}

export enum StateType {
    OK = 0,
    ERROR = 1,
    TIMEOUT = 2,
}