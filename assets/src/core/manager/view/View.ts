/*
 * @Author       : ougato
 * @Date         : 2020-08-22 18:32:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-28 17:54:28
 * @FilePath     : \client242\assets\src\core\manager\view\View.ts
 * @Description  : 封装视图类
 */

import ViewDefine from "../../../define/ViewDefine";

export default class View {

    // 相对路径
    private m_relpath: string = null;
    // 脚本组件
    private m_script: any = null;
    // 节点
    private m_node: cc.Node = null;

    constructor(node: cc.Node) {
        let relpath: string = ViewDefine[node.name];
        if(relpath) {
            this.m_relpath = ViewDefine[node.name].toString();
        } else {
            this.m_relpath = "";
        }
        this.m_script = node.getComponent(node.name);
        this.m_node = node;
    }

    /**
     * 获取当前视图文件的相对路径
     * @return 相对路径
     */
    getPath(): string {
        return this.m_relpath;
    }

    /**
     * 获取绑定的脚本
     * @param name {string} 脚本名
     * @return 脚本绑定对象
     */
    getScript(name?: string): any {
        if (name) {
            return this.m_node.getComponent(name);
        } else {
            return this.m_script;
        }
    }

    /**
     * 获取当前节点
     * @return 实例化后的节点
     */
    getNode(): cc.Node {
        return this.m_node;
    }

}