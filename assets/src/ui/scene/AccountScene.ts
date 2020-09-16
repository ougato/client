/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-16 23:52:44
 * @FilePath     : \client242\assets\src\ui\scene\AccountScene.ts
 * @Description  : 
 */
import UIComponent from "../UIComponent";
import ViewDefine from "../../define/ViewDefine";
import ViewStyleDefine from "../../define/ViewStyleDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends UIComponent {

    protected onLoad(): void {
        this.initData();
        this.initView();
    }

    protected start(): void {

    }

    /**
     * 初始化数据
     */
    private initData(): void {

    }

    /**
     * 初始化视图
     */
    private initView(): void {

    }

    private async setTimeout1(): Promise<void> {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("11111");
                reject();
            }, 2000);
        });
    }

    private async setTimeout2(): Promise<void> {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("2222");
            }, 4000);
        });
    }

    /**
     * 点击释放
     */
    private onClickRelease():void {
        Promise.race([this.setTimeout1(), this.setTimeout2()]).then(()=>{
            console.log("then");
        }).catch(()=>{
            console.log("catch");
        });

        // WxHttp.post();
        // G.UIMgr.openView(ViewDefine.Test1);
    }

}