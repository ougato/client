/*
 * @Author       : ougato
 * @Date         : 2020-08-13 00:47:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-24 18:02:54
 * @FilePath     : \client242\assets\src\config\GameConfig.ts
 * @Description  : 游戏常量配置
 */

import SceneDefine from "../define/SceneDefine";

// 默认进入场景（BootScene 初始化完成后的默认切换场景）
export const DEFAULT_LAUNCH_SCENE: string = SceneDefine.AccountScene;
// 资源调试信息是否加载
export const ASSETS_DEBUG: boolean = false;
// 游戏版本号
export const VERSION: string = "1.0.0";