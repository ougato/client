/*
 * Author       : ougato
 * Date         : 2021-07-07 01:38:17
 * LastEditors  : ougato
 * LastEditTime : 2023-07-19 14:22:51
 * FilePath     : /client/global.d.ts
 * Description  : 全局申明
 */

import Global from "./assets/src/core/Global";

declare global {

    interface Window {
        G: Global;
    }

    declare let G: Global = window.G;

    // 资源类型
    type AssetsType = typeof cc.Asset;
    // 长连接协议
    type WebSocketProtocol = "ws" | "wss";

}