/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-21 02:43:28
 * @FilePath     : \client242\assets\src\ui\scene\AccountScene.ts
 * @Description  : 
 */
import UIComponent from "../UIComponent";
import ViewDefine from "../../define/ViewDefine";
import ViewStyleDefine from "../../define/ViewStyleDefine";
import HttpRequest from "../../core/http/HttpRequest";
import * as HttpInterface from "../../interface/HttpInterface";
import Http from "../../core/http/Http";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends UIComponent {

    private m_index = 0;

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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("11111");
                reject();
            }, 2000);
        });
    }

    private async setTimeout2(): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("2222");
            }, 4000);
        });
    }

    /**
     * 点击释放
     */
    private async onClickRelease(): Promise<void> {
        let res: HttpInterface.ResponseInfo = await HttpRequest.get<Http>("https://www.baifuba.com/callback?cmd=1059&call1ack=phone&phone=150855513610", Http);
        this.m_index++;
        console.log(res, this.m_index);

        // WxHttp.post();
        // G.UIMgr.openView(ViewDefine.Test1);
    }

}