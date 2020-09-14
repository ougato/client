/*
 * @Author       : ougato
 * @Date         : 2020-09-01 23:20:29
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-15 02:37:38
 * @FilePath     : \client242\assets\src\test\Test1.ts
 * @Description  : 
 */

import UIComponent from "../ui/UIComponent";
import ViewDefine from "../define/ViewDefine";
import ViewStyleDefine from "../define/ViewStyleDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Test1 extends UIComponent implements UIInterface<string> {

    public data: string = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.data !== null && this.data !== undefined) {
            this.label.string = this.data;
        }
    }

    start() {

    }

    public onLanguage(): void {

    }

    public refresh(data: string): void {
        this.label.string = data;
        this.data = data;
    }

    private onClick(): void {
        G.UIMgr.openView(ViewDefine.Test2, "Test2 call", () => {
            console.log("完成Test2");
        }, null, ViewStyleDefine.FADE);
    }

    private onClickClose(): void {
        G.UIMgr.closeView(ViewDefine.Test1, true, () => {
            console.log("关闭Test1");
        }, ViewStyleDefine.FADE);
    }
    // update (dt) {}
}
