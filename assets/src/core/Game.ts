/*
 * @Author       : ougato
 * @Date         : 2020-09-11 11:45:00
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 01:21:36
 * @FilePath     : \client242\assets\src\core\Game.ts
 * @Description  : 游戏类
 */
import LanguageDefine from "../define/LanguageDefine";
import LocalStorageDefine from "../define/LocalStorageDefine";
import * as GameConfig from "../config/GameConfig"
import LanguageUtil from "../utils/LanguageUtil";
import Logger from "./machine/Logger";

export default class Game {

    private static s_instance: Game = new Game();

    // 语言
    private m_language: LanguageDefineType = null;
    // 音乐音量
    private m_musicVolume: number = null;
    // 音效音量
    private m_soundEffectVolume: number = null;
    // 版本号
    private m_vesrion: string = null;

    public static getInstance(): Game {
        if (this.s_instance === null) {
            this.s_instance = new Game();
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
        this.init();
    }

    /**
     * 初始化
     */
    public init(): void {
        this._initLanguage();
        this._initMusicVolume();
        this._initSoundEffectVolume();
        this._initVersion();
    }

    /**
     * 初始化语言，先读取本地存储是否有语言数据，如果有就使用，没有就去获取手机系统语言 cc.sys.language，如果手机系统语言未知，就取系统默认语言
     */
    private _initLanguage(): void {
        this.m_language = LanguageUtil.transCocos(cc.sys.language);
        let language: LanguageDefineType = cc.sys.localStorage.getItem(LocalStorageDefine.LOCAL_LANGUAGE);
        if (language !== null && language !== undefined && LanguageDefine[language] !== undefined) {
            this.m_language = LanguageDefine[language];
        } else {
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_LANGUAGE, this.m_language);
        }
    }

    /**
     * 初始化音乐音量，先读取本地存储是否有音量数据，如果有就使用，没有就使用 GameConfig 默认的 DEFAULT_MUSIC_VOLUME 数据
     */
    private _initMusicVolume(): void {
        this.m_musicVolume = GameConfig.DEFAULT_MUSIC_VOLUME;
        let volume: string = cc.sys.localStorage.getItem(LocalStorageDefine.LOCAL_MUSIC_VOLUME);
        if (volume !== null && volume !== undefined && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1) {
            this.m_musicVolume = Number(volume);
        } else {
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_MUSIC_VOLUME, this.m_musicVolume.toString());
        }
    }

    /**
     * 初始化音效音量，先读取本地存储是否有音量数据，如果有就使用，没有就使用 GameConfig 默认的 DEFAULT_SOUND_EFFECT_VOLUME 数据
     */
    private _initSoundEffectVolume(): void {
        this.m_soundEffectVolume = GameConfig.DEFAULT_SOUND_EFFECT_VOLUME;
        let volume: string = cc.sys.localStorage.getItem(LocalStorageDefine.LOCAL_SOUND_EFFECT_VOLUME);
        if (volume !== null && volume !== undefined && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1) {
            this.m_soundEffectVolume = Number(volume);
        } else {
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_SOUND_EFFECT_VOLUME, this.m_soundEffectVolume.toString());
        }

    }

    /**
     * 初始化资源版本号，先读取本地存储是否有资源版本数据，如果有就使用，没有就使用 GameConfig 默认的 VERSION 数据
     */
    private _initVersion(): void {
        this.m_vesrion = GameConfig.VERSION;
        let version: string = cc.sys.localStorage.getItem(LocalStorageDefine.LOCAL_VERSION);
        if (version !== null && version !== undefined) {
            this.m_vesrion = version;
        } else {
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_VERSION, this.m_vesrion);
        }
    }

    public get language(): LanguageDefineType {
        return this.m_language;
    }

    public set language(language: LanguageDefineType) {
        if (language !== null && language !== undefined && LanguageDefine[language] !== undefined) {
            this.m_language = language;
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_LANGUAGE, language);
        } else {
            Logger.getInstance().warn(`language 设置参数错误 ${language}`);
        }
    }

    public get musicVolume(): number {
        return this.m_musicVolume;
    }

    public set musicVolume(volume: number) {
        if (volume !== null && volume !== undefined && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1) {
            this.m_musicVolume = volume;
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_MUSIC_VOLUME, volume.toString());
        } else {
            Logger.getInstance().warn(`musicVolume 设置参数错误 ${volume}`);
        }
    }

    public get soundEffectVolume(): number {
        return this.m_soundEffectVolume;
    }

    public set soundEffectVolume(volume: number) {
        if (volume !== null && volume !== undefined && !isNaN(Number(volume)) && Number(volume) >= 0 && Number(volume) <= 1) {
            this.m_soundEffectVolume = volume;
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_SOUND_EFFECT_VOLUME, volume.toString());
        } else {
            Logger.getInstance().warn(`soundEffectVolume 设置参数错误 ${volume}`);
        }
    }

    public get vesrion(): string {
        return this.m_vesrion;
    }

    public set version(version: string) {
        if (version !== null && version !== undefined) {
            this.m_vesrion = version;
            cc.sys.localStorage.setItem(LocalStorageDefine.LOCAL_VERSION, version);
        } else {
            Logger.getInstance().warn(`version 设置参数不能为空`);
        }
    }

    /**
     * 销毁
     */
    public destroy(): void {
        this.m_language = null;
        this.m_musicVolume = null;
        this.m_soundEffectVolume = null;
        this.m_vesrion = null;
    }
}