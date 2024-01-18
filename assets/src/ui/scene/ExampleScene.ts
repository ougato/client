/*
 * Author       : ougato
 * Date         : 2021-12-13 10:31:14
 * LastEditors  : ougato
 * LastEditTime : 2024-01-18 10:18:00
 * FilePath     : /client/assets/src/ui/scene/ExampleScene.ts
 * Description  : 演示例子场景
 */

import BaseScene from "../../core/base/BaseScene";
import ListView from "../../core/component/ListView";
import { I18NDefine } from "../../core/define/I18NDefine";
import { RecordDefine } from "../../core/define/RecordDefine";
import MathUtils from "../../core/utils/MathUtils";
import NativeUtils from "../../core/utils/NativeUtils";
import TypeUtils from "../../core/utils/TypeUtils";
import InitializeScene from "./InitializeScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ExampleScene extends BaseScene {

    // 预制路径
    public static prefabPath: string = "prefab/scene/ExampleScene";

    @property({ type: ListView })
    private lsvExample: ListView = null;

    @property(cc.EditBox)
    private edbIndex: cc.EditBox = null;

    @property(cc.EditBox)
    private edbCount: cc.EditBox = null;

    @property(cc.Layout)
    private latout: cc.Layout = null;

    private index: number = 0;


    protected onLoad(): void {
        super.onLoad();

    }

    protected initUI(): void {
        let randomName: string[] = ["btn_clear", "img_title", "img_transfer Out", "img_transferIn"];
        for (let v of this.latout.node.children) {
            let sprite = v.getComponent(cc.Sprite);
            this.setSpriteLang(sprite, { name: randomName[MathUtils.random(0, randomName.length)] });
        }
    }

    private async clickJoin(): Promise<void> {
        // G.UIMgr.openScene({
        //     sceneClass: InitializeScene,
        // })
        // let index: number = Number(this.edbIndex.string);
        // if (isNaN(index)) {
        //     G.LogMgr.warn("下标不是一个数");
        //     return;
        // }
        // let count: number = Number(this.edbCount.string);
        // if (isNaN(index)) {
        //     G.LogMgr.warn("数量不是一个数");
        //     return;
        // }

        // let listData: string[] = [];
        // for (let i: number = 0; i < count; ++i) {
        //     listData.push((this.index++).toString());
        // }
        // this.lsvExample.insert(listData, index);
        // let content: string = await NativeUtils.getClipboard();
        // if (TypeUtils.isNull(content)) {
        //     G.UIMgr.openDialog({
        //         title: "提示",
        //         content: "请打开获取剪切板内容权限",

        //     })
        //     return;
        // }
        // this.edbIndex.string = content;
        G.LangMgr.switch(I18NDefine.Lang.af_ZA);
    }

    private cickDelete(): void {
        G.LangMgr.switch(I18NDefine.Lang.zh_CN);
        // let index: number = Number(this.edbIndex.string);
        // if (isNaN(index)) {
        //     G.LogMgr.warn("下标不是一个数");
        //     return;
        // }
        // let count: number = Number(this.edbCount.string);
        // if (isNaN(index)) {
        //     G.LogMgr.warn("数量不是一个数");
        //     return;
        // }
        // this.lsvExample.remove(index, count);

        // NativeUtils.setClipboard(this.edbCount.string);
        // G.RecordMgr.stop(RecordDefine.RecordType.VIDEO);
    }

    private onClickItem(node: cc.Node, data: string): void {
        G.LogMgr.color("点击列表项", "数据", data);
    }

    private pullLeft(): void {
        this.lsvExample.insert(++this.index, 0);
    }

    protected onClick<T>(ev: cc.Event.EventTouch, data?: T): void {
        switch (ev.target.name) {
            case "btnDelete":
                this.cickDelete();
                break;
            case "btnJoin":
                this.clickJoin();
                break;
        }
    }
}