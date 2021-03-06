/*
 * @Author       : ougato
 * @Date         : 2020-09-01 23:20:29
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-15 02:37:24
 * @FilePath     : \client242\assets\src\test\Test2.ts
 * @Description  : 
 */

import UIComponent from "../ui/UIComponent";
import AudioDefine, { DynamicEffectDefine, DynamicMusicDefine } from "../define/AudioDefine";
import Loader from "../core/machine/Loader";
import AudioManager from "../core/manager/audio/AudioManager";
import ViewDefine from "../define/ViewDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Test2 extends UIComponent implements UIInterface<string> {

    private m_effect: DynamicEffectDefine = AudioDefine.EFFECT3;
    private m_music: DynamicMusicDefine = AudioDefine.MUSIC13;
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

    public onLanguage(): void {

    }

    public refresh(data: string): void {
        this.label.string = data;
        this.data = data;
    }

    // private onClick(): void {
    //     // G.UIMgr.openView(ViewDefine.Test1, "Test1 call", () => {
    //     //     console.log("完成Test1");
    //     // }, null, ViewStyleDefine.FADE);
    //     G.AudioMgr.playMusic(AudioDefine.MUSIC13);
    // }

    // private onClickClose(): void {
    //     G.AudioMgr.stopMusic();
    //     // let a: cc.Asset = G.Loader.getCache(AudioDefine.EFFECT3);
    //     // let b: cc.Asset = G.Loader.getCache("123456");
    //     // console.log(a);
    //     // console.log(b);
    //     // G.AudioMgr.pauseEffect(AudioDefine.EFFECT1);
    //     // G.UIMgr.closeView(ViewDefine.Test2, false, () => {
    //     //     console.log("关闭Test2");
    //     // }, ViewStyleDefine.FADE);
    // }

    private onClickPlayEffect(): void {
        G.AudioMgr.playEffect(this.m_effect, true);

        let audioPath: AudioDefineType = AudioDefine.CLICK;
        G.Loader.preload(audioPath, (items: cc.AssetManager.RequestItem[]) => {
            // 完成后的回调
        }, (percent: number) => {
            // 百分比回调
        });

        let viewPaths: ViewDefineType[] = [];
        viewPaths.push(ViewDefine.Test1);
        viewPaths.push(ViewDefine.Test1);
        G.Loader.preload(audioPath, (items: cc.AssetManager.RequestItem[]) => {
            // 完成后的回调
        }, (percent: number) => {
            // 百分比回调
        });
    }

    private onClickStopEffect(): void {
        G.AudioMgr.stopEffect(this.m_effect);
    }

    private onClickPauseEffect(): void {
        G.AudioMgr.pauseEffect(this.m_effect);
    }

    private onClickResumeEffect(): void {
        G.AudioMgr.resumeEffect(this.m_effect);
    }

    private onClickPlayMusic(): void {
        G.AudioMgr.playMusic(this.m_music);
    }

    private onClickStopMusic(): void {
        G.AudioMgr.stopMusic();
    }

    private onClickPauseMusic(): void {
        G.AudioMgr.pauseMusic();
    }

    private onClickResumeMusic(): void {
        G.AudioMgr.resumeMusic();
    }

    private onClickPrint(): void {
        Loader.getInstance().print();
    }

    private onClickDestroy(): void {
        AudioManager.destroy();
    }

    // update (dt) {}
}
