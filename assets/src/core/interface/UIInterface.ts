/*
 * Author       : ougato
 * Date         : 2021-07-07 00:43:43
 * LastEditors  : ougato
 * LastEditTime : 2021-10-19 23:24:47
 * FilePath     : /client/assets/src/core/interface/UIInterface.ts
 * Description  : 界面接口
 */

import BaseView from "../base/BaseView";
import * as UIDefine from "../define/UIDefine";
import * as BundleDefine from "../define/BundleDefine";
import BaseScene from "../base/BaseScene";
import BaseComponent from "../base/BaseComponent";

export interface ViewParam<T extends BaseView> {
    // 视图类
    viewClass: UIClass<T>;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 风格
    style?: UIDefine.Style;
    // 多久视图没加载完成，就显示等待界面（单位：毫秒）
    delay?: number;
    // 分层
    layer?: UIDefine.ViewLayer;
    // 加载完成回调
    onComplete?: () => void;
    // 加载进度回调
    onProgress?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
    // 加载错误回调
    onError?: () => void;
}

export interface SceneParam<T extends BaseScene> {
    // 场景类
    sceneClass: UIClass<T>;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 多久视图没加载完成，就显示加载界面（单位：毫秒）
    delay?: number;
    // 是否释放所有场景
    isReleaseAllScene?: boolean;
    // 加载完成回调
    onComplete?: () => void;
    // 加载进度回调
    onProgress?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
    // 加载错误回调
    onError?: () => void;
}

export interface UIClass<T extends BaseComponent> {
    new(): T;
    // 预制路径
    prefabPath: string;
}