/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:04
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 03:25:02
 * @FilePath     : \client242\assets\src\core\manager\audio\AudioManager.ts
 * @Description  : 声音管理器，用于播放（背景音乐 和 游戏音效），格式：[wav、mp3、ogg]
 */

import Manager from "../Manager";
import AudioDefine, { DynamicMusicDefine, DynamicEffectDefine } from "../../../define/AudioDefine";
import Loader from "../../machine/Loader";
import Audio from "./Audio";
import Pool from "../../../utils/Pool";
import Logger from "../../machine/Logger";
import AudioEffectUtil from "../../../utils/AudioEffectUtil";

// 同时播放最大数量
const MAX_SAME_TIME_PLAY_SIZE = 10;

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
    private checkLegal(path: AudioDefineType): boolean {
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
    private addRefCount(path: AudioDefineType): number | undefined {
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
    private decRefCount(path: AudioDefineType): number | undefined {
        let refCount: number | undefined = this.m_effectPlayRefMap.get(path);
        if (refCount !== undefined && refCount > 0) {
            this.m_effectPlayRefMap.set(path, --refCount);
        }
        return refCount;
    }

    /**
     * 播放音乐 用于背景音乐，循环播放方式，切换音乐时会有转场效果
     * @param path {DynamicMusicDefine} 动态加载声音路径
     * @param isFade {boolean} 是否渐变转场效果
     */
    public playMusic(path: DynamicMusicDefine, isFade: boolean = true): void {
        Loader.getInstance().load(path, (clip: cc.AudioClip) => {
            if (clip === null) {
                return;
            }

            let preMusicPath: DynamicMusicDefine = this.m_music.getPath() as DynamicMusicDefine;
            if (preMusicPath !== null) {
                AudioEffectUtil.closeGradually(this.m_music, () => {
                    this.m_music.stop();
                });
            } else {
                
            }

            this.m_music.setClip(clip);
            this.m_music.setPath(path);
            this.m_music.loop = true;
            this.m_music.regCallback(()=>{
                Loader.getInstance().unload(path);
            });
            this.m_music.play();
        });
    }

    /**
     * 暂停音乐
     */
    public pauseMusic(): void {
        if (!this.m_music) {
            Logger.getInstance().warn("无法找到需要暂停的音乐");
            return;
        }

        this.m_music.pause();
    }

    /**
     * 停止音乐
     */
    public stopMusic(): void {
        if (!this.m_music) {
            Logger.getInstance().warn("无法找到需要停止的音乐");
            return;
        }

        this.m_music.stop();
    }

    /**
     * 恢复音乐
     */
    public resumeMusic(): void {
        if (!this.m_music) {
            Logger.getInstance().warn("无法找到需要恢复的音乐");
            return;
        }

        this.m_music.resume();
    }

    /**
     * 播放音效 用于播放游戏内所有一次性播方的声音
     * @param path {DynamicEffectDefine} 音效路径
     * @param isBreak {boolean} 是否打断重复播放的音效
     */
    public playEffect(path: DynamicEffectDefine, isBreak: boolean = false): void {
        Loader.getInstance().load(path, (clip: cc.AudioClip) => {
            if (clip === null) {
                return;
            }
            // 增加音效引用
            this.addRefCount(path);
            // 设置资源准备播放
            let audio: Audio = this.m_effectPool.get();
            this.m_effectMap.set(path, audio);
            audio.setClip(clip);
            audio.setPath(path);
            audio.regCallback(() => {
                // 减小音效引用
                let refCount: number = this.decRefCount(path);
                // 减小资源引用
                Loader.getInstance().unload(path);
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
        });
    }

    /**
     * 暂停音效（不销毁缓存）
     * @param path {DynamicEffectDefine} 音效路径
     */
    public pauseEffect(path: DynamicEffectDefine): void {
        if (this.checkLegal(path)) {
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
     * 停止音效（销毁缓存）
     * @param path {DynamicEffectDefine} 音效路径
     */
    public stopEffect(path: DynamicEffectDefine): void {
        if (this.checkLegal(path)) {
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
     * @param path {DynamicEffectDefine} 音效路径
     */
    public resumeEffect(path: DynamicEffectDefine): void {
        if (this.checkLegal(path)) {
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

    /**
     * 销毁
     */
    public destroy(): void {

    }

}