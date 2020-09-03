/*
 * @Author       : ougato
 * @Date         : 2020-08-31 00:42:13
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 00:38:07
 * @FilePath     : \client242\assets\src\ui\scene\AccountScene.ts
 * @Description  : 
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ViewDefine from "../../define/ViewDefine";
import { AudioDefine } from "../../define/AudioDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let arr: AssetsPathDefineType = [
            ViewDefine.Test1,
            ViewDefine.Test2,
            AudioDefine.CLICK,
        ]
        G.Loader.preload(arr, (items: cc.AssetManager.RequestItem[]) => {
            console.log(items);
            console.log("完成");
        }, (percent: number) => {
            G.Loader.load(arr);
        });
    }

    // update (dt) {}
}
