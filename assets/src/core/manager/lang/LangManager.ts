/*
 * Author       : ougato
 * Date         : 2021-07-11 17:01:18
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 00:58:50
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
                assetType: cc.SpriteAtlas,
                loadType: ResDefine.LoadType.DIR,
                completeCallback: (resCache: ResCache | null) => {
                    if (resCache.asset) {
                        let atlasList: cc.SpriteAtlas[] = (resCache.asset as cc.SpriteAtlas[]);
                        if (!TypeUtils.isNull(atlasList)) {
                            this.setAtlas(bundleName, atlasList);
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
                atlasMap: null,
            }
            this._dataMap.set(bundleName, data);
        }
        data.json = json;
    }

    /**
     * 设置多语言图片
     * @param bundleName {BundleDefine.Name} 包名
     * @param atlasList {cc.SpriteAtlas[]} 图集列表
     */
    private setAtlas(bundleName: BundleDefine.Name, atlasList: cc.SpriteAtlas[]): void {
        let data: I18NInterface.Data = this._dataMap.get(bundleName);
        if (!data) {
            data = {
                json: null,
                atlasMap: null,
            }
            this._dataMap.set(bundleName, data);
        }

        if (!data.atlasMap) {
            data.atlasMap = new Map();
        } else {
            data.atlasMap.clear();
        }

        for (let v of atlasList) {
            data.atlasMap.set(v.name, v);
        }
    }

    public async switch(lang: I18NDefine.Lang): Promise<boolean> {
        return new Promise((resolve: (value: boolean) => void, reject: (reason?: any) => void) => {

        });
    }

    /**
     * 加载多语言文字和图集
     * @param bundleName {BundleDefine.Name} 包名
     * @param lang {I18NDefine.Lang} 语言
     * @returns {Promise<boolean>} 是否加载成功
     */
    public async load(bundleName: BundleDefine.Name = BundleDefine.Name.RESOURCES): Promise<boolean> {
        return new Promise(async (resolve: (value: boolean) => void, reject: (reason?: any) => void) => {
            Promise.all([this.loadJson(bundleName), this.loadAtlas(bundleName)])
                .then((value: any[]) => {
                    resolve(true);
                });
        });
    }

    /**
     * 获取本地话内容
     * @param key {string} Key
     * @param bundleName {BundleDefine.Name}
     * @param format {string[]} 格式化参数
     * @return {string} 本地话 value
     */
    public get(key: string, bundleName: BundleDefine.Name, ...format: string[] | number[]): string {
        let value: string = "";

        let data: I18NInterface.Data = this._dataMap.get(bundleName);
        if (!data) {
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
}