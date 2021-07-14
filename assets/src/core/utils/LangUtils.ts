/*
 * Author       : ougato
 * Date         : 2021-07-15 00:31:53
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 00:40:23
 * FilePath     : /client/assets/src/core/utils/LangUtils.ts
 * Description  : 多语言工具
 */
 
import * as LangDefine from "../define/LangDefine";

export default class LangUtils {

    /**
     * 转换系统语言到自定义语言
     * @param lang {string} 获取到的系统语言
     * @return {LangDefine.Lang} 转换后语言
     */
    public static transOsLang(lang: string): LangDefine.Lang {
        let value: LangDefine.Lang = null;
        switch (lang) {
            case cc.sys.LANGUAGE_ENGLISH:
                value = LangDefine.Lang.en_US;
                break;
            case cc.sys.LANGUAGE_CHINESE:
                value = LangDefine.Lang.zh_CN;
                break;
            case cc.sys.LANGUAGE_FRENCH:
                value = LangDefine.Lang.fr_FR;
                break;
            case cc.sys.LANGUAGE_ITALIAN:
                value = LangDefine.Lang.it_IT;
                break;
            case cc.sys.LANGUAGE_GERMAN:
                value = LangDefine.Lang.de_DE;
                break;
            case cc.sys.LANGUAGE_SPANISH:
                value = LangDefine.Lang.es_ES;
                break;
            case cc.sys.LANGUAGE_DUTCH:
                value = LangDefine.Lang.nl_NL;
                break;
            case cc.sys.LANGUAGE_RUSSIAN:
                value = LangDefine.Lang.ru_RU;
                break;
            case cc.sys.LANGUAGE_KOREAN:
                value = LangDefine.Lang.ko_KR;
                break;
            case cc.sys.LANGUAGE_JAPANESE:
                value = LangDefine.Lang.ja_JP;
                break;
            case cc.sys.LANGUAGE_HUNGARIAN:
                value = LangDefine.Lang.hu_HU;
                break;
            case cc.sys.LANGUAGE_PORTUGUESE:
                value = LangDefine.Lang.pt_PT;
                break;
            case cc.sys.LANGUAGE_ARABIC:
                value = LangDefine.Lang.ar_EG;
                break;
            case cc.sys.LANGUAGE_NORWEGIAN:
                value = LangDefine.Lang.nb_NO;
                break;
            case cc.sys.LANGUAGE_POLISH:
                value = LangDefine.Lang.pl_PL;
                break;
            case cc.sys.LANGUAGE_TURKISH:
                value = LangDefine.Lang.tr_TR;
                break;
            case cc.sys.LANGUAGE_UKRAINIAN:
                value = LangDefine.Lang.uk_UA;
                break;
            case cc.sys.LANGUAGE_ROMANIAN:
                value = LangDefine.Lang.ro_RO;
                break;
            case cc.sys.LANGUAGE_BULGARIAN:
                value = LangDefine.Lang.bg_BG;
                break;
            default:
                value = LangDefine.DEFAULT_LANG;
                break;
        }
        return value;
    }
}