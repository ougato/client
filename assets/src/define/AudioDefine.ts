/*
 * @Author       : ougato
 * @Date         : 2020-08-12 11:33:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 12:52:06
 * @FilePath     : \client242\assets\src\define\AudioDefine.ts
 * @Description  : 声音相对路径定义
 */

// 动态加载音乐文件名定义（Key 一定不要重复）重要的事情说三次
export enum DynamicMusicDefine {
    MUSIC13 = "audio/temp/29",
}

// 动态加载音效文件名定义（Key 一定不要重复）重要的事情说四次
export enum DynamicEffectDefine {
    CLICK = "audio/effect/click",
    EFFECT1 = "audio/temp/1",
    EFFECT2 = "audio/temp/2",
    EFFECT3 = "audio/temp/3",
    EFFECT4 = "audio/temp/4",
    EFFECT5 = "audio/temp/5",
    EFFECT6 = "audio/temp/6",
    EFFECT7 = "audio/temp/7",
    EFFECT8 = "audio/temp/8",
    EFFECT9 = "audio/temp/9",
    EFFECT10 = "audio/temp/10",
    EFFECT11 = "audio/temp/11",
    EFFECT12 = "audio/temp/12",
    EFFECT13 = "audio/temp/13",
    EFFECT14 = "audio/temp/14",
    EFFECT15 = "audio/temp/15",
    EFFECT16 = "audio/temp/16",
    EFFECT17 = "audio/temp/17",
    EFFECT18 = "audio/temp/18",
    EFFECT19 = "audio/temp/19",
    EFFECT20 = "audio/temp/20",
    EFFECT21 = "audio/temp/21",
    EFFECT22 = "audio/temp/22",
    EFFECT23 = "audio/temp/23",
    EFFECT24 = "audio/temp/24",
    EFFECT25 = "audio/temp/25",
}

export default { ...DynamicMusicDefine, ...DynamicEffectDefine };