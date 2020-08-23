/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:23
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-17 10:45:47
 * @FilePath     : \client\assets\src\core\manager\network\NetworkManager.ts
 * @Description  : 网络管理器，用于游戏中长连接发送和接收网络数据
 */

import { Manager } from "../Manager";

export class NetworkManager extends Manager implements IManager {

    private static g_instance: NetworkManager = null;
    
    public static getInstance(): NetworkManager {
        if (this.g_instance === null) {
            this.g_instance = new NetworkManager();
        }
        return this.g_instance;
    }

    public static destroy(): void {
        if (this.g_instance !== null) {
            this.g_instance.destroy();
        }
        this.g_instance = null;
    }
    
    constructor() {
        super();

    }

    /**
     * 销毁
     */
    public destroy(): void {

    }
    
}