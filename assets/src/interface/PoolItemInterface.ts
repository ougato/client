/*
 * @Author       : ougato
 * @Date         : 2020-09-08 01:47:07
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 01:28:53
 * @FilePath     : \client242\assets\src\interface\PoolItemInterface.ts
 * @Description  : 池内对象接口
 */
interface PoolItemInterface {
    clear(): void;
    release(): void;
}