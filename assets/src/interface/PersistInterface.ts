/*
 * @Author       : ougato
 * @Date         : 2020-09-04 00:02:08
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-08 01:50:57
 * @FilePath     : \client242\assets\src\interface\PersistInterface.ts
 * @Description  : 常驻节点约束接口
 */

interface PersistInterface {
    open(...args: any[]): void;
    close(): void;
}