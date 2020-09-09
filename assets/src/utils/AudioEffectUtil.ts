/*
 * @Author       : ougato
 * @Date         : 2020-09-09 03:10:00
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-09 16:16:16
 * @FilePath     : \client242\assets\src\utils\AudioEffectUtil.ts
 * @Description  : 声音效果工具
 */

export default class AudioEffectUtil {

    /**
     * 打开音量渐变转场效果
     */
    public static openGradually(audio: cc.AudioSource, maxVolume: number = 1, graduallyTime: number = 5, completeCallback?: Function): void {
        audio.volume = 0.1;
        audio.play();
        cc.tween(audio)
            .to(graduallyTime, { volume: maxVolume })
            .call(() => {
                if (completeCallback) {
                    completeCallback();
                }
            })
            .start();
    }

    /**
     * 关闭音量渐变转场效果
     */
    public static closeGradually(audio: cc.AudioSource, minVolume: number = 0, graduallyTime: number = 5, completeCallback?: Function): void {
        cc.tween(audio)
            .to(graduallyTime, { volume: minVolume })
            .call(() => {
                if (completeCallback) {
                    completeCallback();
                }
            })
            .start();
    }

}