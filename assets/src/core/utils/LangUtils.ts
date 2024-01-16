/*
 * Author       : ougato
 * Date         : 2021-07-15 00:31:53
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 00:40:23
 * FilePath     : /client/assets/src/core/utils/LangUtils.ts
 * Description  : 多语言工具
 */

import { I18NDefine } from "../define/I18NDefine";

export default class LangUtils {

    /**
     * 转换系统语言到自定义语言
     * @param lang {string} 获取到的系统语言
     * @return {I18NDefine.Lang} 转换后语言
     */
    public static transOsLang(lang: string): I18NDefine.Lang {
        let value: I18NDefine.Lang = null;
        switch (lang) {
            case cc.sys.LANGUAGE_ENGLISH:
                value = I18NDefine.Lang.en_US;
                break;
            case cc.sys.LANGUAGE_CHINESE:
                value = I18NDefine.Lang.zh_CN;
                break;
            case cc.sys.LANGUAGE_FRENCH:
                value = I18NDefine.Lang.fr_FR;
                break;
            case cc.sys.LANGUAGE_ITALIAN:
                value = I18NDefine.Lang.it_IT;
                break;
            case cc.sys.LANGUAGE_GERMAN:
                value = I18NDefine.Lang.de_DE;
                break;
            case cc.sys.LANGUAGE_SPANISH:
                value = I18NDefine.Lang.es_ES;
                break;
            case cc.sys.LANGUAGE_DUTCH:
                value = I18NDefine.Lang.nl_NL;
                break;
            case cc.sys.LANGUAGE_RUSSIAN:
                value = I18NDefine.Lang.ru_RU;
                break;
            case cc.sys.LANGUAGE_KOREAN:
                value = I18NDefine.Lang.ko_KR;
                break;
            case cc.sys.LANGUAGE_JAPANESE:
                value = I18NDefine.Lang.ja_JP;
                break;
            case cc.sys.LANGUAGE_HUNGARIAN:
                value = I18NDefine.Lang.hu_HU;
                break;
            case cc.sys.LANGUAGE_PORTUGUESE:
                value = I18NDefine.Lang.pt_PT;
                break;
            case cc.sys.LANGUAGE_ARABIC:
                value = I18NDefine.Lang.ar_EG;
                break;
            case cc.sys.LANGUAGE_NORWEGIAN:
                value = I18NDefine.Lang.nb_NO;
                break;
            case cc.sys.LANGUAGE_POLISH:
                value = I18NDefine.Lang.pl_PL;
                break;
            case cc.sys.LANGUAGE_TURKISH:
                value = I18NDefine.Lang.tr_TR;
                break;
            case cc.sys.LANGUAGE_UKRAINIAN:
                value = I18NDefine.Lang.uk_UA;
                break;
            case cc.sys.LANGUAGE_ROMANIAN:
                value = I18NDefine.Lang.ro_RO;
                break;
            case cc.sys.LANGUAGE_BULGARIAN:
                value = I18NDefine.Lang.bg_BG;
                break;
            default:
                value = I18NDefine.DEFAULT_LANG;
                break;
        }
        return value;
    }
}