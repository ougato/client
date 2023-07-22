/*
 * Author       : ougato
 * Date         : 2021-11-19 15:29:20
 * LastEditors  : ougato
 * LastEditTime : 2023-07-19 17:10:23
 * FilePath     : /client/assets/src/core/define/UpdateDefine.ts
 * Description  : 热更新定义
 */

export namespace UpdateDefine {

    /**
     * 版本号
     */
    export enum VersionNumber {
        // 主版本号
        X = 0,
        // 次版本号
        Y,
        // 修订版本号
        Z,
    }

    /**
     * 错误状态
     */
    export enum ErrorState {
        // 加载本地 manifest 失败
        LOAD_LOCAL_MANIFEST = 0,
        // 下载远程 manifest 失败
        DOWNLOAD_MANIFEST,
        // 解析远程 manifest 失败
        PARSE_MANIFEST,
        // 解压远程资源文件失败
        DECOMPRESS_FILE,
        // 下载远程资源文件失败
        DOWNLOAD_FILE,
        // 校验远程资源文件失败
        VERIFY_FILE,
        // 重试失败
        RETRY,
    }

    /**
     * 检测结果
     */
    export enum CheckState {
        // 不更新（已是最新版本或 H5 不需要更新）
        NOT = 0,
        // 静默更新（小版本更新时，在 WIFI 情况下静默更新）
        QUIET,
        // 提示更新（小版本更新时，在 4G 情况下提示用户需要更新文件大小，让用户决定是否继续更新）
        PROMPT,
        // 链接更新（大版本更新时，用户跳转到内部链接更新）
        URL,
        // 商店更新（大版本更新时，用户跳转到商店更新）
        STORE,
    }

    /**
     * 更新结果
     */
    export enum UpdateState {
        // 更新完成
        UPDATE_FINISH = 0,
        // 已是最新版本
        ALREADY_NEW,
        // 再次更新
        AGENT,
    }

}