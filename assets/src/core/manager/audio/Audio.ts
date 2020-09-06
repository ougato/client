/*
 * @Author       : ougato
 * @Date         : 2020-09-06 13:24:35
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-06 22:04:16
 * @FilePath     : \client242\assets\src\core\manager\audio\Audio.ts
 * @Description  : 声音类
 */

export default class Audio extends cc.AudioSource {

    // 结束时间（单位：毫秒）
    private m_endTime: number = null;
    // 结束定时器
    private m_endTimer: number = null;
    // 声音结束回调方法
    private m_endCallback: Function = null;

    constructor(clip: cc.AudioClip) {
        super();

        this.clip = clip; // 父类音频成员
        this.m_endTime = clip.duration;
    }

    public set endCallback(callback: Function) {
        this.m_endCallback = callback;
    }

    /**
     * 调用播放完成
     */
    private callFinish():void {
        if (this.m_endCallback) {
            this.m_endCallback();
        }
        this.clear();
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
        
        super.rewind();
    }

    /**
     * 清理
     */
    private clear(): void {
        this.m_endTime = null;
        this.m_endTimer = null;
        this.m_endCallback = null;
    }

}