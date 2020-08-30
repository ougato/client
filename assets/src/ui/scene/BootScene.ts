/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 20:56:06
 * @FilePath     : \client242\assets\src\ui\scene\BootScene.ts
 * @Description  : 程序启动入口
 */

import Global from "../../core/Global";
import SceneDefine from "../../define/SceneDefine";
import UIComponent from "../view/UIComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends UIComponent {

    @property({ type: cc.Node, tooltip: "加载视图" })
    private loadingView: cc.Node = null;

    @property({ type: cc.Node, tooltip: "进度视图" })
    private progressView: cc.Node = null;

    @property({ type: cc.Node, tooltip: "触摸锁定视图" })
    private lockScreenView: cc.Node = null;

    @property({ type: cc.Node, tooltip: "弹窗视图" })
    private popupsView: cc.Node = null;

    @property({ type: cc.Node, tooltip: "向上飘动提示" })
    private tipsView: cc.Node = null;


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
        G.UIMgr.initLoadingView(this.loadingView);
        G.UIMgr.setProgressView(this.progressView);
        G.UIMgr.setLockScreenView(this.lockScreenView);
        G.UIMgr.setPopupsView(this.popupsView);
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

    }

    private onClickLoading(): void {
        let arr: Function[] = [];
        // arr.push(() => {
        //     G.UIMgr.openLockScreen();
        // });
        // arr.push(() => {
        //     G.UIMgr.openLoading("网络不行了");
        // });
        // arr.push(() => {
        //     G.UIMgr.openProgress()
        //     G.UIMgr.setProgress(100);
        // });
        // arr.push(() => {
        //     G.UIMgr.openPopups("键盘侠你好啊", "标题党", () => {
        //         console.log("点击确定按钮");
        //     });
        // })

        arr.push(() => {
            G.UIMgr.openScene(SceneDefine.AccountScene);
        });
        let index: number = 0;
        let timer = setInterval(() => {
            let fn: Function = arr[index++];
            if (fn) {
                fn();
            } else {
                clearInterval(timer);
            }
        }, 0);



    }

}
