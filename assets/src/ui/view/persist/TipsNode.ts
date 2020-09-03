/*
 * @Author       : ougato
 * @Date         : 2020-08-30 17:59:51
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 00:04:47
 * @FilePath     : \client242\assets\src\ui\view\persist\TipsNode.ts
 * @Description  : 向上飘动文字提示
 */

import UIComponent from "../UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TipsNode extends UIComponent implements PersistInterface {

    protected start(): void {

    }

    /**
     * 打开提示界面
     * @param content {string} 内容
     */
    public open(content: string): void {

    }

    /**
     * 关闭提示界面
     */
    public close(): void {

    }

}
