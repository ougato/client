/*
 * Author       : ougato
 * Date         : 2021-07-13 01:25:09
 * LastEditors  : ougato
 * LastEditTime : 2022-09-18 18:39:20
 * FilePath     : /client/assets/src/core/interface/LangInterface.ts
 * Description  : 多语言接口
 */

export namespace LangInterface {

    // 多语言缓存数据
    export interface LangCacheData {
        // 文字
        json: object,
        // 图集
        atlas: cc.SpriteAtlas,
    }

}