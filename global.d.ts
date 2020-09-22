/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:03:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-23 01:40:19
 * @FilePath     : \client242\global.d.ts
 * @Description  : 全局变量定义
 */
import Global from "./assets/src/core/Global";
import { SystemEventDefine, GameEventDefine } from "./assets/src/define/EventDefine";
import { DynamicMusicDefine, DynamicEffectDefine } from "./assets/src/define/AudioDefine";
import { PersistViewDefine, CommonViewDefine, CustomViewDefine } from "./assets/src/define/ViewDefine";
import { SystemSceneDefine, CustomSceneDefine } from "./assets/src/define/SceneDefine";
import ViewStyleDefine from "./assets/src/define/ViewStyleDefine";
import LanguagePathDefine from "./assets/src/define/LanguagePathDefine";
import LocalStorageDefine from "./assets/src/define/LocalStorageDefine";
import LanguageDefine from "./assets/src/define/LanguageDefine";
import LocalizationDefine from "./assets/src/define/LocalizationDefine";
import { SystemProtocolDefine, LoobyProtocolDefine, GameProtocolDefine } from "./assets/src/define/ProtocolDefine";

declare global {

    interface Window {
        G: Global;
    }

    declare let G = window.G;

    type EventDefineType = SystemEventDefine | GameEventDefine;
    type AudioDefineType = DynamicMusicDefine | DynamicEffectDefine;
    type ViewDefineType = PersistViewDefine | CommonViewDefine | CustomViewDefine;
    type SceneDefineType = SystemSceneDefine | CustomSceneDefine;
    type ViewStyleType = ViewStyleDefine;
    type LanguagePathDefineType = LanguagePathDefine;
    type AssetsPathDefineType = (ViewDefineType | AudioDefineType | LanguagePathDefineType) | (ViewDefineType | AudioDefineType | LanguagePathDefineType)[];
    type LocalStorageDefineType = LocalStorageDefine;
    type LanguageDefineType = LanguageDefine;
    type LocalizationDefineType = LocalizationDefine;
    type ProtocolDefineType = SystemProtocolDefine | LoobyProtocolDefine | GameProtocolDefine;
    type WebSocketProtocol = "ws" | "wss";
}