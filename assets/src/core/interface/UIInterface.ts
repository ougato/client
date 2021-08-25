/*
 * Author       : ougato
 * Date         : 2021-07-07 00:43:43
 * LastEditors  : ougato
 * LastEditTime : 2021-08-26 02:13:16
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
    // 多久没加载完成视图，就显示进度界面（单位：毫秒）
    progressDelay: number;
    // 层级
    layer?: UIDefine.Layer;
    // 加载完成回调
    onComplete?: () => void;
    // 加载进度回调
    onProgress?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
    // 加载错误回调
    onError?: () => void;
}

export interface SceneParam {
    // 场景类
    sceneClass: BaseScene;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 多久没加载完成视图，就显示进度界面（单位：毫秒）
    progressDelay: number;
    // 是否释放所有场景
    isReleaseAllScene: boolean;
    // 加载完成回调
    onComplete?: () => void;
    // 加载进度回调
    onProgress?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
    // 加载错误回调
    onError?: () => void;
}

export interface UIConstraint {
    // 预制路径
    prefabPath: string;
}