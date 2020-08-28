/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-28 00:09:25
 * @FilePath     : \client242\assets\src\ui\scene\BootScene.ts
 * @Description  : 程序启动入口
 */

import Global from "../../core/Global";
import * as GameConfig from "../../config/GameConfig";
import { SceneDefine } from "../../define/SceneDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends cc.Component {

    @property({type: cc.Node, tooltip: "加载视图"})
    private loadingView: cc.Node = null;

    @property({type: cc.Node, tooltip: "进度视图"})
    private progressView:cc.Node = null;

    @property({type: cc.Node, tooltip: "触摸锁定视图"})
    private lockScreenView: cc.Node = null;

    @property({type:cc.Label, tooltip:"加载内容"})
    private labFilePath: cc.Label = null;

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
        this.loadingView.active = false;
        this.progressView.active = false;
        this.lockScreenView.active = false;

        G.ViewMgr.setLoadingView(this.loadingView);
        G.ViewMgr.setProgressView(this.progressView);
        G.ViewMgr.setLockScreenView(this.lockScreenView);
    }

    /**
     * 初始化启动依赖
     */
    private async asyncLaunchDepend(): Promise<void> {
        await this.asyncLoadSDK();
        if (await this.asyncCheckUpdate()) {
            // G.ViewMgr.openPopups()
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

    private onClickLoading():void {

    }

}
