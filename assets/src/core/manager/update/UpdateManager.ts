/*
 * Author       : ougato
 * Date         : 2021-11-19 15:32:18
 * LastEditors  : ougato
 * LastEditTime : 2024-01-19 18:51:28
 * FilePath     : /client/assets/src/core/manager/update/UpdateManager.ts
 * Description  : 更新管理器，用于最开始进入游戏时热更新
 */

import CryptUtils from "../../utils/CryptUtils";
import TypeUtils from "../../utils/TypeUtils";
import { LocalStorageDefine } from "../../define/LocalStorageDefine";
import { EventDefine } from "../../define/EventDefine";
import { UpdateDefine } from "../../define/UpdateDefine";
import { UpdateInterface } from "../../interface/UpdateInterface";
import { UpdateConfig } from "../../config/UpdateConfig";
import { ConverUtils } from "../../utils/ConverUtils";

// 原生热更新资源文件夹
const NATIVE_UPDATE_ASSETS_FOLDER: string = "hot-update";
// 文本文件后缀
const TEXT_FILE_SUFFIX: string[] = ["json"];
// 最大文件失败数
const MAX_FAILED_FILE_COUNT: number = 3;
// project.manifest 文件名
const PROJECT_MANIFEST_FILENAME: string = "project.manifest";

export default class UpdateManager {

    private static s_instance: UpdateManager = null;

    // 原生资源管理器
    private _jsbAssetsManager: jsb.AssetsManager = null;
    // 差异版本号
    private _diffVersionNum: UpdateDefine.VersionNumber = null;
    // 失败文件
    private _failedFiles: string[] = null;
    // 错误状态
    private _errorState: UpdateDefine.ErrorState = null;
    // 更新进度
    private _percent: number = null;
    // 本地版本
    public localVersion: string = null;
    // 远程版本
    public remoteVersion: string = null;

    public static getInstance(): UpdateManager {
        if (this.s_instance === null) {
            this.s_instance = new UpdateManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    constructor() {
        this.initData();
    }

    /**
     * 初始化数据
     */
    private initData(): void {
        this._diffVersionNum = null;
        this._failedFiles = [];
        this._percent = 0;
    }

    /**
     * 检测是否需要更新
     * @return {Promise<UpdateInterface.CheckResult>} 检测结果
     */
    public async check(): Promise<UpdateInterface.CheckResult> {
        return new Promise((resolve: (result: UpdateInterface.CheckResult) => void, reject: (error: string) => void) => {
            if (!cc.sys.isNative) {
                return resolve({
                    state: UpdateDefine.CheckState.NOT,
                });
            }

            if (this._jsbAssetsManager === null) {
                this._jsbAssetsManager = jsb.AssetsManager.create(this.getLocalManifestPath(), this.getUpdateSearchPath());
                this._jsbAssetsManager.setVersionCompareHandle(this.onVersionCompare.bind(this));
                this._jsbAssetsManager.setVerifyCallback(this.onVerifyMD5.bind(this));
            }

            let jsbState: jsb.AssetsManager.State = this._jsbAssetsManager.getState();
            if (jsbState >= jsb.AssetsManager.State.PREDOWNLOAD_VERSION && jsbState !== jsb.AssetsManager.State.FAIL_TO_UPDATE) {
                G.LogMgr.warn(`已检测过版本，请不要重复检测更新数据`);
                reject("重复执行热更检测方法");
            }

            if (!this._jsbAssetsManager.getLocalManifest() || !this._jsbAssetsManager.getLocalManifest().isLoaded()) {
                G.LogMgr.warn("加载本地 manifest 失败");
                return resolve({
                    error: UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST,
                });
            }

            G.LogMgr.log(`正在检测资源更新`);

            let checkState: UpdateDefine.CheckState = null;
            let failedState: UpdateDefine.ErrorState = null;
            this._jsbAssetsManager.setEventCallback((event: jsb.EventAssetsManager) => {
                switch (event.getEventCode()) {
                    case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST: {
                        G.LogMgr.warn("加载本地文件 Manifest 失败");
                        failedState = UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST;
                    }
                        break;
                    case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST: {
                        G.LogMgr.warn("下载远程 Manifest 失败");
                        G.LogMgr.warn(event.getAssetsManagerEx().getLocalManifest().getManifestFileUrl());
                        failedState = UpdateDefine.ErrorState.DOWNLOAD_MANIFEST;
                    }
                        break;
                    case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST: {
                        G.LogMgr.warn("解析远程 Manifest 失败");
                        failedState = UpdateDefine.ErrorState.PARSE_MANIFEST;
                    }
                        break;
                    case jsb.EventAssetsManager.ALREADY_UP_TO_DATE: {
                        G.LogMgr.log("已是最新版本");
                        checkState = UpdateDefine.CheckState.NOT;
                    }
                        break;
                    case jsb.EventAssetsManager.NEW_VERSION_FOUND: {
                        G.LogMgr.log("发现新版本更新");
                        switch (this._diffVersionNum) {
                            case UpdateDefine.VersionNumber.X:
                                checkState = UpdateDefine.CheckState.URL;
                                break;
                            case UpdateDefine.VersionNumber.Y:
                            case UpdateDefine.VersionNumber.Z:
                                // this._jsbAssetsManager.prepareUpdate();
                                checkState = UpdateDefine.CheckState.QUIET;
                                // if (cc.sys.getNetworkType() === cc.sys.NetworkType.WWAN) {
                                //     checkState = UpdateDefine.CheckState.PROMPT;
                                // }
                                break;
                            default:
                                G.LogMgr.warn("版本号错误");
                                break;
                        }
                    }
                        break;
                    default:
                        break;
                }

                if (checkState !== null) {
                    this._jsbAssetsManager.setEventCallback(null);
                    resolve({
                        state: checkState,
                        downloadBytes: event.getTotalBytes(),
                    });
                }

                if (failedState !== null) {
                    this._jsbAssetsManager.setEventCallback(null);
                    resolve({
                        error: failedState,
                    });
                    this._errorState = failedState;
                }
            });

            this._jsbAssetsManager.checkUpdate();
        })
    }

    /**
     * 更新最新资源和脚本
     * @return {Promise<UpdateInterface.UpdateResult>}
     */
    public async update(): Promise<UpdateInterface.UpdateResult> {
        return new Promise((resolve: (result: UpdateInterface.UpdateResult) => void, reject: (error: string) => void) => {
            if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
                reject("网络错误");
            }

            let jsbState: jsb.AssetsManager.State = this._jsbAssetsManager.getState();
            if (jsbState > jsb.AssetsManager.State.READY_TO_UPDATE && jsbState !== jsb.AssetsManager.State.FAIL_TO_UPDATE) {
                G.LogMgr.warn(`正在更新最新资源，请不要重复执行更新`);
                reject("重复执行热更更新方法");
            }

            G.LogMgr.log("正在更新最新资源");

            let failedCount: number = 0;
            let finishState: UpdateDefine.UpdateState = null;
            let failedState: UpdateDefine.ErrorState = null;
            let percent: number = this._percent;
            this._jsbAssetsManager.setEventCallback((event: jsb.EventAssetsManager) => {
                let eventCode: number = event.getEventCode();
                switch (eventCode) {
                    // 加载本地 manifest 失败
                    case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST: {
                        G.LogMgr.warn("加载本地文件 Manifest 失败");
                        failedState = UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST;
                    }
                        break;
                    // 下载远程 manifest 失败
                    case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST: {
                        G.LogMgr.warn("下载远程 Manifest 失败");
                        failedState = UpdateDefine.ErrorState.DOWNLOAD_MANIFEST;
                    }
                        break;
                    // 解析远程 manifest 失败
                    case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST: {
                        G.LogMgr.warn("解析远程 Manifest 失败");
                        failedState = UpdateDefine.ErrorState.PARSE_MANIFEST;
                    }
                        break;
                    // 解压远程资源文件失败
                    case jsb.EventAssetsManager.ERROR_DECOMPRESS: {
                        G.LogMgr.log(`解压文件失败：${event.getAssetId()}`);
                        this._failedFiles.push(event.getAssetId());
                        if (failedCount++ >= MAX_FAILED_FILE_COUNT) {
                            failedState = UpdateDefine.ErrorState.DECOMPRESS_FILE;
                        }
                    }
                        break;
                    // 更新进度（我需要文件数量的百分比，所以就不在这里做百分比获取了，留作以后使用）
                    case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                        break;
                    // 单个文件更新完成
                    case jsb.EventAssetsManager.ASSET_UPDATED: {
                        percent = ConverUtils.toFixed(event.getPercentByFile() * 100);
                        G.LogMgr.log(`文件完成：${event.getAssetId()} （${percent}%）`);
                    }
                        break;
                    // 下载远程资源文件失败
                    case jsb.EventAssetsManager.ERROR_UPDATING: {
                        G.LogMgr.warn(`下载文件失败：${event.getAssetId()}`);
                        this._failedFiles.push(event.getAssetId());
                        if (++failedCount >= MAX_FAILED_FILE_COUNT) {
                            failedState = UpdateDefine.ErrorState.DOWNLOAD_FILE;
                        }
                    }
                        break;
                    // 校验远程资源文件失败
                    case jsb.EventAssetsManager.UPDATE_FAILED:
                        G.LogMgr.log(`文件校验失败：${event.getAssetId()}`);
                        this._failedFiles.push(event.getAssetId());
                        if (++failedCount >= MAX_FAILED_FILE_COUNT) {
                            failedState = UpdateDefine.ErrorState.VERIFY_FILE;
                        }
                        break;
                    // 已是最新
                    case jsb.EventAssetsManager.ALREADY_UP_TO_DATE: {
                        G.LogMgr.log("已是最新版本");
                        finishState = UpdateDefine.UpdateState.ALREADY_NEW;
                    }
                        break;
                    // 更新完成
                    case jsb.EventAssetsManager.UPDATE_FINISHED: {
                        G.LogMgr.log("更新完成，自动重启客户端");
                        this.resetSearchPath();
                        percent = 100;
                        finishState = UpdateDefine.UpdateState.UPDATE_FINISH;
                    }
                        break;
                    default:
                        G.LogMgr.warn(`热更新中未捕获的事件 ${eventCode}`);
                        break;
                }

                if (this._percent < percent) {
                    this._percent = percent;
                    G.EventMgr.emit(EventDefine.UpdateEvent.UPDATE_PROGRESS, this._percent);
                }

                if (finishState !== null) {
                    this._jsbAssetsManager.setEventCallback(null);
                    this.initData();
                    resolve({
                        state: finishState,
                    });
                }

                if (failedState !== null) {
                    this._jsbAssetsManager.setEventCallback(null);
                    this.initData();
                    this._errorState = failedState;
                    resolve({
                        error: failedState,
                    });
                }
            });

            this._jsbAssetsManager.update();
        });
    }

    /**
     * 重试更新
     * @return {Promise<UpdateInterface.UpdateResult>}
     */
    public async retry(): Promise<UpdateInterface.UpdateResult> {
        return new Promise((resolve: (state: UpdateInterface.UpdateResult) => void, reject: (error: string) => void) => {
            if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
                reject("网络错误");
            }

            if (this._jsbAssetsManager.getState() !== jsb.AssetsManager.State.FAIL_TO_UPDATE) {
                G.LogMgr.warn(`无法执行热更重试，要求在失败状态下才能执行`);
                reject("无法执行热更重试，要求在失败状态下才能执行");
            }

            G.LogMgr.log("正在重试更新资源");

            switch (this._errorState) {
                case UpdateDefine.ErrorState.LOAD_LOCAL_MANIFEST:
                    // TODO 本地文件错误
                    // 1.删除搜索路径的 hot-update_temp 和 hot-update 目录
                    // 2.完整更新流程
                    this.cleanUpdateDir();
                    resolve({
                        state: UpdateDefine.UpdateState.AGENT,
                    });
                    break;
                case UpdateDefine.ErrorState.DOWNLOAD_MANIFEST:
                    // TODO 资源服维护
                    // 1.切换资源服线路
                    // 2.完整更新流程
                    resolve({
                        state: UpdateDefine.UpdateState.AGENT,
                    });
                    break;
                case UpdateDefine.ErrorState.PARSE_MANIFEST:
                    // TODO 远程文件错误
                    // 1.切换资源服线路
                    // 2.完整更新流程
                    resolve({
                        state: UpdateDefine.UpdateState.AGENT,
                    });
                    break;
                case UpdateDefine.ErrorState.DECOMPRESS_FILE:
                case UpdateDefine.ErrorState.DOWNLOAD_FILE:
                case UpdateDefine.ErrorState.VERIFY_FILE: {
                    this._jsbAssetsManager.setEventCallback((event: jsb.EventAssetsManager) => {
                        let percent: number = 0;
                        let failedState: UpdateDefine.ErrorState = null;
                        let finishState: UpdateDefine.UpdateState = null;
                        switch (event.getEventCode()) {
                            // 单个文件更新完成
                            case jsb.EventAssetsManager.ASSET_UPDATED: {
                                percent = ConverUtils.toFixed(event.getPercentByFile() * 100);
                                G.LogMgr.log(`文件完成：${event.getAssetId()} （${percent}%）`);
                            }
                                break;
                            // 下载远程资源文件失败
                            case jsb.EventAssetsManager.ERROR_UPDATING: {
                                G.LogMgr.warn(`下载文件失败：${event.getAssetId()}`);
                                this._failedFiles.push(event.getAssetId());
                                failedState = UpdateDefine.ErrorState.DOWNLOAD_FILE;
                            }
                                break;
                            // 解压远程资源文件失败
                            case jsb.EventAssetsManager.ERROR_DECOMPRESS: {
                                G.LogMgr.log(`解压文件失败：${event.getAssetId()}`);
                                this._failedFiles.push(event.getAssetId());
                                failedState = UpdateDefine.ErrorState.DECOMPRESS_FILE;
                            }
                            // 校验远程资源文件失败
                            case jsb.EventAssetsManager.UPDATE_FAILED:
                                G.LogMgr.log(`文件校验失败：${event.getAssetId()}`);
                                this._failedFiles.push(event.getAssetId());
                                failedState = UpdateDefine.ErrorState.VERIFY_FILE;
                                break;
                            // 已是最新
                            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE: {
                                G.LogMgr.log("已是最新版本");
                                finishState = UpdateDefine.UpdateState.ALREADY_NEW;
                            }
                                break;
                            // 更新完成
                            case jsb.EventAssetsManager.UPDATE_FINISHED: {
                                G.LogMgr.log("更新完成，自动重启客户端");
                                let searchPaths: string[] = jsb.fileUtils.getOriginalSearchPaths();
                                let newSearchPaths: string[] = this._jsbAssetsManager.getLocalManifest().getSearchPaths();
                                Array.prototype.unshift.apply(searchPaths, newSearchPaths);
                                cc.sys.localStorage.setItem(LocalStorageDefine.Update.UPDATE_SEARCH_PATH, JSON.stringify(searchPaths));
                                jsb.fileUtils.setSearchPaths(searchPaths);
                                finishState = UpdateDefine.UpdateState.UPDATE_FINISH;
                                percent = 100;
                            }
                                break;
                            default:

                                break;
                        }

                        if (this._percent < percent) {
                            this._percent = percent;
                            G.EventMgr.emit(EventDefine.UpdateEvent.UPDATE_PROGRESS, this._percent);
                        }

                        if (!TypeUtils.isNull(finishState)) {
                            this._jsbAssetsManager.setEventCallback(null);
                            this.initData();
                            resolve({
                                state: finishState,
                            });
                        }

                        if (!TypeUtils.isNull(failedState)) {
                            this._jsbAssetsManager.setEventCallback(null);
                            this.initData();
                            this._errorState = failedState;
                            resolve({
                                error: failedState,
                            });
                        }
                    });
                    this._jsbAssetsManager.downloadFailedAssets();
                }
                    break;
            }

        });
    }

    /**
     * 清理更新目录 update-hot 和 update-hot_temp 目录
     * @return {boolean} 是否清理成功
     */
    public cleanUpdateDir(): boolean {
        return this.removeUpdateTempDir() && this.removeUpdateSearchDir();
    }

    /**
     * 删除搜索路径 update-hot 目录
     * @return {boolean} 是否删除成功
     */
    private removeUpdateSearchDir(): boolean {
        let succeed: boolean = false;
        let updateSearchPath: string = this.getUpdateSearchPath();
        if (jsb.fileUtils.isDirectoryExist(updateSearchPath)) {
            succeed = jsb.fileUtils.removeDirectory(updateSearchPath);
        }
        return succeed;
    }

    /**
     * 删除热更临时 update-hot_temp 目录
     * @return {boolean} 是否删除成功
     */
    private removeUpdateTempDir(): boolean {
        let succeed: boolean = false;
        let updateTempPath: string = this.getUpdateTempPath();
        if (jsb.fileUtils.isDirectoryExist(updateTempPath)) {
            succeed = jsb.fileUtils.removeDirectory(updateTempPath);
        }
        return succeed;
    }

    /**
     * 获取热更新临时存放目录的路径
     * @return {string}
     */
    private getUpdateTempPath(): string {
        let searchTempPath: string = jsb.fileUtils.getWritablePath() + `${NATIVE_UPDATE_ASSETS_FOLDER}_temp`;
        return searchTempPath;
    }

    /**
     * 获取热更新写入新资源目录的路径
     * @return {string}
     */
    private getUpdateSearchPath(): string {
        return this.getAssetsWritePath() + NATIVE_UPDATE_ASSETS_FOLDER;
    }

    /**
     * 获取 manifest 文件，在搜索路径内
     * @return {string}
     */
    private getManifestPathInSearch(): string {
        let manifestPath: string = "";
        switch (cc.sys.os) {
            case cc.sys.OS_WINDOWS:
                manifestPath = jsb.fileUtils.getWritablePath() + NATIVE_UPDATE_ASSETS_FOLDER + "\\" + PROJECT_MANIFEST_FILENAME;
                break;
            case cc.sys.OS_OSX:

                break;
            case cc.sys.OS_ANDROID:
            case cc.sys.OS_IOS:
                manifestPath = jsb.fileUtils.getWritablePath() + PROJECT_MANIFEST_FILENAME;
                break;
            default:
                G.LogMgr.warn("系统不支持获取本地 manifest 文件路径");
                break;
        }
        return manifestPath;
    }

    /**
     * 获取 manifest 文件，在 APP 内
     * @return {string}
     */
    private getManifestPathInApp(): string {
        let manifestPath: string = "";
        switch (cc.sys.os) {
            case cc.sys.OS_WINDOWS:
                manifestPath = UpdateConfig.WIN32_MANIFEST_IN_APP_PATH;
                break;
            case cc.sys.OS_OSX:

                break;
            case cc.sys.OS_ANDROID:
            case cc.sys.OS_IOS:
                manifestPath = "assets/" + PROJECT_MANIFEST_FILENAME;
                break;
            default:
                G.LogMgr.warn("系统不支持获取本地 manifest 文件路径");
                break;
        }
        return manifestPath;
    }

    /**
     * 获取本地 manifest 文件路径
     * @return {string}
     */
    private getLocalManifestPath(): string {
        let manifestPath: string = "";
        let searchTempPath: string = this.getUpdateTempPath();
        let manifestPathSearch: string = this.getManifestPathInSearch();
        let manifestPathApp: string = this.getManifestPathInApp();

        if (jsb.fileUtils.isDirectoryExist(searchTempPath) || !jsb.fileUtils.isFileExist(manifestPathSearch)) {
            manifestPath = manifestPathApp;
        } else {
            if (jsb.fileUtils.isFileExist(manifestPathApp)) {
                manifestPath = manifestPathApp;
            }
        }

        if (!jsb.fileUtils.isFileExist(manifestPath)) {
            manifestPath = this.getManifestPathInApp();
            if (!jsb.fileUtils.isFileExist(manifestPath)) {
                G.LogMgr.warn("无法找到 APP 内和 搜索路径内的 manifest 文件")
                manifestPath = "";
            }
        }
        return manifestPath;
    }

    /**
     * 获取资源写入路径
     * @return {string} 可写入路径
     */
    private getAssetsWritePath(): string {
        let path: string = "";

        if (jsb && jsb.fileUtils) {
            path = jsb.fileUtils.getWritablePath();
        } else {
            path = "/";
        }

        return path;
    }

    /**
     * 搜索路径去重
     * @param searchPaths {string[]} 需要去重的搜索路径
     * @return {string[]} 去重后新的搜索路径
     */
    private uniqueSearchPath(searchPaths: string[]): string[] {
        let newSearchPath: string[] = [];
        let flagPathMap: Map<string, string> = new Map();
        for (let i: number = 0; i < searchPaths.length; ++i) {
            let key: string = searchPaths[i];
            if (!flagPathMap.has(key)) {
                flagPathMap.set(key, key);
                newSearchPath.push(key);
            }
        }

        flagPathMap.clear();
        return newSearchPath;
    }

    /**
     * 重置搜索路径（并去重）
     */
    private resetSearchPath(): void {
        let searchPaths: string[] = this.uniqueSearchPath(jsb.fileUtils.getOriginalSearchPaths());
        let insertSearchPaths: string[] = this._jsbAssetsManager.getLocalManifest().getSearchPaths();
        for (let i: number = 0; i < insertSearchPaths.length; ++i) {
            let insertSearchPath: string = insertSearchPaths[i];
            let sameSearchPathIndex: number = searchPaths.indexOf(insertSearchPath);
            if (sameSearchPathIndex >= 0) {
                searchPaths.splice(sameSearchPathIndex, 1);
            }
        }
        Array.prototype.unshift.apply(searchPaths, insertSearchPaths);
        cc.sys.localStorage.setItem(LocalStorageDefine.Update.UPDATE_SEARCH_PATH, JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);
    }

    /**
     * 版本号对比回调
     * @param a {string} 本地版本号
     * @param b {string} 远程版本号
     * @return {number} （大于 0，则 a 大）（小于 0，则 b 大）（等于 0，则相等）
     * 如果小于 0，代表远程版本高于本地版本，会收到 NEW_VERSION_FOUND 检测事件，提示用户更新
     * 如果等于 0，或者大于 0，本地版本大于或者等于远程版本，会收到 ALREADY_UP_TO_DATE 检测事件，表示用户本地已经是最新版本
     */
    private onVersionCompare(a: string, b: string): number {
        this.localVersion = a;
        this.remoteVersion = b;

        G.LogMgr.log(`本地版本号：${a}`);
        G.LogMgr.log(`远程版本号：${b}`);

        let aSplit: string[] = a.split(".");
        let bSplit: string[] = b.split(".");

        for (let i: number = 0; i < aSplit.length; ++i) {
            let aNum: number = Number(aSplit[i]);
            let bNum: number = Number(bSplit[i]);
            if (aNum < bNum) {
                this._diffVersionNum = UpdateDefine.VersionNumber[UpdateDefine.VersionNumber[i]];
                return -1;
            } else if (aNum > bNum) {
                break;
            }
        }
        return 0;
    }

    /**
     * 校验文件是否完整回调
     * @param path {string} 文件路径
     * @param asset {jsb.ManifestAsset} 资源信息
     * @retrun {boolean} 文件是否完整
     */
    private onVerifyMD5(path: string, asset: jsb.ManifestAsset): boolean {
        if (!jsb.fileUtils.isFileExist(path)) {
            return false;
        }

        let fileData: Uint8Array | string = null;

        let filePathSuffix: string = path.slice(path.lastIndexOf("."), path.length);
        if (TEXT_FILE_SUFFIX.indexOf[filePathSuffix] >= 0) {
            fileData = jsb.fileUtils.getStringFromFile(path);
        } else {
            fileData = (jsb.fileUtils as any).getDataFromFile(path);
        }
        let fileMD5: string = CryptUtils.md5(fileData);

        if (fileMD5 !== asset.md5) {
            return false;
        } else {
            return true;
        }

    }

    /**
     * 销毁
     */
    public destroy(): void {
        this._jsbAssetsManager = null;
        this._diffVersionNum = null;
        this._failedFiles = null;
        this._percent = null;
    }
}