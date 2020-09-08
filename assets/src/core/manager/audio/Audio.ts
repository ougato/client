/*
 * @Author       : ougato
 * @Date         : 2020-09-06 13:24:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 02:46:28
 * @FilePath     : \client242\assets\src\core\manager\audio\Audio.ts
 * @Description  : 重写 cc.AudioSource 声音类
 */

export default class Audio extends cc.AudioSource implements PoolItemInterface {

    // 结束时间（单位：毫秒）
    private m_endTime: number = null;
    // 结束定时器
    private m_endTimer: number = null;
    // 声音结束回调方法
    private m_endCallback: Function = null;
    // 资源路径
    private m_assetsPath: AudioDefineType = null;

    constructor() {
        super();
    }

    /**
     * 注册播放完成回调
     * @param callback {Function} 回调
     */
    public regCallback(callback: Function): void {
        this.m_endCallback = callback;
    }

    /**
     * 设置声音资源
     * @param clip {cc.AudioClip} 声音资源
     */
    public setClip(clip: cc.AudioClip): void {
        this.clip = clip;
        this.m_endTime = clip.duration;
    }

    /**
     * 设置动态加载资源路径
     * @param path {AudioDefineType} 资源路径
     */
    public setPath(path: AudioDefineType): void {
        this.m_assetsPath = path;
    }

    /**
     * 获取动态加载资源路径
     * @return {AudioDefineType} 资源路径
     */
    public getPath(): AudioDefineType {
        return this.m_assetsPath;
    }

    /**
     * 调用播放完成
     */
    private callFinish(): void {
        if (this.m_endCallback) {
            this.m_endCallback();
        }
    }

    /**
     * 启动播放结束定时器
     */
    private startTimer(): void {
        if (this.m_endTimer === undefined || this.m_endTimer === null) {
            this.m_endTimer = setTimeout(() => {
                this.callFinish();
            }, this.m_endTime * 1000);
        }
    }

    /**
     * 停止播放结束定时器
     */
    private stopTimer(): void {
        if (this.m_endTimer !== undefined && this.m_endTimer !== null) {
            clearTimeout(this.m_endTimer);
            this.m_endTimer = null;
        }
    }

    /**
     * 重写 play 方法
     */
    public play(): void {
        super.play();
        this.startTimer();
    }

    /**
     * 重写 stop 方法
     */
    public stop(): void {
        super.stop();
        this.callFinish();
    }

    /**
     * 重写 pause 方法
     */
    public pause(): void {
        super.pause();
        this.stopTimer();
        this.m_endTime = super.getCurrentTime();
    }

    /**
     * 重写 resume 方法
     */
    public resume(): void {
        this.m_endTime = super.getCurrentTime();
        super.resume();
        this.startTimer();
    }

    /**
     * 重写 rewind 方法
     */
    public rewind(): void {
        this.stopTimer();
        this.m_endTime = this.clip.duration;
        super.rewind();
        this.startTimer();
    }

    /**
     * 清理
     */
    public clear(): void {
        this.m_endTime = null;
        this.stopTimer();
        this.m_endCallback = null;
        this.m_assetsPath = null;
    }

    /**
     * 释放
     */
    public release(): void {
        this.clear();
        if (cc.isValid(this)) {
            super.destroy();
        }
    }

}