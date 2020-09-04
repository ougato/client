/*
 * @Author       : ougato
 * @Date         : 2020-08-25 09:41:45
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 23:18:34
 * @FilePath     : \client242\assets\src\ui\view\update\UpdateView.ts
 * @Description  : 热更新界面
 */

import UIComponent from "../../UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UpdateView extends UIComponent implements UIInterface<any> {

    // 数据
    public data: any = null;

    protected start(): void {

    }

    // 刷新视图
    public refresh(data: any): void {

    }
}