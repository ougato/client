/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-24 02:54:26
 * @FilePath     : \client242\assets\src\ui\scene\AccountScene.ts
 * @Description  : 
 */
import UIComponent from "../UIComponent";
import ViewDefine from "../../define/ViewDefine";
import ViewStyleDefine from "../../define/ViewStyleDefine";
import HttpRequest from "../../core/http/HttpRequest";
import * as HttpInterface from "../../interface/HttpInterface";
import Http from "../../core/http/Http";
import EventDefine from "../../define/EventDefine";
import * as Login from "../../protobuf/Login";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AccountScene extends UIComponent {

    private m_index = 0;

    protected onLoad(): void {
        this.initData();
        this.initView();
    }

    protected start(): void {
        let signIn = {
            user: "ougato",
            password: "qq123456"
        }
        let login = Login.C2SSignIn.create(signIn);
        let buffer = Login.C2SSignIn.encode(login).finish();
        console.log(buffer);
    }

    private onCallback(): void {
        console.log("李四");
        console.log(this.m_index);
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
        G.NetMgr.connect("ws", "123.207.136.134", 9010);
        // let res: HttpInterface.ResponseInfo = await HttpRequest.get<Http>("https://www.baifuba.com/callback?cmd=1059&call1ack=phone&phone=150855513610", Http);
        // this.m_index++;
        // console.log(res, this.m_index);

        // WxHttp.post();
        // G.UIMgr.openView(ViewDefine.Test1);
    }

}