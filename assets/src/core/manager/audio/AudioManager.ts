/*
 * @Author       : ougato
 * @Date         : 2020-08-08 18:14:04
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-17 10:48:36
 * @FilePath     : \client\assets\src\core\manager\audio\AudioManager.ts
 * @Description  : 声音管理器，用于播放（背景音乐 和 游戏音效），格式：[wav、mp3、ogg]
 */

import { Manager } from "../Manager";
import { AudioDefine } from "../../../define/AudioDefine";

// 声音资源路径
const AUDIO_PATH = "resources/audio/";
// 音乐相对文件夹
const MUSIC_RELPATH = "music/";
// 音效相对文件夹
const EFFECT_RELPATH = "effect/";

export class AudioManager extends Manager implements IManager {

    private static g_instance: AudioManager = null;
    
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

    }

    public preloadAudio(): void {

    }

    /**
     * 播放音乐 用于背景音乐，循环播放方式，切换音乐时会有转场效果
     * @param relpath 
     */
    public playMusic(relpath: AudioDefineType): void {
        
    }

    /**
     * 播放音效 用于播放游戏内所有一次性播方的声音
     * @param relpath {AudioDefine} 音效文件夹 + 音效名
     * @param isBreak {boolean} 是否打断重复播放的音效
     */
    public playEffect(relpath: string, isBreak: boolean = false): void {

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