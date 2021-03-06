/*
 * @Author       : ougato
 * @Date         : 2020-09-08 00:39:21
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-21 02:42:23
 * @FilePath     : \client242\assets\src\pattern\Factory.ts
 * @Description  : 简单工厂类
 */

export default class Factory {

    /**
     * 创建
     * @param cls {T} 类
     * @return {T} 实例化对象
     */
    public static create<T>(cls: (new () => T)): T {
        return new cls();
    }

}