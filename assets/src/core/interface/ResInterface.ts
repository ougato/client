/*
 * Author       : ougato
 * Date         : 2021-07-10 00:30:30
 * LastEditors  : ougato
 * LastEditTime : 2023-07-21 17:56:01
 * FilePath     : /client/assets/src/core/interface/ResInterface.ts
 * Description  : 资源接口
 */

import ResCache from "../manager/res/ResCache";
import { BundleDefine } from "../../define/BundleDefine";
import { ResDefine } from "../define/ResDefine";

export namespace ResInterface {

    // 加载资源接口参数
    export interface LoadResParam {
        // 路径 / 链接
        base: string;
        // 包名 （默认：BundleDefine.Name.RESOURCES）
        bundleName?: BundleDefine.Name;
        // 资源类型
        assetType: AssetsType;
        // 加载类型 （默认：ResDefine.LoadType.ASSET）
        loadType?: ResDefine.LoadType;
        // 加载方式 （默认：ResDefine.LoadMode.LOCAL）
        loadMode?: ResDefine.LoadMode;
        // 加载进度回调
        progressCallback?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
        // 加载完成回调
        completeCallback: (resCache: ResCache | null) => void;
    }

    // 加载本地资源接口参数
    export interface LoadLocalResParam {
        // 路径
        path: string,
        // 包名
        bundleName: BundleDefine.Name;
        // 资源类型
        assetType: AssetsType;
        // 加载类型 
        loadType: ResDefine.LoadType;
        // 加载进度回调
        progressCallback?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
        // 加载完成回调
        completeCallback: (resCache: ResCache | null) => void;
    }

    // 加载远程资源接口参数
    export interface LoadRemoteResParam {
        // 链接
        url: string,
        // 包名
        bundleName: BundleDefine.Name;
        // 资源类型
        assetType: AssetsType;
        // 加载进度回调
        progressCallback?: (finish: number, total: number, item?: cc.AssetManager.RequestItem) => void;
        // 加载完成回调
        completeCallback: (resCache: ResCache | null) => void;
    }

}