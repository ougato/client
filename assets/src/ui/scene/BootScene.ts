/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 01:12:38
 * @FilePath     : \client242\assets\src\ui\scene\BootScene.ts
 * @Description  : 程序启动入口
 */

import SceneDefine from "../../define/SceneDefine";
import UIComponent from "../UIComponent";
import LocalizationDefine from "../../define/LocalizationDefine";
import Loader from "../../core/machine/Loader";
import ViewOrderDefine from "../../define/ViewOrderDefine";
import Logger from "../../core/machine/Logger";
import LanguagePathDefine from "../../define/LanguagePathDefine";
import { PersistViewDefine } from "../../define/ViewDefine";
import * as GameConfig from "../../config/GameConfig";


const { ccclass, property } = cc._decorator;
// 显示初始化文字
const INITIALIZING: string = "initializing";
// 最大（点）数量
const MAX_POINT_COUNT: number = 3;
// 字符串（点）
const POINT: string = ".";
// 间隔时间（单位：秒）
const INTERVAL_TIME: number = 0.5;

@ccclass
export default class BootScene extends UIComponent implements UIInterface<void> {

    @property({ type: cc.Label, tooltip: "初始化提示" })
    private labTips: cc.Label = null;

    // 初始化定时器
    private m_initializingTimer: number = null;

    protected onLoad(): void {
        // 准备在 constructor 初始化全局变量，迫于引擎会在构造中执行两次，放弃写在构造，临时移到这里吧
        this.register();
        this.initData();
        this.initView();
    }

    protected start() {
        this.launch();
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
     * 语言切换
     */
    public onLanguage(): void {

    }

    /**
     * 初始化视图
     */
    private initView(): void {
        this.playInitializing();
    }

    /**
     * 播放初始化动画
     */
    private playInitializing(): void {
        if (this.m_initializingTimer === null || this.m_initializingTimer === undefined) {
            let pointCount: number = 0;
            this.m_initializingTimer = setInterval(() => {
                if (pointCount++ >= MAX_POINT_COUNT) {
                    pointCount = 0;
                    this.labTips.string = INITIALIZING;
                } else {
                    this.labTips.string += POINT;
                }
            }, INTERVAL_TIME * 1000);
        }
    }

    /**
     * 停止初始化动画
     */
    private stopInitializing(): void {
        if (this.m_initializingTimer !== null && this.m_initializingTimer !== undefined) {
            clearInterval(this.m_initializingTimer);
            this.m_initializingTimer = null;
            this.labTips.string = "";
        }
    }


    private async launch() {
        await this.loadDepend();
        await this.checkUpdate();
        this.intoGame();
    }

    /**
     * 加载常驻视图
     */
    private async loadPersist(): Promise<void> {
        return new Promise((resolve: () => void, reject: () => void) => {
            let res: PersistViewDefine[] = [
                PersistViewDefine.LoadingView,
                PersistViewDefine.LockTouchView,
                PersistViewDefine.ProgressView,
            ];
            Loader.getInstance().load(res, (prefabs: cc.Prefab[]) => {
                if (prefabs === null) {
                    Logger.getInstance().error("常驻视图加载失败");
                    reject();
                } else {
                    prefabs.map((prefab: cc.Prefab) => {
                        let node: cc.Node = cc.instantiate(prefab);
                        node.zIndex = ViewOrderDefine.SYSTEM;
                        cc.game.addPersistRootNode(node);
                        node.parent = cc.director.getScene();
                        node.active = false;
                    });
                    resolve();
                }
            });
        });
    }

    /**
     * 加载多语言
     */
    private async loadLanguage(): Promise<void> {
        return new Promise((resolve, reject) => {
            let languagePath: LanguagePathDefine = LanguagePathDefine[G.Game.language];
            Loader.getInstance().load(languagePath, (asset: cc.JsonAsset) => {
                if (asset === null) {
                    let defaultLanguagePath: LanguagePathDefine = LanguagePathDefine[GameConfig.DEFAULT_LANGUAGE];
                    Loader.getInstance().load(defaultLanguagePath, (defaultAsset: cc.JsonAsset) => {
                        if (defaultAsset === null) {
                            Logger.getInstance().error("多语言加载失败");
                            reject();
                        } else {
                            G.Localization.localization = defaultAsset.json;
                            resolve();
                        }
                    });
                } else {
                    G.Localization.localization = asset.json;
                    resolve();
                }
                Loader.getInstance().unload(languagePath);
            });
        });
    }

    /**
     * 加载SDK
     */
    private async loadSDK(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    /**
     * 加载依赖
     */
    private async loadDepend(): Promise<void> {
        return new Promise((resolve: () => void, reject: () => void) => {
            Promise.all([this.loadPersist(), this.loadLanguage(), this.loadSDK()]).then(() => {
                resolve();
            }).catch(() => {
                G.UIMgr.openPopups("error", null, null, () => {
                    cc.game.restart();
                })
            });
        });
    }



    /**
     * 进入更新
     */
    private async intoUpdate(): Promise<void> {

    }

    /**
     * 检测更新
     */
    private async checkUpdate(): Promise<void> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    /**
     * 进入游戏
     */
    private intoGame(): void {
        G.UIMgr.openScene(SceneDefine.AccountScene);
    }

    protected onDestroy(): void {
        this.stopInitializing();
    }
}
