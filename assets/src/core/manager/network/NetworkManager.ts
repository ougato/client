/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:23
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-25 23:55:26
 * @FilePath     : \client242\assets\src\core\manager\network\NetworkManager.ts
 * @Description  : 网络管理器，用于游戏中长连接发送和接收网络数据
 */

import Manager from "../Manager";

export default class NetworkManager extends Manager implements ManagerInterface {

    private static s_instance: NetworkManager = null;

    public static getInstance(): NetworkManager {
        if (this.s_instance === null) {
            this.s_instance = new NetworkManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
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