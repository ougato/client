/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:03:24
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-11 15:01:28
 * @FilePath     : \client242\global.d.ts
 * @Description  : 全局变量定义
 */
import Global from "./assets/src/core/Global";
import { SystemEventDefine, GameEventDefine } from "./assets/src/define/EventDefine";
import { DynamicMusicDefine, DynamicEffectDefine } from "./assets/src/define/AudioDefine";
import { CommonViewDefine, CustomViewDefine } from "./assets/src/define/ViewDefine";
import { SystemSceneDefine, CustomSceneDefine } from "./assets/src/define/SceneDefine";
import PersistNodeDefine from "./assets/src/define/PersistNodeDefine";
import ViewOrderDefine from "./assets/src/define/ViewOrderDefine";
import ViewStyleDefine from "./assets/src/define/ViewStyleDefine";
import LocalStorageDefine from "./assets/src/define/LocalStorageDefine";

declare global {

    interface Window {
        G: Global;
    }

    declare let G = window.G;

    type EventDefineType = SystemEventDefine | GameEventDefine;
    type AudioDefineType = DynamicMusicDefine | DynamicEffectDefine;
    type ViewDefineType = CommonViewDefine | CustomViewDefine;
    type SceneDefineType = SystemSceneDefine | CustomSceneDefine;
    type PersistNodeType = PersistNodeDefine;
    type ViewStyleType = ViewStyleDefine;
    type AssetsPathDefineType = (ViewDefineType | AudioDefineType) | (ViewDefineType[] & AudioDefineType[]);
    type LocalStorageDefineType = LocalStorageDefine;
}
