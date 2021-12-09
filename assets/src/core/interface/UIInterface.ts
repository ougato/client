/*
 * Author       : ougato
 * Date         : 2021-07-07 00:43:43
 * LastEditors  : ougato
 * LastEditTime : 2021-12-09 11:09:12
 * FilePath     : /client/assets/src/core/interface/UIInterface.ts
 * Description  : 界面接口
 */

import BaseView from "../base/BaseView";
import BaseScene from "../base/BaseScene";
import BaseComponent from "../base/BaseComponent";
import BaseItem from "../base/BaseItem";
import * as UIDefine from "../define/UIDefine";
import * as BundleDefine from "../define/BundleDefine";

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

export interface ItemParam<T extends BaseItem> {
    // 节点项类
    itemClass: UIClass<T>;
    // 包名称
    bundleName?: BundleDefine.Name;
    // 分层
    layer?: number;
    // 父节点
    parentNode?: cc.Node;
    // 加载完成回调
    onComplete?: (node: cc.Node) => void;
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

export interface DialogOptionInterface {
    // 选项内容
    content: string,
    // 选项回调
    callback?: Function,
}

export interface DialogParam {
    // 标题
    title?: string,
    // 内容
    content: string,
    // 取消回调
    cancelCallback?: Function,
    // 确定回调
    confirmCallback?: Function,
    // 是否显示取消按钮
    isShowCancel?: boolean,
    // 是否显示关闭按钮
    isShowClose?: boolean,
    // 是否倒计时自动关闭
    isAutoClose?: boolean,
    // 显示模式
    showMode?: UIDefine.DialogMode,
}
