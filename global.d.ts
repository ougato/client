/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:03:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-22 16:24:02
 * @FilePath     : \client242\global.d.ts
 * @Description  : 全局变量定义
 */
import { Global } from "./assets/src/core/Global";
import { PreloadMusicDefine, PreloadEffectDefine, DynamicMusicDefine, DynamicEffectDefine } from "./assets/src/define/AudioDefine";
import { SystemViewDefine, CustomViewDefine } from "./assets/src/define/ViewDefine";
import { SystemSceneDefine, CustomSceneDefine } from "./assets/src/define/SceneDefine";

declare global {

    interface Window {
        G: Global;
    }

    declare let G = window.G;

    type AudioDefineType = PreloadMusicDefine | PreloadEffectDefine | DynamicMusicDefine | DynamicEffectDefine;
    type ViewDefineType = SystemViewDefine | CustomViewDefine;
    type SceneDefineType = SystemSceneDefine | CustomSceneDefine;
}
