/*
 * Author       : ougato
 * Date         : 2024-01-12 19:24:11
 * LastEditors  : ougato
 * LastEditTime : 2024-01-12 19:28:32
 * FilePath     : /client/assets/src/interface/NodeInterface.ts
 * Description  : 节点接口
 */

export namespace NodeInterface {

    /**
     * 节点扩展接口
     */
    export interface NodeExtend extends cc.Node {
        _touchListener: any;
    }

}