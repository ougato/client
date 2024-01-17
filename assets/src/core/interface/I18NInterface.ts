/*
 * Author       : ougato
 * Date         : 2021-07-13 01:25:09
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 23:47:01
 * FilePath     : /client/assets/src/core/interface/I18NInterface.ts
 * Description  : 本地化接口
 */

import { BundleDefine } from "../../define/BundleDefine";

export namespace I18NInterface {

    // 多语言数据
    export interface Data {
        // 文字
        json: { [key: string]: string },
        // 图集
        atlas: Map<string, cc.SpriteFrame>,
    }

    // 标签参数
    export interface LabelParam {
        // 枚举定义的 Key
        key: string,
        // 包名
        bundleName?: BundleDefine.Name,
        // 参数
        format?: string[] | number[],
    }

    // 精灵参数
    export interface SpriteParame {
        // 图片名
        name: string,
        // 包名
        bundleName?: BundleDefine.Name,
    }

}