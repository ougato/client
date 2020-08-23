/*
 * @Author       : ougato
 * @Date         : 2020-08-22 18:32:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-24 06:57:43
 * @FilePath     : \client242\assets\src\core\manager\view\View.ts
 * @Description  : 封装视图类
 */

import { Order } from "../../../define/ViewDefine";

export class View {

    // 名字
    private m_name: string;
    // 相对路径
    private m_relpath: ViewDefineType;
    // 层级
    private m_order: Order;
    // 脚本
    private m_script: cc.Component;
    // 节点
    private m_node: cc.Node;

    constructor(node?: cc.Node) {
        if(node) {
            this.m_name = node.name;
            this.m_relpath = node.
        }
    }
}