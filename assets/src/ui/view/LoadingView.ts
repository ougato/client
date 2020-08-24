/*
 * @Author       : ougato
 * @Date         : 2020-08-23 17:27:05
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-25 02:07:25
 * @FilePath     : \client242\assets\src\ui\view\LoadingView.ts
 * @Description  : 加载视图
 */

import { BaseView } from "./BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingView extends BaseView {

    // 转动提示
    private m_content: string = "";

    start() {

    }

    open(content?: string):void {
        
    }

}