/*
 * @Author       : ougato
 * @Date         : 2020-09-08 00:48:37
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-08 01:41:46
 * @FilePath     : \client242\assets\src\interface\PoolInterface.ts
 * @Description  : 对象池约束接口
 */

interface PoolInterface<T> {
    readonly size: number;
    get(): T;
    put(obj: T): void;
    clear(): void;
}