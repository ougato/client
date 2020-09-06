/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:04
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-06 22:07:11
 * @FilePath     : \client242\assets\src\core\manager\audio\AudioManager.ts
 * @Description  : 声音管理器，用于播放（背景音乐 和 游戏音效），格式：[wav、mp3、ogg]
 */

import Manager from "../Manager";
import { AudioDefine } from "../../../define/AudioDefine";
import Loader from "../../machine/Loader";
import Audio from "./Audio";

export default class AudioManager extends Manager implements ManagerInterface {

    private static g_instance: AudioManager = null;

    // 音效缓存
    private m_effectMap: Map<AudioDefineType, Audio> = null;
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

        this.m_effectMap = new Map();
    }

    /**
     * 播放音乐 用于背景音乐，循环播放方式，切换音乐时会有转场效果
     * @param path {AudioDefineType} 动态加载声音路径
     */
    public playMusic(path: AudioDefineType, isFade: boolean = true): void {

    }

    /**
     * 暂停音乐
     */
    public pauseMusic(): void {

    }

    /**
     * 停止音乐
     */
    public stopMusic(): void {

    }

    /**
     * 恢复音乐
     */
    public resumeMusic(): void {

    }

    /**
     * 播放音效 用于播放游戏内所有一次性播方的声音
     * @param path {AudioDefineType} 动态加载声音路径
     * @param isBreak {boolean} 是否打断重复播放的音效
     */
    public playEffect(path: AudioDefineType, isCache: boolean = true, isBreak: boolean = false): void {
        Loader.getInstance().load(path, (clip: cc.AudioClip) => {
            let audio: Audio = new Audio(clip);
            this.m_effectMap.set(path, audio);
            audio.endCallback = () => {
                console.log(`完成 ${path} 播放`);
            }
            audio.play();
        });
    }

    /**
     * 暂停音效（不销毁缓存）
     * @param path 
     */
    public pauseEffect(path: AudioDefineType): void {
        let clip: cc.AudioClip = Loader.getInstance().getCache(path) as cc.AudioClip;

        // let audio: Audio = new Audio(clip);
        // this.m_effectMap.set(path, audio);
        // audio.endCallback = () => {
        //     console.log(`完成111 ${path} 播放`);
        // }
        // audio.play();
    }

    /**
     * 暂停所有音效
     */
    public pauseAllEffect(): void {

    }

    /**
     * 停止音效（销毁缓存）
     * @param path 
     */
    public stopEffect(path: AudioDefineType): void {

    }

    /**
     * 停止所有音效
     */
    public stopAllEffect(): void {

    }

    /**
     * 恢复暂停后的音效
     * @param path {AudioDefineType} 音效路径
     */
    public resumeEffect(path: AudioDefineType): void {

    }

    /**
     * 恢复所有暂停后的音效
     */
    public resumeAllEffect(): void {

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