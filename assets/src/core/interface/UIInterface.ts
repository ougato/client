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

export interface ViewParam {
    // 视图类
    viewClass: BaseView;
    // 包名称
    bundle?: string;
    // 风格
    style?: UIDefine.Style;
    // 层级
    layer?: UIDefine.Layer;
    // 延迟显示（单位：秒）
    delay?: number;
    // 加载完成回调
    onComplete?: Function;
    // 加载进度回调
    onProgress?: Function;
    // 加载错误回调
    onError?: Function;
}