/*
 * Author       : ougato
 * Date         : 2021-07-13 01:25:09
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 00:54:02
 * FilePath     : /client/assets/src/core/interface/I18NInterface.ts
 * Description  : 本地化接口
 */

export namespace I18NInterface {

    // 多语言数据
    export interface Data {
        // 文字
        json: { [key: string]: string },
        // 图集
        atlasMap: Map<string, cc.SpriteAtlas>,
    }

}