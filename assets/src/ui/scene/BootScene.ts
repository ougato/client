/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-22 18:21:45
 * @FilePath     : \client242\assets\src\ui\scene\BootScene.ts
 * @Description  : 程序启动入口
 */

import { Global } from "../../core/Global";
import { ViewDefine } from "../../define/ViewDefine";
import * as IView from "../../core/interface/IView";

const { ccclass, property } = cc._decorator;

@ccclass
export class BootScene extends cc.Component {

    protected onLoad(): void {
        this.initGlobal();
    }

    protected start(): void {
        if (this.checkUpdate()) {
            this.intoUpdate();
        } else {
            this.intoGame();
        }
    }

    /**
     * 初始化全局模块
     */
    private initGlobal(): void {
        Global.getInstance().init();
    }

    /**
     * 初始化资源（预加载）
     */
    private initRes(): void {
        // 初始化常驻节点
        G.ViewMgr.loadPersistView();
    }

    /**
     * 初始化 SDK
     */ 
    private initSDK(): void {

    }

    /**
     * 检测程序更新
     * @return {boolean} 是否需要更新
     */
    private checkUpdate(): boolean {
        let isUpdate: boolean = false;
        if (cc.sys.isNative) {
            return true;
        }
        return isUpdate;
    }

    /**
     * 进入更新
     */
    private intoUpdate(): void {

    }

    private onCompleteCallback():void {
        console.log(this.pri);
    }

    private pri():void {
        console.log("pri....");
    }

    /**
     * 进入游戏
     */
    private intoGame(): void {
        this.initRes();
        this.initSDK();

        G.ViewMgr.openView(ViewDefine.LoadingView);

        G.ViewMgr.openView();

        let param : IView.IOpenParam = {
            path: ViewDefine.LoadingView,
            data: 333,
            completeCallback: this.onCompleteCallback,
        }
        G.ViewMgr.openView(param, param);

    }

}
