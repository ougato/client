/*
 * @Author       : ougato
 * @Date         : 2020-08-13 00:47:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-11 15:51:59
 * @FilePath     : \client242\assets\src\config\GameConfig.ts
 * @Description  : 游戏常量配置
 */

import SceneDefine from "../define/SceneDefine";
import * as I18NDefine from "../define/I18NDefine";

// 默认语言
export const DEFAULT_LANGUE: I18NDefine.Langue = I18NDefine.Langue.en_US;
// 默认音乐音量大小（0-1）
export const DEFAULT_MUSIC_VOLUME: number = 1;
// 默认音效音量大小（0-1）
export const DEFAULT_SOUND_EFFECT_VOLUME: number = 1;
// 默认进入场景（BootScene 初始化完成后的默认切换场景）
export const DEFAULT_LAUNCH_SCENE: string = SceneDefine.AccountScene;
// 游戏版本号
export const VERSION: string = "1.0.0";