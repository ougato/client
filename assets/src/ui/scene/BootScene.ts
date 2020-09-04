/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-05 01:12:42
 * @FilePath     : \client242\assets\src\ui\scene\BootScene.ts
 * @Description  : 程序启动入口
 */

import Global from "../../core/Global";
import SceneDefine from "../../define/SceneDefine";
import UIComponent from "../UIComponent";
import { DynamicEffectDefine } from "../../define/AudioDefine";
import { CustomViewDefine } from "../../define/ViewDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends UIComponent {

    @property({ type: cc.Node, tooltip: "加载节点" })
    private loadingNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: "进度节点" })
    private progressNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: "禁止点击节点" })
    private lockTouchNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: "弹窗节点" })
    private popupsNode: cc.Node = null;

    @property({ type: cc.Node, tooltip: "向上飘动提示节点" })
    private tipsNode: cc.Node = null;


    constructor() {
        super();
        // 初始化全局变量
        this.initGlobal();

    }

    protected onLoad(): void {

    }

    protected start() {
        this.register();
        this.initData();
        this.initView();

        this.asyncLaunchDepend();
    }

    /**
     * 注册消息
     */
    private register(): void {

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
        G.UIMgr.initLoading(this.loadingNode);
        G.UIMgr.initProgress(this.progressNode);
        G.UIMgr.initLockTouch(this.lockTouchNode);
        G.UIMgr.initPopups(this.popupsNode);
        G.UIMgr.initTips(this.tipsNode);
    }

    /**
     * 初始化启动依赖
     */
    private async asyncLaunchDepend(): Promise<void> {
        await this.asyncLoadSDK();
        if (await this.asyncCheckUpdate()) {
            // G.UIMgr.openPopups()
            this.intoUpdate();
        } else {
            this.intoGame();
        }
    }

    /**
     * 加载 SDK
     */
    private async asyncLoadSDK(): Promise<void> {
        return new Promise((resolve: (value?: void) => void, reject: (reason?: any) => void) => {
            resolve();
        });
    }

    /**
     * 检测程序更新
     * @return {boolean} 是否需要更新
     */
    private async asyncCheckUpdate(): Promise<boolean> {
        return new Promise((resolve: (value?: boolean) => void, reject: (reason?: any) => void) => {
            let isUpdate: boolean = false;
            if (cc.sys.isNative) {
                isUpdate = true;
            }
            resolve(isUpdate);
        })
    }

    /**
     * 初始化全局模块
     */
    private initGlobal(): void {
        Global.getInstance().init();
    }

    /**
     * 进入更新
     */
    private intoUpdate(): void {

    }

    /**
     * 进入游戏
     */
    private intoGame(): void {
        let arr: string[] = [];
        for (let value in DynamicEffectDefine) {
            arr.push(DynamicEffectDefine[value]);
        }
        for (let value in CustomViewDefine) {
            arr.push(CustomViewDefine[value]);
        }
        G.UIMgr.openScene(SceneDefine.AccountScene, 4141, null, null, arr);
    }

}
