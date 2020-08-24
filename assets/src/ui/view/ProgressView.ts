/*
 * @Author       : ougato
 * @Date         : 2020-08-24 09:33:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-24 17:51:47
 * @FilePath     : \client242\assets\src\ui\view\ProgressView.ts
 * @Description  : 加载进度视图
 */
import { BaseView } from "./BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProgressView extends BaseView {

    start() {

    }

    
    private onClickRelease(): void {
        G.ViewMgr.releasePersistView();
    }

}