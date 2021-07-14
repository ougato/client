/*
 * Author       : ougato
 * Date         : 2021-07-13 00:11:27
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 00:38:59
 * FilePath     : /client/assets/src/core/define/LangDefine.ts
 * Description  : 语言定义
 */

// 国家语言
export enum Lang {
    // 阿拉伯语（以色列)
    ar_IL = "ar_IL",
    // 阿拉伯语（埃及）
    ar_EG = "ar_EG",
    // 中文简体
    zh_CN = "zh_CN",
    // 中文繁体
    zh_TW = "zh_TW",
    // 中文（香港)
    zh_HK = "zh_HK",
    // 荷兰语
    nl_NL = "nl_NL",
    // 荷兰语（比利时)
    nl_BE = "nl_BE",
    // 英语（美国)
    en_US = "en_US",
    // 英语（澳大利亚)
    en_AU = "en_AU",
    // 英语（加拿大)
    en_CA = "en_CA",
    // 英语（印度)
    en_IN = "en_IN",
    // 英语（爱尔兰)
    en_IE = "en_IE",
    // 英语（新西兰)
    en_NZ = "en_NZ",
    // 英语（新加波)
    en_SG = "en_SG",
    // 英语（南非)
    en_ZA = "en_ZA",
    // 英语（英国)
    en_GB = "en_GB",
    // 法语
    fr_FR = "fr_FR",
    // 法语（比利时)
    fr_BE = "fr_BE",
    // 法语（加拿大)
    fr_CA = "fr_CA",
    // 法语（瑞士)
    fr_CH = "fr_CH",
    // 德语
    de_DE = "de_DE",
    // 德语（列支敦斯登)
    de_LI = "de_LI",
    // 德语（奥地利)
    de_AT = "de_AT",
    // 德语（瑞士)
    de_CH = "de_CH",
    // 意大利语
    it_IT = "it_IT",
    // 意大利语（瑞士)
    it_CH = "it_CH",
    // 葡萄牙语（巴西）
    pt_BR = "pt_BR",
    // 葡萄牙语
    pt_PT = "pt_PT",
    // 西班牙语
    es_ES = "es_ES",
    // 西班牙语（美国)
    es_US = "es_US",
    // 孟加拉语
    bn_BD = "bn_BD",
    // 孟加拉语（印度)
    bn_IN = "bn_IN",
    // 克罗地亚语
    hr_HR = "hr_HR",
    // 捷克语
    cs_CZ = "cs_CZ",
    // 丹麦语
    da_DK = "da_DK",
    // 希腊语
    el_GR = "el_GR",
    // 希伯来语（以色列)
    he_IL = "he_IL",
    // 希伯来语（以色列)
    iw_IL = "iw_IL",
    // 印度语
    hi_IN = "hi_IN",
    // 匈牙利语
    hu_HU = "hu_HU",
    // 印度尼西亚语
    in_ID = "in_ID",
    // 日语
    ja_JP = "ja_JP",
    // 韩语（朝鲜语）
    ko_KR = "ko_KR",
    // 马来语
    ms_MY = "ms_MY",
    // 波斯语
    fa_IR = "fa_IR",
    // 波兰语
    pl_PL = "pl_PL",
    // 罗马尼亚语
    ro_RO = "ro_RO",
    // 俄罗斯语
    ru_RU = "ru_RU",
    // 塞尔维亚语
    sr_RS = "sr_RS",
    // 瑞典语
    sv_SE = "sv_SE",
    // 泰语
    th_TH = "th_TH",
    // 土耳其语
    tr_TR = "tr_TR",
    // 乌尔都语
    ur_PK = "ur_PK",
    // 越南语
    vi_VN = "vi_VN",
    // 加泰隆语（西班牙)
    ca_ES = "ca_ES",
    // 拉脱维亚语
    lv_LV = "lv_LV",
    // 立陶宛语
    lt_LT = "lt_LT",
    // 挪威语
    nb_NO = "nb_NO",
    // 斯洛伐克语
    sk_SK = "sk_SK",
    // 斯洛文尼亚语 
    sl_SI = "sl_SI",
    // 保加利亚语
    bg_BG = "bg_BG",
    // 乌克兰语
    uk_UA = "uk_UA",
    // 菲律宾语
    tl_PH = "tl_PH",
    // 芬兰语
    fi_FI = "fi_FI",
    // 南非语
    af_ZA = "af_ZA",
    // 罗曼什语（瑞士)
    rm_CH = "rm_CH",
    // 缅甸语（民间)
    my_ZG = "my_ZG",
    // 缅甸语（官方)
    my_MM = "my_MM",
    // 柬埔寨语
    km_KH = "km_KH",
    // 阿姆哈拉语（埃塞俄比亚)
    am_ET = "am_ET",
    // 白俄罗斯语
    be_BY = "be_BY",
    // 爱沙尼亚语
    et_EE = "et_EE",
    // 斯瓦希里语（坦桑尼亚)
    sw_TZ = "sw_TZ",
    // 祖鲁语（南非)
    zu_ZA = "zu_ZA",
    // 阿塞拜疆语
    az_AZ = "az_AZ",
    // 亚美尼亚语（亚美尼亚)
    hy_AM = "hy_AM",
    // 格鲁吉亚语（格鲁吉亚)
    ka_GE = "ka_GE",
    // 老挝语（老挝)
    lo_LA = "lo_LA",
    // 蒙古语
    mn_MN = "mn_MN",
    // 尼泊尔语
    ne_NP = "ne_NP",
    // 哈萨克语
    kk_KZ = "kk_KZ",
    // 加利西亚语
    gl_rES = " gl_rES",
    // 冰岛语
    is_rIS = "is_rIS",
    // 坎纳达语
    kn_rIN = " kn_rIN",
    // 吉尔吉斯语 
    ky_rKG = "ky_rKG",
    // 马拉亚拉姆语
    ml_rIN = "ml_rIN",
    // 马拉提语/马拉地语
    mr_rIN = "mr_rIN",
    // 泰米尔语
    ta_rIN = "ta_rIN",
    // 马其顿语
    mk_rMK = "mk_rMK",
    // 泰卢固语
    te_rIN = "te_rIN",
    // 乌兹别克语
    uz_rUZ = "uz_rUZ",
    // 巴斯克语
    eu_rES = "eu_rES",
    // 僧加罗语（斯里兰卡)
    si_LK = "si_LK",
}

// 默认语言
export const DEFAULT_LANG: Lang = Lang.zh_CN;

// 相对路径
export enum RelPath {
    // JSON 路径、语言文字内容
    JSON = "i18n/json/",
    // MD5 路径、JSON 文件的 MD5 码、用于判断多语言的版本更新
    MD5 = "i18n/md5/",
    // 图集路径、需要使用图片替换多语言的图集路径
    ATLAS = "i18n/atlas/",
}