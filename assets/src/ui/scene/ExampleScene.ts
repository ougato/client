/*
 * Author       : ougato
 * Date         : 2021-12-13 10:31:14
 * LastEditors  : ougato
 * LastEditTime : 2022-11-10 13:51:47
 * FilePath     : /client/assets/src/ui/scene/ExampleScene.ts
 * Description  : 演示例子场景
 */

import BaseScene from "../../core/base/BaseScene";
import ListView from "../../core/component/ListView";
import NativeUtils from "../../core/utils/NativeUtils";

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

    private index: number = 0;


    protected onLoad(): void {
        super.onLoad();

    }

    private onClickInsert(): void {
        let index: number = Number(this.edbIndex.string);
        if (isNaN(index)) {
            G.LogMgr.warn("下标不是一个数");
            return;
        }
        let count: number = Number(this.edbCount.string);
        if (isNaN(index)) {
            G.LogMgr.warn("数量不是一个数");
            return;
        }

        let listData: string[] = [];
        for (let i: number = 0; i < count; ++i) {
            listData.push((this.index++).toString());
        }
        this.lsvExample.insert(listData, index);

        NativeUtils.getClipboard();
    }

    private onClickRemove(): void {
        let index: number = Number(this.edbIndex.string);
        if (isNaN(index)) {
            G.LogMgr.warn("下标不是一个数");
            return;
        }
        let count: number = Number(this.edbCount.string);
        if (isNaN(index)) {
            G.LogMgr.warn("数量不是一个数");
            return;
        }
        this.lsvExample.remove(index, count);

        NativeUtils.setClipboard(this.edbCount.string);
    }

    private onClickItem(node: cc.Node, data: string): void {
        G.LogMgr.color("点击列表项", "数据", data);
    }

    private pullLeft(): void {
        this.lsvExample.insert(++this.index, 0);
    }
}