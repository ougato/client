/*
 * @Author       : ougato
 * @Date         : 2020-09-11 16:19:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-11 16:50:17
 * @FilePath     : \client242\assets\src\utils\LangueUtil.ts
 * @Description  : 
 */

import * as I18NDefine from "../define/I18NDefine";
import * as GameConfig from "../config/GameConfig";

export default class Langue {

    /**
     * 转换 Cocos Create 内定语言到自定义语言
     * @param langue {string} cocos creator 获取到的系统语言
     * @return {I18NDefine.Langue} 自定义语言
     */
    public static transCocos(langue: string): I18NDefine.Langue {
        let value: I18NDefine.Langue = GameConfig.DEFAULT_LANGUE;
        switch (langue) {
            case cc.sys.LANGUAGE_ENGLISH:
                value = I18NDefine.Langue.en_US;
                break;
            case cc.sys.LANGUAGE_CHINESE:
                value = I18NDefine.Langue.zh_CN;
                break;
            case cc.sys.LANGUAGE_FRENCH:
                value = I18NDefine.Langue.fr_FR;
                break;
            case cc.sys.LANGUAGE_ITALIAN:
                value = I18NDefine.Langue.it_IT;
                break;
            case cc.sys.LANGUAGE_GERMAN:
                value = I18NDefine.Langue.de_DE;
                break;
            case cc.sys.LANGUAGE_SPANISH:
                value = I18NDefine.Langue.es_ES;
                break;
            case cc.sys.LANGUAGE_DUTCH:
                value = I18NDefine.Langue.nl_NL;
                break;
            case cc.sys.LANGUAGE_RUSSIAN:
                value = I18NDefine.Langue.ru_RU;
                break;
            case cc.sys.LANGUAGE_KOREAN:
                value = I18NDefine.Langue.ko_KR;
                break;
            case cc.sys.LANGUAGE_JAPANESE:
                value = I18NDefine.Langue.ja_JP;
                break;
            case cc.sys.LANGUAGE_HUNGARIAN:
                value = I18NDefine.Langue.hu_HU;
                break;
            case cc.sys.LANGUAGE_PORTUGUESE:
                value = I18NDefine.Langue.pt_PT;
                break;
            case cc.sys.LANGUAGE_ARABIC:
                value = I18NDefine.Langue.ar_EG;
                break;
            case cc.sys.LANGUAGE_NORWEGIAN:
                value = I18NDefine.Langue.nb_NO;
                break;
            case cc.sys.LANGUAGE_POLISH:
                value = I18NDefine.Langue.pl_PL;
                break;
            case cc.sys.LANGUAGE_TURKISH:
                value = I18NDefine.Langue.tr_TR;
                break;
            case cc.sys.LANGUAGE_UKRAINIAN:
                value = I18NDefine.Langue.uk_UA;
                break;
            case cc.sys.LANGUAGE_ROMANIAN:
                value = I18NDefine.Langue.ro_RO;
                break;
            case cc.sys.LANGUAGE_BULGARIAN:
                value = I18NDefine.Langue.bg_BG;
                break;
            case cc.sys.LANGUAGE_UNKNOWN:
                value = GameConfig.DEFAULT_LANGUE;
                break;
            default:
                value = GameConfig.DEFAULT_LANGUE;
                break;
        }
        return value;
    }
}