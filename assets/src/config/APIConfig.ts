/*
 * Author       : ougato
 * Date         : 2021-10-30 23:42:45
 * LastEditors  : ougato
 * LastEditTime : 2021-12-03 17:43:53
 * FilePath     : /client/assets/src/config/APIConfig.ts
 * Description  : Http 的 API 配置
 */

export namespace APIConfig {

    // 登陆
    export const LOGIN: string = "/login";
    // 获取设备唯一码
    export const GET_UUID: string = "/user/device";
    // 获取长链接
    export const GET_WEBSOCKET_URL: string = "/line/lines/xiuxian";
    // 获取最新校验码
    export const GET_TOKEN: string = "/refreshToken";

}