/*
 * Author       : ougato
 * Date         : 2021-10-12 00:55:14
 * LastEditors  : ougato
 * LastEditTime : 2024-01-05 15:31:24
 * FilePath     : /client/assets/src/core/utils/NativeUtils.ts
 * Description  : 原生工具
 */

import { LocalStorageDefine } from "../define/LocalStorageDefine";
import { NavigatorInterface } from "../interface/NavigatorInterface";

// 安卓交互文件路径
const ANDROID_NATIVE_UTILS_FILE_PATH: string = "org/cocos2dx/javascript/utils/NativeUtils";

export default class NativeUtils {

    /**
     * 获取电池电量（0-100）百分比
     * @returns {number} 电池电量
     */
    public static async getBattery(): Promise<number> {
        return new Promise((resolve: (value: number | PromiseLike<number>) => void, reject: (reason?: any) => void) => {
            let value: number = 100;
            if (cc.sys.isBrowser) {
                let navigatorEx: NavigatorInterface.NavigatorEx = navigator as NavigatorInterface.NavigatorEx;
                if (!navigatorEx.getBattery) {
                    return resolve(value);
                }

                navigatorEx.getBattery().then((battery: NavigatorInterface.Battery) => {
                    value = Math.floor(battery.level * 100);
                    resolve(value);
                })
            } else if (cc.sys.isNative) {
                // cocos 提供了获取电量的接口、使用官方电量获取、如有需求可重写此接口
                value = Math.floor(cc.sys.getBatteryLevel() * 100);
                resolve(value);
            } else {
                resolve(value);
            }
        });
    }

    /**
     * 获取网络连接类型
     * @returns {cc.sys.NetworkType} 网络连接类型
     */
    public static getNetType(): cc.sys.NetworkType {
        let value: cc.sys.NetworkType = cc.sys.NetworkType.LAN;

        if (cc.sys.isNative) {
            value = cc.sys.getNetworkType();
        }

        return value;
    }

    /**
     * 存储设备唯一码
     * @param uuid {string} 设备唯一码
     */
    public static saveUUID(uuid: string): void {
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }

        // TODO: 暂停使用本地存储，后面需要删除
        G.LocalStorageMgr.setItem(LocalStorageDefine.Local.UUID, uuid);

    }

    /**
     * 获取设备唯一码
     * @returns {string} 设备唯一码
     */
    public static getUUID(): string {
        let value: string = null;
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }

        // TODO: 暂时使用本地存储，后面需要删除
        value = G.LocalStorageMgr.getItem(LocalStorageDefine.Local.UUID) as string;

        return value;
    }

    /**
     * 获取系统
     * @returns {string} 系统
     */
    public static getOS(): string {
        let value: string = null;
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }
        return value;
    }

    /**
     * 获取系统版本号
     * @returns {string} 系统版本号
     */
    public static getOSVersion(): string {
        let value: string = null;
        if (cc.sys.isNative) {
            if (cc.sys.os === cc.sys.OS_ANDROID) {

            } else if (cc.sys.os === cc.sys.OS_IOS) {

            }
        }
        return value;
    }

    /**
     * 设置内容到系统剪切板
     * @param {string} conetent 内容
     * @return {boolean} 是否已拷贝到剪切板
     */
    public static async setClipboard(content: string): Promise<boolean> {
        return new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void, reject: (reason?: any) => void) => {
            let isOK: boolean = false;
            if (cc.sys.isBrowser) {
                navigator.clipboard.writeText(content).then(
                    () => {
                        isOK = true;
                        G.LogMgr.log(`设置剪切板内容：${content}`);
                        resolve(isOK);
                    },
                    (err: string) => {
                        G.LogMgr.log(`设置剪切板内容失败：${err}`);
                        resolve(isOK);
                    }
                );
            } else if (cc.sys.isNative) {
                if (cc.sys.os === cc.sys.OS_ANDROID) {
                    isOK = jsb.reflection.callStaticMethod(ANDROID_NATIVE_UTILS_FILE_PATH, "setClipboard", "(Ljava/lang/String;)Z", content);
                } else if (cc.sys.os === cc.sys.OS_IOS) {

                }

                if (isOK) {
                    G.LogMgr.log(`设置剪切板内容：${content}`);
                } else {
                    G.LogMgr.log(`设置剪切板内容失败`);
                }

                resolve(isOK);
            } else {
                resolve(isOK);
            }
        })
    }

    /**
     * 获取系统剪切板的内容
     * @return {string} 剪切板内容（null-权限不足）
     */
    public static async getClipboard(): Promise<string> {
        return new Promise((resolve: (value: string | PromiseLike<string>) => void, reject: (reason?: any) => void) => {
            let content: string = null;
            if (cc.sys.isBrowser) {
                // 本地 localhost 可以正常使用
                // HTTPS 可以正常使用
                navigator.clipboard.readText().then(
                    (content: string) => {
                        G.LogMgr.log(`获取剪切板内容：${content}`);
                        resolve(content);
                    },
                    (err: string) => {
                        G.LogMgr.log(`获取剪切板内容失败：${err}`);
                        resolve(content);
                    }
                );
            } else if (cc.sys.isNative) {
                if (cc.sys.os === cc.sys.OS_ANDROID) {
                    content = jsb.reflection.callStaticMethod(ANDROID_NATIVE_UTILS_FILE_PATH, "getClipboard", "()Ljava/lang/String;");
                } else if (cc.sys.os === cc.sys.OS_IOS) {

                }
                G.LogMgr.log(`获取剪切板内容：${content}`);
                resolve(content);
            } else {
                resolve(content);
            }
        });
    }

}