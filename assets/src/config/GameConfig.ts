/*
 * @Author       : ougato
 * @Date         : 2020-08-13 00:47:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-13 21:56:11
 * @FilePath     : \client242\assets\src\config\GameConfig.ts
 * @Description  : 游戏常量配置
 */

import SceneDefine from "../define/SceneDefine";
import LanguageDefine from "../define/LanguageDefine";

// 默认语言
export const DEFAULT_LANGUAGE: LanguageDefineType = LanguageDefine.zh_CN;
// 默认音乐音量大小（0-1）
export const DEFAULT_MUSIC_VOLUME: number = 1;
// 默认音效音量大小（0-1）
export const DEFAULT_SOUND_EFFECT_VOLUME: number = 1;
// 默认进入场景（BootScene 初始化完成后的默认切换场景）
export const DEFAULT_LAUNCH_SCENE: string = SceneDefine.AccountScene;
// 游戏版本号
export const VERSION: string = "1.0.0";