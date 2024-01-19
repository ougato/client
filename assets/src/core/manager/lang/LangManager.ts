/*
 * Author       : ougato
 * Date         : 2021-07-11 17:01:18
 * LastEditors  : ougato
 * LastEditTime : 2024-01-19 17:53:58
 * FilePath     : /client/assets/src/core/manager/lang/LangManager.ts
 * Description  : 语言管理器、本地话多语言的加载和切换
 */

import BaseManager from "../../base/BaseManager";
import LangUtils from "../../utils/LangUtils";
import { LocalStorageDefine } from "../../define/LocalStorageDefine";
import { BundleDefine } from "../../../define/BundleDefine";
import { I18NDefine } from "../../define/I18NDefine";
import { I18NInterface } from "../../interface/I18NInterface";
import TypeUtils from "../../utils/TypeUtils";
import ResCache from "../res/ResCache";
import { ResDefine } from "../../define/ResDefine";
import { EventDefine } from "../../define/EventDefine";

export default class LangManager extends BaseManager {

    private static s_instance: LangManager = null;

    // 数据内容 Map<包名, 多语言数据>>
    private _dataMap: Map<BundleDefine.Name, I18NInterface.Data> = null;
    // 当前语言
    private _lang: I18NDefine.Lang = null;

    public static getInstance(): LangManager {
        if (this.s_instance === null) {
            this.s_instance = new LangManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    constructor() {
        super();

        this._dataMap = new Map();
        this.init();
    }

    public init(): void {
        this._lang = this.getCurrLang();
    }

    /**
     * 获取当前语言
     * @returns {I18NDefine.Lang} 当前语言
     */
    private getCurrLang(): I18NDefine.Lang {
        let lang: I18NDefine.Lang = G.LocalStorageMgr.getItem(LocalStorageDefine.Lang.LANG) as I18NDefine.Lang;
        if (lang === null) {
            lang = LangUtils.transOsLang(cc.sys.language);
        }
        return lang;
    }

    /**
     * 获取多语言 JSON 文件路径
     * @returns {string} 文件路径
     */
    private getJsonPath(): string {
        return I18NDefine.RelPath.JSON + this._lang;
    }

    /**
     * 获取多语言图集目录路径
     * @returns {string} 图集目录路径
     */
    private getAtlasPath(): string {
        return I18NDefine.RelPath.ATLAS + this._lang;
    }

    /**
     * 加载多语言 JSON 内容
     * @param bundleName {BundleDefine.Name} 包名
     * @returns {Promise<void>}
     */
    private async loadJson(bundleName: BundleDefine.Name): Promise<void> {
        return new Promise((resolve: (value: void) => void, reject: (reason?: any) => void) => {
            G.ResMgr.load({
                base: this.getJsonPath(),
                bundleName: bundleName,
                assetType: cc.JsonAsset,
                completeCallback: (resCache: ResCache | null) => {
                    if (resCache.asset) {
                        let json: { [key: string]: string } = (resCache.asset as cc.JsonAsset).json;
                        if (!TypeUtils.isNull(json)) {
                            this.setJson(bundleName, json);
                        }
                    }
                    resolve();
                }
            })
        });
    }

    /**
     * 加载多语言图集路径
     * @param bundleName {BundleDefine.Name} 包名
     * @returns {Promise<void>}
     */
    private async loadAtlas(bundleName: BundleDefine.Name): Promise<void> {
        return new Promise((resolve: (value: void) => void, reject: (reason?: any) => void) => {
            G.ResMgr.load({
                base: this.getAtlasPath(),
                bundleName: bundleName,
                assetType: cc.SpriteFrame,
                loadType: ResDefine.LoadType.DIR,
                completeCallback: (resCache: ResCache | null) => {
                    if (resCache.asset) {
                        let atlas: cc.SpriteFrame[] = (resCache.asset as cc.SpriteFrame[]);
                        if (!TypeUtils.isNull(atlas)) {
                            this.setAtlas(bundleName, atlas);
                            resolve();
                        }
                    }
                }
            })
        });
    }

    /**
     * 设置多语言文字
     * @param bundleName {BundleDefine.Name} 包名
     * @param json { [key: string]: string } 内容
     */
    private setJson(bundleName: BundleDefine.Name, json: { [key: string]: string }): void {
        let data: I18NInterface.Data = this._dataMap.get(bundleName);
        if (!data) {
            data = {
                json: null,
                atlas: null,
            }
            this._dataMap.set(bundleName, data);
        }
        data.json = json;
    }

    /**
     * 设置多语言图片
     * @param bundleName {BundleDefine.Name} 包名
     * @param atlas {cc.SpriteFrame[]} 图集
     */
    private setAtlas(bundleName: BundleDefine.Name, atlas: cc.SpriteFrame[]): void {
        let data: I18NInterface.Data = this._dataMap.get(bundleName);
        if (!data) {
            data = {
                json: null,
                atlas: null,
            }
            this._dataMap.set(bundleName, data);
        }

        if (!data.atlas) {
            data.atlas = new Map();
        } else {
            data.atlas.clear();
        }

        for (let v of atlas) {
            data.atlas.set(v.name, v);
        }
    }

    public async switch(lang: I18NDefine.Lang): Promise<void> {
        if (lang === this._lang) {
            G.LogMgr.warn(`当前语言相同`);
            return;
        }

        G.LogMgr.log(`正在加载语言 ${lang}`);

        this._lang = lang;
        let loadList: Promise<boolean>[] = [];
        this._dataMap.forEach((value: I18NInterface.Data, bundleName: BundleDefine.Name, map: Map<BundleDefine.Name, I18NInterface.Data>) => {
            loadList.push(this.load(bundleName));
        });

        await Promise.all(loadList);

        G.LogMgr.log(`已切换语言 ${this._lang}`);
        G.EventMgr.emit(EventDefine.UIEvent.UI_I18N, this._lang);
        G.LocalStorageMgr.setItem(LocalStorageDefine.Lang.LANG, lang);
    }

    /**
     * 加载多语言文字和图集
     * @param bundleName {BundleDefine.Name} 包名
     * @param lang {I18NDefine.Lang} 语言
     * @returns {Promise<boolean>} 是否加载成功
     */
    public async load(bundleName: BundleDefine.Name = BundleDefine.Name.RESOURCES): Promise<boolean> {
        try {
            await Promise.all([this.loadJson(bundleName), this.loadAtlas(bundleName)]);
            return true;
        } catch (error) {
            G.LogMgr.error(error);
            return false;
        }
    }

    /**
     * 获取本地话文字
     * @param key {string} 枚举 Key
     * @param bundleName {BundleDefine.Name}
     * @param format {string[] | number[]} 格式化参数
     * @return {string} 翻译文字
     */
    public getString(key: string, bundleName: BundleDefine.Name, format: string[] | number[] = []): string {
        let value: string = "";

        let data: I18NInterface.Data = this._dataMap.get(bundleName);
        if (!data || !data.json) {
            return value;
        }

        value = data.json[key];

        if (format.length > 0) {
            value = value.replace(/{(\d+)}/g, (_: string, matchIndex: string) => {
                let index: number = Number(matchIndex);
                let content: string | number | undefined = format[index];
                let result: string = "";
                if (content === undefined) {
                    result = "?"
                } else {
                    if (typeof (content) === "number") {
                        result = content.toString();
                    } else {
                        result = content;
                    }
                }
                return result;
            });
        }

        return value;
    }

    /**
     * 获取本地化图片（多目录结构 图片不能重名）
     * @param atlasName {string} 图集名
     * @param spriteFrameName {string} 精灵帧名
     * @param bundleName {BundleDefine.Name} 包名
     * @returns {cc.SpriteFrame} 翻译精灵帧
     */
    public getSpriteFrame(spriteFrameName: string, bundleName: BundleDefine.Name): cc.SpriteFrame {
        let value: cc.SpriteFrame = null;

        let data: I18NInterface.Data = this._dataMap.get(bundleName);
        if (!data || !data.atlas) {
            return value;
        }

        let spriteFrame: cc.SpriteFrame = data.atlas.get(spriteFrameName);

        if (!TypeUtils.isNull(spriteFrame)) {
            value = spriteFrame;
        }

        return value;
    }

}