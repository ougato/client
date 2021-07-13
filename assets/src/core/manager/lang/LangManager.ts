/*
 * Author       : ougato
 * Date         : 2021-07-11 17:01:18
 * LastEditors  : ougato
 * LastEditTime : 2021-07-13 02:02:28
 * FilePath     : /client/assets/src/core/manager/lang/LangManager.ts
 * Description  : 语言管理器、本地话多语言的加载和切换
 */

import BaseManager from "../../base/BaseManager";
import * as BundleDefine from "../../define/BundleDefine";
import * as LangDefine from "../../define/LangDefine";
import * as LangInterface from "../../interface/LangInterface";
import ResCache from "../res/ResCache";
import ResManager from "../res/ResManager";

export default class LangManager extends BaseManager {

    private static s_instance: LangManager = null;

    // 数据内容 Map<包名, 多语言缓存数据>>
    private m_dataMap: Map<BundleDefine.Name, LangInterface.LangCacheData> = null;

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
    }

    public async switch(lang: LangDefine.Lang): Promise<boolean> {
        return new Promise((resolve: (value: boolean) => void, reject: (reason?: any) => void) => {

        });
    }

    /**
     * 加载多语言文字和图集
     * @param bundleName {BundleDefine.Name} 包名
     * @param lang {LangDefine.Lang} 语言
     * @returns {Promise<boolean>} 是否加载成功
     */
    public async load(bundleName: BundleDefine.Name, lang: LangDefine.Lang): Promise<boolean> {
        return new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void, reject: (reason?: any) => void) => {
            // MD5
            ResManager.getInstance().loadLocalRes({
                path: LangDefine.RelPath.MD5 + lang,
                bundleName: bundleName,
                type: cc.TextAsset,
                onComplete: (resCache: ResCache | null) => {
                    if()


                    
                }
            })
        });
        // G.ResMgr.loadLocalRes({
        //     // 路径
        //     path: string;
        //     // 包名称
        //     bundleName: string;
        //     // 类型
        //     type: AssetsType;
        //     // 加载进度回调
        //     onProgress?: (finish: number, total: number, item: cc.AssetManager.RequestItem) => void;
        //     // 加载完成回调
        //     onComplete: (resCache: ResCache | null) => void;
        // })
    }

    /**
     * 获取本地话内容
     * @param key {string} Key
     * @param format {string[]} 格式化参数
     * @return {string} 本地话 value
     */
    public get(key: string, bundle: string, ...format: string[] | number[]): string {
        let value: string = "";
        if (this.m_data && this.m_data[key] !== undefined) {
            value = this.m_data[key];
        }

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