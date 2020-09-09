/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:04
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 23:34:32
 * @FilePath     : \client242\assets\src\core\manager\audio\AudioManager.ts
 * @Description  : 用于整个游戏场景中，需要播放声音的模块，调用全局接口，达到播放声音的效果，开发者无需考虑声音播放缓存问题，音效可自定义是否缓存
 */

import Manager from "../Manager";
import AudioDefine from "../../../define/AudioDefine";
import Loader from "../../machine/Loader";
import Audio from "./Audio";
import Pool from "../../../utils/Pool";
import Logger from "../../machine/Logger";
import AudioEffectUtil from "../../../utils/AudioEffectUtil";

// 音效同时播放最大数量
const MAX_SAME_TIME_PLAY_SIZE = 10;
// 音乐转场过渡时间
const GRADUALLY_TIME = 1;

export default class AudioManager extends Manager implements ManagerInterface {

    private static g_instance: AudioManager = null;

    // 音效对象池
    private m_effectPool: Pool<Audio> = null;
    // 音效缓存
    private m_effectMap: Map<AudioDefineType, Audio> = null;
    // 音效播放引用计数（用于置空音效缓存里的数据）
    private m_effectPlayRefMap: Map<AudioDefineType, number> = null;
    // 音乐
    private m_music: Audio = null;

    public static getInstance(): AudioManager {
        if (this.g_instance === null) {
            this.g_instance = new AudioManager();
        }
        return this.g_instance;
    }

    public static destroy(): void {
        if (this.g_instance !== null) {
            this.g_instance.destroy();
        }
        this.g_instance = null;
    }

    constructor() {
        super();

        this.m_effectPool = new Pool<Audio>(Audio, MAX_SAME_TIME_PLAY_SIZE);
        this.m_effectMap = new Map();
        this.m_effectPlayRefMap = new Map();
        this.m_music = new Audio();
    }

    /**
     * 检测路径是否合法
     * @param path {AudioDefineType} 动态路径
     * @return {boolean}
     */
    private _checkLegal(path: AudioDefineType): boolean {
        let legal: boolean = true;
        if (path === null || path === undefined) {
            legal = false;
        } else {
            if (this.m_effectMap.has(path)) {
                legal = false;
            }
        }
        return legal;
    }

    /**
     * 增加引用计数
     * @param path {AudioDefineType} 动态路径
     * @return {number | undefined} 当前引用计数
     */
    private _addRefCount(path: AudioDefineType): number | undefined {
        let refCount: number | undefined = this.m_effectPlayRefMap.get(path);
        if (refCount === undefined) {
            refCount = 0;
        }
        this.m_effectPlayRefMap.set(path, ++refCount);
        return refCount;
    }

    /**
     * 减小引用计数
     * @param path {AudioDefineType} 动态路径
     * @return {number | undefined} 当前引用计数
     */
    private _decRefCount(path: AudioDefineType): number | undefined {
        let refCount: number | undefined = this.m_effectPlayRefMap.get(path);
        if (refCount !== undefined && refCount > 0) {
            this.m_effectPlayRefMap.set(path, --refCount);
        }
        return refCount;
    }

    /**
     * 播放音乐 用于背景音乐，循环播放方式，切换音乐时会有转场效果
     * @param path {AudioDefineType} 动态加载声音路径
     * @param isGradually {boolean} 是否渐变转场效果，默认 true
     */
    public playMusic(path: AudioDefineType, isGradually: boolean = true): void {
        Loader.getInstance().load(path, (clip: cc.AudioClip) => {
            if (clip === null) {
                return;
            }

            let playCallBack: Function = () => {
                this.m_music.clear();
                this.m_music.setClip(clip);
                this.m_music.setPath(path);
                this.m_music.regCallback(() => {
                    Loader.getInstance().unload(path);
                    this.m_music.clear();
                });
                if (isGradually) {
                    AudioEffectUtil.openGradually(this.m_music);
                } else {
                    this.m_music.play();
                }

                this.m_music.loop = true;
            }

            let preMusicPath: AudioDefineType = this.m_music.getPath() as AudioDefineType;
            if (preMusicPath !== null) {
                if (isGradually) {
                    AudioEffectUtil.closeGradually(this.m_music, 0, GRADUALLY_TIME, () => {
                        Loader.getInstance().unload(path);
                        playCallBack();
                    })
                } else {
                    Loader.getInstance().unload(path);
                    playCallBack();
                }
            } else {
                playCallBack();
            }
        });
    }

    /**
     * 暂停当前播放中的音乐，如果当前没有音乐，会有个警告提示
     */
    public pauseMusic(): void {
        if (!this.m_music.getPath()) {
            Logger.getInstance().warn("无法找到需要暂停的音乐");
            return;
        }

        this.m_music.pause();
    }

    /**
     * 停止当前播放中的音乐，如果当前没有正在播放的音乐，会有个警告提示
     * @param isGradually {boolean} 是否转场效果
     */
    public stopMusic(isGradually: boolean = true): void {
        if (!this.m_music.getPath()) {
            Logger.getInstance().warn("无法找到需要停止的音乐");
            return;
        }

        if (isGradually) {
            AudioEffectUtil.closeGradually(this.m_music, 0, GRADUALLY_TIME, () => {
                this.m_music.stop();
            })
        } else {
            this.m_music.stop();
        }

    }

    /**
     * 恢复当前被暂停的音乐，如果当前没有正在播放的音乐，会有个警告提示
     */
    public resumeMusic(): void {
        if (!this.m_music.getPath()) {
            Logger.getInstance().warn("无法找到需要恢复的音乐");
            return;
        }

        this.m_music.resume();
    }

    /**
     * 播放音效 播放一次游戏内的短暂声音
     * @param path {AudioDefineType} 音效路径
     * @param isBreak {boolean} true 代表之前播放相同路径的资源会被停止后，播放新的路径音效，false 代表之前播放相同路径的资源会自然的播放完成，不会被主动停止
     * @param isCache {boolean} true 代表之前播放过的资源，在当前场景中缓存并不会被销毁，false 代表播放完成后立刻释放缓存资源
     */
    public playEffect(path: AudioDefineType, isBreak: boolean = false, isCache: boolean = true): void {
        if(isBreak) {
            let audio:Audio = this.m_effectMap.get(path);
            if(audio !== null && audio !== undefined) {
                audio.stop();
            }
        }

        Loader.getInstance().load(path, (clip: cc.AudioClip) => {
            if (clip === null) {
                return;
            }
            // 增加音效引用
            this._addRefCount(path);
            // 设置资源准备播放
            let audio: Audio = this.m_effectPool.get();
            this.m_effectMap.set(path, audio);
            audio.setClip(clip);
            audio.setPath(path);
            audio.regCallback(() => {
                let refCount: number = this.m_effectPlayRefMap.get(path);
                if (!isCache || refCount > 1) {
                    // 减小音效引用
                    refCount = this._decRefCount(path);
                    // 减小资源引用
                    Loader.getInstance().unload(path);
                }
                // 放入缓存池
                audio.clear();
                this.m_effectPool.put(audio);
                // 删除当前记录
                if (refCount <= 0) {
                    this.m_effectMap.delete(path);
                }
            });
            // 播放
            audio.play();
            audio.loop = false;
        });
    }

    /**
     * 暂停音效（不销毁缓存）
     * @param path {AudioDefineType} 音效路径
     */
    public pauseEffect(path: AudioDefineType): void {
        if (this._checkLegal(path)) {
            Logger.getInstance().warn(`无法暂停不存在的音效 ${path}`);
            return;
        }

        this.m_effectMap.get(path).pause();
    }

    /**
     * 暂停所有音效
     */
    public pauseAllEffect(): void {
        let effectSize: number = this.m_effectMap.size;
        if (effectSize > 0) {
            this.m_effectMap.forEach((value: Audio) => {
                value.pause();
            });
        }
    }

    /**
     * 停止音效
     * @param path {AudioDefineType} 音效路径
     */
    public stopEffect(path: AudioDefineType): void {
        if (this._checkLegal(path)) {
            Logger.getInstance().warn(`无法停止不存在的音效 ${path}`);
            return;
        }
        this.m_effectMap.get(path).stop();
    }

    /**
     * 停止所有音效
     */
    public stopAllEffect(): void {
        let effectSize: number = this.m_effectMap.size;
        if (effectSize > 0) {
            this.m_effectMap.forEach((value: Audio) => {
                value.stop();
            });
        }
    }

    /**
     * 恢复暂停后的音效
     * @param path {AudioDefineType} 音效路径
     */
    public resumeEffect(path: AudioDefineType): void {
        if (this._checkLegal(path)) {
            Logger.getInstance().warn(`无法恢复不存在的音效 ${path}`);
            return;
        }
        this.m_effectMap.get(path).resume();
    }

    /**
     * 恢复所有暂停后的音效
     */
    public resumeAllEffect(): void {
        let effectSize: number = this.m_effectMap.size;
        if (effectSize > 0) {
            this.m_effectMap.forEach((value: Audio) => {
                value.resume();
            });
        }
    }

    /**
     * 播放按钮点击音效
     */
    public playClick(): void {
        this.playEffect(AudioDefine.CLICK, false);
    }

    private _destroyEffect(): void {
        this.m_effectPool.destroy();
        this.m_effectPlayRefMap.clear();
        this.m_effectMap.forEach((value: Audio) => {
            value.stop();
            value.release();
        });
        this.m_effectPool = null;
        this.m_effectPlayRefMap = null;
        this.m_effectMap = null;
    }

    private _destroyMusic(): void {
        this.m_music.stop();
        this.m_music.release();
        this.m_music = null;
    }

    /**
     * 销毁 清理并停止所有正在播放声音（只允许通过 单例静态销毁调用，不允许使用成员方法进行 destroy）
     */
    public destroy(): void {
        this._destroyEffect();
        this._destroyMusic();
    }

}