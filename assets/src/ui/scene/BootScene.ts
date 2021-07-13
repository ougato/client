/*
 * Author       : ougato
 * Date         : 2021-07-05 23:22:06
 * LastEditors  : ougato
 * LastEditTime : 2021-07-08 01:10:54
 * FilePath     : /client/assets/src/ui/scene/BootScene.ts
 * Description  : 游戏启动主入口场景
 */

import BaseScene from "../../core/base/BaseScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BootScene extends BaseScene {

    protected onLoad(): void {
        super.onLoad();

    }

    protected start(): void {
        super.start();

        this.launch();
    }

    /**
     * 游戏启动
     */
    private async launch(): Promise<void> {
        await this.loadLanguage();
        await this.loadDepend();
        await this.loadUpdate();
        this.intoGame();
    }

    /**
     * 加载本地化
     */
    private async loadLanguage(): Promise<void> {
        return new Promise((resolve: (localization: LocalizationDefineType) => void) => {
            let language: LanguageDefineType = cc.sys.localStorage.getItem(LocalStorageDefine.LOCAL_LANGUAGE);
            let languagePath: LanguagePathDefineType = LanguagePathDefine[language];
            if (language === null || languagePath === undefined) {
                language = LanguageUtil.transOsLanguage(cc.sys.language);
                languagePath = LanguagePathDefine[language];
                cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_LANGUAGE, language);
            }

            G.Game.language = language;

            Loader.getInstance().load(languagePath, (asset: cc.JsonAsset) => {
                if (asset === null) {
                    G.Logger.error(`加载语言失败 ${languagePath}`);
                    G.UIMgr.openPopups("加载语言包失败，即将重启游戏", "提示", this.node, () => {
                        cc.game.restart();
                    })
                } else {
                    resolve(asset.json);
                }
                Loader.getInstance().unload(languagePath);
            });
        }).then((localization: LocalizationDefineType) => {
            G.Localization.data = localization;
            G.Logger.log("语言加载完成");
        });
    }
}