/*
 * @Author       : ougato
 * @Date         : 2020-09-11 16:19:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-13 21:56:25
 * @FilePath     : \client242\assets\src\utils\LanguageUtil.ts
 * @Description  : 语言工具
 */

import LanguageDefine from "../define/LanguageDefine";
import * as GameConfig from "../config/GameConfig";

export default class LanguageUtil {

    /**
     * 转换 Cocos Create 内定语言到自定义语言
     * @param language {string} cocos creator 获取到的系统语言
     * @return {LanguageDefineType} 自定义语言
     */
    public static transCocos(language: string): LanguageDefineType {
        let value: LanguageDefineType = GameConfig.DEFAULT_LANGUAGE;
        switch (language) {
            // case cc.sys.LANGUAGE_ENGLISH:
            //     value = LanguageDefine.en_US;
            //     break;
            case cc.sys.LANGUAGE_CHINESE:
                value = LanguageDefine.zh_CN;
                break;
            // case cc.sys.LANGUAGE_FRENCH:
            //     value = LanguageDefine.fr_FR;
            //     break;
            // case cc.sys.LANGUAGE_ITALIAN:
            //     value = LanguageDefine.it_IT;
            //     break;
            // case cc.sys.LANGUAGE_GERMAN:
            //     value = LanguageDefine.de_DE;
            //     break;
            // case cc.sys.LANGUAGE_SPANISH:
            //     value = LanguageDefine.es_ES;
            //     break;
            // case cc.sys.LANGUAGE_DUTCH:
            //     value = LanguageDefine.nl_NL;
            //     break;
            // case cc.sys.LANGUAGE_RUSSIAN:
            //     value = LanguageDefine.ru_RU;
            //     break;
            // case cc.sys.LANGUAGE_KOREAN:
            //     value = LanguageDefine.ko_KR;
            //     break;
            // case cc.sys.LANGUAGE_JAPANESE:
            //     value = LanguageDefine.ja_JP;
            //     break;
            // case cc.sys.LANGUAGE_HUNGARIAN:
            //     value = LanguageDefine.hu_HU;
            //     break;
            // case cc.sys.LANGUAGE_PORTUGUESE:
            //     value = LanguageDefine.pt_PT;
            //     break;
            // case cc.sys.LANGUAGE_ARABIC:
            //     value = LanguageDefine.ar_EG;
            //     break;
            // case cc.sys.LANGUAGE_NORWEGIAN:
            //     value = LanguageDefine.nb_NO;
            //     break;
            // case cc.sys.LANGUAGE_POLISH:
            //     value = LanguageDefine.pl_PL;
            //     break;
            // case cc.sys.LANGUAGE_TURKISH:
            //     value = LanguageDefine.tr_TR;
            //     break;
            // case cc.sys.LANGUAGE_UKRAINIAN:
            //     value = LanguageDefine.uk_UA;
            //     break;
            // case cc.sys.LANGUAGE_ROMANIAN:
            //     value = LanguageDefine.ro_RO;
            //     break;
            // case cc.sys.LANGUAGE_BULGARIAN:
            //     value = LanguageDefine.bg_BG;
            //     break;
        }
        return value;
    }
}