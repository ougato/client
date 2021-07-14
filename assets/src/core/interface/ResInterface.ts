/*
 * Author       : ougato
 * Date         : 2021-07-10 00:30:30
 * LastEditors  : ougato
 * LastEditTime : 2021-07-15 02:07:10
 * FilePath     : /client/assets/src/core/interface/ResInterface.ts
 * Description  : 资源接口
 */

import ResCache from "../manager/res/ResCache";
import * as BundleDefine from "../define/BundleDefine";

// 加载本地资源接口参数
export interface LoadLocalResParam {
    // 路径
    path: string;
    // 包名
    bundleName: BundleDefine.Name;
    // 类型
    type: AssetsType;
    // 加载进度回调
    onProgress?: (finish: number, total: number, item: cc.AssetManager.RequestItem) => void;
    // 加载完成回调
    onComplete: (resCache: ResCache | null) => void;
}