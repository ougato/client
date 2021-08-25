/*
 * Author       : ougato
 * Date         : 2021-07-07 00:43:43
 * LastEditors  : ougato
 * LastEditTime : 2021-07-10 02:56:40
 * FilePath     : /client/assets/src/core/interface/UIInterface.ts
 * Description  : 界面接口
 */

import BaseView from "../base/BaseView";
import * as UIDefine from "../define/UIDefine";
import * as BundleDefine from "../define/BundleDefine";
import BaseScene from "../base/BaseScene";

export interface ViewParam {
    // 视图类
    viewClass: BaseView;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 风格
    style?: UIDefine.Style;
    // 多少秒没加载完成视图，就显示加载界面
    loadingDelay: number;
    // 层级
    layer?: UIDefine.Layer;
    // 加载完成回调
    onComplete?: Function;
    // 加载进度回调
    onProgress?: Function;
    // 加载错误回调
    onError?: Function;
}

export interface SceneParam {
    // 场景类
    sceneClass: BaseScene;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 多少秒没加载完成视图，就显示加载界面
    loadingDelay: number;
    // 是否预加载
    isPreload?: boolean;
    // 加载完成回调
    onComplete?: Function;
    // 加载进度回调
    onProgress?: Function;
    // 加载错误回调
    onError?: Function;
}