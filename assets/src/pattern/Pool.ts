
/*
 * @Author       : ougato
 * @Date         : 2020-09-08 00:11:52
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-21 02:42:14
 * @FilePath     : \client242\assets\src\pattern\Pool.ts
 * @Description  : 对象池
 */

import Logger from "../core/machine/Logger";
import Factory from "./Factory";

export default class Pool<T extends PoolItemInterface> implements PoolInterface<T> {

    // 最大对象数量
    private m_maxSize: number = null;
    // 池子
    private m_poolList: T[] = null;

    constructor(private type: (new () => T), maxSize: number = 1024) {
        if (maxSize <= 0) {
            Logger.getInstance().error("对象池初始化最大容纳数量需大于0");
            return;
        }
        this.m_maxSize = maxSize;
        this.m_poolList = [];

        for (let i: number = 0; i < maxSize; ++i) {
            this.m_poolList.push(Factory.create(this.type));
        }
    }

    /**
     * 获取当前对象数量
     */
    public get size(): number {
        return this.m_poolList.length;
    }

    /**
     * 获取一个空闲对象
     * @return {T} 空闲对象
     */
    public get(): T {
        let isNew: boolean = false;
        if (this.m_poolList.length <= 0) {
            this.m_poolList.push(Factory.create(this.type));
            isNew = true;
        }
        let item: T = this.m_poolList.shift();

        if (!isNew) {
            item.clear();
        }
        return item;
    }

    /**
     * 放入空闲并初始化后的对象
     * @param obj {T} 空闲对象
     */
    public put(obj: T): void {
        if (obj !== null && obj !== undefined && obj instanceof this.type) {
            this.m_poolList.push(obj);
        }
    }

    /**
     * 清理池内多余对象
     */
    public clear(): void {
        if (this.m_poolList.length > this.m_maxSize) {
            let clearList: T[] = this.m_poolList.slice(this.m_maxSize, this.m_poolList.length);
            for (let i: number = 0; i < clearList.length; ++i) {
                let item: T = clearList[i];
                item.release();
            }
            clearList.length = 0;
        }
    }

    /**
     * 清理池内所有对象
     */
    public clearAll(): void {
        for (let i: number = 0; i < this.m_poolList.length; ++i) {
            let item: T = this.m_poolList[i];
            item.release();
        }
        this.m_poolList.length = 0;
    }

    /**
     * 销毁
     */
    public destroy(): void {
        this.clearAll();
        this.m_maxSize = null;
        this.m_poolList = null;
    }
}