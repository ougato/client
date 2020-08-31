/*
 * @Author       : ougato
 * @Date         : 2020-08-31 18:49:19
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-31 19:05:40
 * @FilePath     : \client242\assets\src\struct\DLinkListNode.ts
 * @Description  : 双向链表节点结构
 */

export default class DLinkListNode<T> {

    // 数据
    private m_data: T = null;
    // 上一个节点
    private m_prevNode: DLinkListNode<T> = null;
    // 下一个节点
    private m_nextNode: DLinkListNode<T> = null;


    constructor(data: T, prevNode: DLinkListNode<T>, nextNode: DLinkListNode<T>) {
        this.m_data = data;
        this.m_prevNode = prevNode;
        this.m_nextNode = nextNode;
    }

    /**
     * 获取数据
     * @return {T} 当前节点数据
     */
    public getData(): T {
        return this.m_data;
    }

    /**
     * 获取上一个节点
     * @return {DLinkListNode<T>} 上一个节点
     */
    public getPrevNode(): DLinkListNode<T> {
        return this.m_prevNode;
    }

    /**
     * 获取下一个节点
     * @return {DLinkListNode<T>} 下一个节点
     */
    public getNextNode(): DLinkListNode<T> {
        return this.m_nextNode;
    }

    /**
     * 设置上一个节点
     * @param node {DLinkListNode<T>} 上一个节点
     */
    public setPrevNode(node: DLinkListNode<T>): void {
        this.m_prevNode = node;
    }

    /**
     * 设置下一个节点
     * @param node {DLinkListNode<T>} 下一个节点
     */
    public setNextNode(node: DLinkListNode<T>): void {
        this.m_nextNode = node;
    }

}