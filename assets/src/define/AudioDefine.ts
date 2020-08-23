/*
 * @Author       : ougato
 * @Date         : 2020-08-12 11:33:40
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-12 18:38:37
 * @FilePath     : \client\assets\src\define\AudioDefine.ts
 * @Description  : 声音相对路径定义
 */

// 预加载音乐文件名定义（Key 一定不要重复）重要的事情说一次
export enum PreloadMusicDefine {

}

// 预加载音效文件名定义（Key 一定不要重复）重要的事情说两次
export enum PreloadEffectDefine {

}

// 动态加载音乐文件名定义（Key 一定不要重复）重要的事情说三次
export enum DynamicMusicDefine {

}

// 动态加载音效文件名定义（Key 一定不要重复）重要的事情说四次
export enum DynamicEffectDefine {
    CLICK = "Click",
}

export const AudioDefine = { ...PreloadMusicDefine, ...PreloadEffectDefine, ...DynamicMusicDefine, ...DynamicEffectDefine };