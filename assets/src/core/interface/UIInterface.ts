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
import BaseUI from "../base/BaseUI";
import UISceneCache from "../manager/ui/UISceneCache";
import UIViewCache from "../manager/ui/UIViewCache";

export interface ViewParam {
    // 视图类
    viewClass: BaseView;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 风格
    style?: UIDefine.Style;
    // 多久视图没加载完成，就显示进度界面（单位：毫秒）
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

export interface SceneParam<T extends BaseScene> {
    // 场景类
    sceneClass: UIClassInterface<T>;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 多久视图没加载完成，就显示进度界面（单位：毫秒）
    progressDelay?: number;
    // 是否释放所有场景
    isReleaseAllScene?: boolean;
    // 加载完成回调
    onComplete?: () => void;
    // 加载进度回调
    onProgress?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
    // 加载错误回调
    onError?: () => void;
}

export interface UIClassInterface<T extends BaseUI> {
    new(): T;
    // 预制路径
    prefabPath: string;
}