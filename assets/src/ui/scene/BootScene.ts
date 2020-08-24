/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-24 18:35:05
 * @FilePath     : \client242\assets\src\ui\scene\BootScene.ts
 * @Description  : 程序启动入口
 */

import { Global } from "../../core/Global";
import * as GameConfig from "../../config/GameConfig";
import { SceneDefine } from "../../define/SceneDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export class BootScene extends cc.Component {

    @property(cc.Label)
    private c_filePath: cc.Label = null;

    protected onLoad(): void {
        this.initGlobal();
    }

    protected async start() {
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

    }

    /**
     * 初始化启动依赖
     */
    private async asyncLaunchDepend(): Promise<void> {
        await this.asyncLoadPersistView();
        // await this.asyncPreloadScene();
        await this.asyncLoadSDK();
        let isUpdate: boolean = await this.asyncCheckUpdate();
        if (isUpdate) {
            this.intoUpdate();
        } else {
            this.intoGame();
        }
    }

    /**
     * 加载常驻视图
     */
    private async asyncLoadPersistView(): Promise<void> {
        return new Promise((resolve: (value?: void) => void, reject: (reason?: any) => void) => {
            G.ViewMgr.loadPersistView((finish: number, total: number, path: string) => {
                this.onLoadDependProgress(path);
            }, (error: Error) => {
                resolve();
            });
        });
    }

    // /**
    //  * 预加载默认入口场景
    //  */
    // private async asyncPreloadScene(): Promise<void> {
    //     return new Promise((resolve: (value?: void) => void, reject: (reason?: any) => void) => {
    //         cc.director.preloadScene(GameConfig.DEFAULT_LAUNCH_SCENE, (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
    //             if (item && item.info && item.info.url) {
    //                 let path: string = item.info.url.replace("db://", "");
    //                 this.onLoadDependProgress(path);
    //             }
    //         }, (error: Error) => {
    //             resolve();
    //         });
    //     });
    // }

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

    private onLoadDependProgress(path: string): void {
        this.c_filePath.string = path;
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
        G.ViewMgr.openScene(SceneDefine.AccountScene);
    }

}
