/*
 * @Author       : ougato
 * @Date         : 2020-09-01 23:20:29
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 02:18:20
 * @FilePath     : \client242\assets\src\test\Test2.ts
 * @Description  : 
 */

import UIComponent from "../ui/UIComponent";
import AudioDefine from "../define/AudioDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Test2 extends UIComponent implements UIInterface<string> {

    public data: string = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    onLoad() {

    }

    start() {
        if (this.data !== null && this.data !== undefined) {
            this.label.string = this.data;
        }
    }

    public refresh(data: string): void {
        this.label.string = data;
        this.data = data;
    }

    private onClick(): void {
        // G.UIMgr.openView(ViewDefine.Test1, "Test1 call", () => {
        //     console.log("完成Test1");
        // }, null, ViewStyleDefine.FADE);
        G.AudioMgr.playEffect(AudioDefine.EFFECT2);
    }

    private onClickClose(): void {
        G.AudioMgr.playMusic(AudioDefine.MUSIC13);
        // let a: cc.Asset = G.Loader.getCache(AudioDefine.EFFECT3);
        // let b: cc.Asset = G.Loader.getCache("123456");
        // console.log(a);
        // console.log(b);
        // G.AudioMgr.pauseEffect(AudioDefine.EFFECT1);
        // G.UIMgr.closeView(ViewDefine.Test2, false, () => {
        //     console.log("关闭Test2");
        // }, ViewStyleDefine.FADE);
    }

    // update (dt) {}
}
