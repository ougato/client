/*
 * @Author       : ougato
 * @Date         : 2020-09-11 11:45:00
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-11 18:24:47
 * @FilePath     : \client242\assets\src\core\Game.ts
 * @Description  : 游戏类
 */
import * as I18NDefine from "../define/I18NDefine";
import LocalStorageDefine from "../define/LocalStorageDefine";
import * as GameConfig from "../config/GameConfig"
import LangueUtil from "../utils/LangueUtil";

export default class Game {

    private static g_instance: Game = null;

    // 当前语言
    private m_langue: I18NDefine.Langue = null;
    // 音乐音量
    private m_musicVolume: number = null;
    // 音效音量
    private m_soundEffectVolume: number = null;

    public static getInstance(): Game {
        if (this.g_instance === null) {
            this.g_instance = new Game();
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

    }

    /**
     * 初始化
     */
    public init(): void {
        this._initLangue();
        this._initMusicVolume();
        this._initSoundEffectVolume();
    }

    /**
     * 初始化语言，先读取本地存储是否有语言数据，如果有就使用，没有就去获取手机系统语言 cc.sys.language，如果手机系统语言未知，就取系统默认语言
     */
    private _initLangue(): void {
        this.m_langue = LangueUtil.transCocos(cc.sys.language);
        let langue: LocalStorageDefineType = cc.sys.localStorage.getItem(LocalStorageDefine.LOCAL_LANGUE);
        if (langue !== null && langue !== undefined) {
            let 
            if( !== undefined) {

            }
        }
    }

    /**
     * 初始化音乐音量，先读取本地存储是否有音量数据，如果有就使用，没有就使用 GameConfig 默认的 DEFAULT_MUSIC_VOLUME 数据
     */
    private _initMusicVolume(): void {
        this.m_musicVolume = GameConfig.DEFAULT_MUSIC_VOLUME;
        let volume: string = cc.sys.localStorage.getItem(LocalStorageDefine.MUSIC_VOLUME);
        if (volume !== null && volume !== undefined) {
            let numVolume: number = Number(volume);
            if (!isNaN(numVolume) && numVolume >= 0 && numVolume <= 1) {
                this.m_musicVolume = numVolume;
            }
        }
        cc.sys.localStorage.setItem(this.m_musicVolume.toString());
    }

    /**
     * 初始化音效音量，先读取本地存储是否有音量数据，如果有就使用，没有就使用 GameConfig 默认的 DEFAULT_SOUND_EFFECT_VOLUME 数据
     */
    private _initSoundEffectVolume(): void {
        this.m_soundEffectVolume = GameConfig.DEFAULT_SOUND_EFFECT_VOLUME;
        let volume: string = cc.sys.localStorage.getItem(LocalStorageDefine.SOUND_EFFECT_VOLUME);
        if (volume !== null && volume !== undefined) {
            let numVolume: number = Number(volume);
            if (!isNaN(numVolume) && numVolume >= 0 && numVolume <= 1) {
                this.m_soundEffectVolume = numVolume;
            }
        }
        cc.sys.localStorage.setItem(this.m_soundEffectVolume.toString());
    }

    /**
     * 销毁
     */
    public destroy(): void {

    }
}