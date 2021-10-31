/*
 * Author       : ougato
 * Date         : 2021-07-11 17:01:18
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 00:46:55
 * FilePath     : /client/assets/src/core/manager/lang/LangManager.ts
 * Description  : 语言管理器、本地话多语言的加载和切换
 */

import BaseManager from "../../base/BaseManager";
import * as BundleDefine from "../../define/BundleDefine";
import * as LangDefine from "../../define/LangDefine";
import * as LangInterface from "../../interface/LangInterface";
import * as LocalStorageDefine from "../../define/LocalStorageDefine";
import ResCache from "../res/ResCache";
import ResManager from "../res/ResManager";
import LangUtils from "../../utils/LangUtils";

export default class LangManager extends BaseManager {

    private static s_instance: LangManager = null;

    // 数据内容 Map<包名, 多语言缓存数据>>
    private _dataMap: Map<BundleDefine.Name, LangInterface.LangCacheData> = null;
    // 当前语言
    private _lang: LangDefine.Lang = null;

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
    }

    public async asyncInit(): Promise<void> {
        this._lang = this.getCurrLang();
    }

    /**
     * 获取当前语言
     * @returns {LangDefine.Lang} 当前语言
     */
    private getCurrLang(): LangDefine.Lang {
        let lang: LangDefine.Lang = G.LocalStorageMgr.getItem(LocalStorageDefine.Lang.LANG) as LangDefine.Lang;
        if (lang === null) {
            lang = LangUtils.transOsLang(cc.sys.language);
        }
        return lang;
    }

    /**
     * 获取多语言 MD5 文件路径
     * @returns {string} 文件路径
     */
    private getMD5Path(): string {
        return LangDefine.RelPath.MD5 + this._lang;
    }

    /**
     * 获取多语言 JSON 文件路径
     * @returns {string} 文件路径
     */
    private getJsonPath(): string {
        return LangDefine.RelPath.JSON + this._lang;
    }

    /**
     * 获取多语言图集目录路径
     * @returns {string} 图集目录路径
     */
    private getAtlasPath(): string {
        return LangDefine.RelPath.ATLAS + this._lang;
    }

    /**
     * 获取本地存储 MD5 Key
     * @param bundleName {BundleDefine.Name} 包名
     * @returns {string} Key
     */
    private getLocalStorageMD5Key(bundleName: BundleDefine.Name): string {
        return bundleName + "." + LocalStorageDefine.Lang.LANG_FILE_MD5;
    }

    /**
     * 获取本地存储 Json Key
     * @param bundleName {BundleDefine.Name} 包名
     * @returns {string} Key
     */
    private getLocalStorageJsonKey(bundleName: BundleDefine.Name): string {
        return bundleName + "." + LocalStorageDefine.Lang.LANG_CONTENT;
    }

    // /**
    //  * 加载文本的 MD5 内容
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @returns {Promise<string>} MD5 内容
    //  */
    // private async loadMD5(bundleName: BundleDefine.Name): Promise<string> {
    //     return new Promise((resolve: (value: string) => void, reject: (reason?: any) => void) => {
    //         ResManager.getInstance().loadLocalRes({
    //             path: this.getMD5Path(),
    //             bundleName: bundleName,
    //             type: cc.TextAsset,
    //             onComplete: (resCache: ResCache | null) => {
    //                 if (resCache.asset) {
    //                     let md5: string = (resCache.asset as cc.TextAsset).text;
    //                     if (md5 !== null && md5 !== undefined) {
    //                         resolve(md5);
    //                     } else {
    //                         resolve(null);
    //                     }
    //                 } else {
    //                     resolve(null);
    //                 }
    //             }
    //         })
    //     });
    // }

    // /**
    //  * 加载多语言 JSON 内容
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @returns {Promise<object>}
    //  */
    // private async loadJson(bundleName: BundleDefine.Name): Promise<object> {
    //     return new Promise((resolve: (value: object) => void, reject: (reason?: any) => void) => {
    //         ResManager.getInstance().loadLocalRes({
    //             path: this.getJsonPath(),
    //             bundleName: bundleName,
    //             type: cc.JsonAsset,
    //             onComplete: (resCache: ResCache | null) => {
    //                 if (resCache.asset) {
    //                     let json: object = (resCache.asset as cc.JsonAsset).json;
    //                     if (json !== null && json !== undefined) {
    //                         this.setCacheJson(bundleName, json);
    //                         this.setLocalStorageJson(bundleName, json);
    //                         resolve(json);
    //                     } else {
    //                         reject();
    //                     }
    //                 } else {
    //                     reject();
    //                 }
    //             }
    //         })
    //     });
    // }

    // /**
    //  * 加载多语言图集路径
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @returns {Promise<void>}
    //  */
    // private async loadAtlas(bundleName: BundleDefine.Name): Promise<void> {
    //     return new Promise((resolve: (value: void) => void, reject: (reason?: any) => void) => {
    //         ResManager.getInstance().loadLocalDirRes({
    //             path: this.getAtlasPath(),
    //             bundleName: bundleName,
    //             type: cc.SpriteAtlas,
    //             onComplete: (resCache: ResCache | null) => {
    //                 if (resCache.asset) {
    //                     let atlas: cc.SpriteAtlas = (resCache.asset as cc.SpriteAtlas);
    //                     if (atlas !== null && atlas !== undefined) {
    //                         resolve();
    //                     } else {
    //                         reject();
    //                     }
    //                 } else {
    //                     reject();
    //                 }
    //             }
    //         })
    //     });
    // }

    // /**
    //  * 设置本地存储多语言校验码
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @param md5 {string} 多语言校验码
    //  */
    // private setLocalStorageMD5(bundleName: BundleDefine.Name, md5: string): void {
    //     G.LocalStoreageMgr.setItem(this.getLocalStorageMD5Key(bundleName), md5);
    // }

    // /**
    //  * 设置缓存多语言文字
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @param json {object} 内容
    //  */
    // private setCacheJson(bundleName: BundleDefine.Name, json: object): void {
    //     let langCacheData: LangInterface.LangCacheData = this._dataMap.get(bundleName);
    //     if (!langCacheData) {
    //         langCacheData = {
    //             json: null,
    //             atlas: null,
    //         }
    //         this._dataMap.set(bundleName, langCacheData);
    //     }
    //     langCacheData.json = json;
    // }

    // /**
    //  * 设置本地存储多语言文字
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @param json {object} 内容
    //  */
    // private setLocalStorageJson(bundleName: BundleDefine.Name, json: object): void {
    //     G.LocalStoreageMgr.setItem(this.getLocalStorageJsonKey(bundleName), json);
    // }

    // /**
    //  * 设置多语言图片
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @param atlas {cc.SpriteAtlas} 图集
    //  */
    // private setAtlas(bundleName: BundleDefine.Name, atlas: cc.SpriteAtlas): void {
    //     let langCacheData: LangInterface.LangCacheData = this._dataMap.get(bundleName);
    //     if (!langCacheData) {
    //         langCacheData = {
    //             json: null,
    //             atlas: null,
    //         }
    //         this._dataMap.set(bundleName, langCacheData);
    //     }
    //     langCacheData.atlas = atlas;
    // }

    // public async switch(lang: LangDefine.Lang): Promise<boolean> {
    //     return new Promise((resolve: (value: boolean) => void, reject: (reason?: any) => void) => {

    //     });
    // }

    // /**
    //  * 加载多语言文字和图集
    //  * @param bundleName {BundleDefine.Name} 包名
    //  * @param lang {LangDefine.Lang} 语言
    //  * @returns {Promise<boolean>} 是否加载成功
    //  */
    // public async load(bundleName: BundleDefine.Name): Promise<boolean> {
    //     return new Promise(async (resolve: (value: boolean) => void, reject: (reason?: any) => void) => {
    //         let md5: string = await this.loadMD5(bundleName);
    //         if (md5 === null) {
    //             resolve(false);
    //         } else {
    //             let localStorageMD5: string = G.LocalStoreageMgr.getItem(this.getLocalStorageMD5Key(bundleName)) as string;
    //             if (localStorageMD5 === md5) {
    //                 let localStorageJson: object = G.LocalStoreageMgr.getItem(this.getLocalStorageJsonKey(bundleName)) as object;
    //                 if (localStorageJson === null) {
    //                     this.loadJson(bundleName);
    //                 } else {
    //                     this.setCacheJson(bundleName, localStorageJson);
    //                 }
    //                 this.loadAtlas(bundleName);
    //             } else {
    //                 Promise.all([this.loadJson(bundleName), this.loadAtlas(bundleName)])
    //                     .then((value: any[]) => {
    //                         console.log("22222222");
    //                     }, (reason: any) => {
    //                         console.log("33333333");
    //                     });
    //                 this.setLocalStorageMD5(bundleName, md5);
    //             }
    //             resolve(true);
    //         }
    //     });
    // }

    // /**
    //  * 获取本地话内容
    //  * @param key {string} Key
    //  * @param format {string[]} 格式化参数
    //  * @return {string} 本地话 value
    //  */
    // public get(key: string, bundle: string, ...format: string[] | number[]): string {
    //     let value: string = "";
    //     // if (this._data && this._data[key] !== undefined) {
    //     //     value = this._data[key];
    //     // }

    //     // if (format.length > 0) {
    //     //     value = value.replace(/{(\d+)}/g, (_: string, matchIndex: string) => {
    //     //         let index: number = Number(matchIndex);
    //     //         let content: string | number | undefined = format[index];
    //     //         let result: string = "";
    //     //         if (content === undefined) {
    //     //             result = "?"
    //     //         } else {
    //     //             if (typeof (content) === "number") {
    //     //                 result = content.toString();
    //     //             } else {
    //     //                 result = content;
    //     //             }
    //     //         }
    //     //         return result;
    //     //     });
    //     // }

    //     return value;
    // }
}