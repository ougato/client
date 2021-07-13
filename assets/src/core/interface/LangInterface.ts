/*
 * Author       : ougato
 * Date         : 2021-07-13 01:25:09
 * LastEditors  : ougato
 * LastEditTime : 2021-07-13 01:38:00
 * FilePath     : /client/assets/src/core/interface/LangInterface.ts
 * Description  : 多语言接口
 */

// 多语言缓存数据
export interface LangCacheData {
    // 文字
    text: {[key: string]: string},
    // 图集
    atlas: cc.SpriteAtlas,
}