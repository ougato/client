/*
 * @Author       : ougato
 * @Date         : 2020-09-01 18:11:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-02 01:53:06
 * @FilePath     : \client242\assets\src\utils\AnimationEffectUtil.ts
 * @Description  : 动画工具
 */

import ViewStyleDefine from "../define/ViewStyleDefine";
import Logger from "../core/machine/Logger";

// 渐显渐隐时间（单位：秒）
const FACE_TIME = 0.2;

export default class AnimationEffectUtil {

    /**
     * 缩放打开动画
     * @param node {cc.Node} 运动节点
     */
    private static openScale(node: cc.Node, completeCallback?: Function): void {
        completeCallback();
    }

    /**
     * 缩放关闭动画
     * @param node {cc.Node} 运动节点
     */
    private static closeScale(node: cc.Node, completeCallback?: Function): void {
        completeCallback();
    }

    /**
     * 渐显动画
     * @param node {cc.Node} 运动节点
     */
    private static openFade(node: cc.Node, completeCallback?: Function): void {
        node.opacity = 0;
        node.active = true;
        
        cc.tween(node)
        .to(FACE_TIME, {opacity: 255})
        .call(()=>{
            completeCallback();
        })
        .start();
    }

    /**
     * 渐隐动画
     * @param node {cc.Node} 运动节点
     */
    private static closeFade(node: cc.Node, completeCallback?: Function): void {
        cc.tween(node)
        .to(FACE_TIME, {opacity: 0})
        .call(()=>{
            completeCallback();
        })
        .start();
    }
    
    /**
     * 播放打开动画
     * @param node {cc.Node} 运动节点
     * @param style {ViewStyleDefine} 动画风格
     * @param completeCallback {Function} 播放完成回调
     */
    public static playOpen(node: cc.Node, style: ViewStyleDefine, completeCallback?: Function): void {
        switch (style) {
            case ViewStyleDefine.FADE:
                this.openFade(node, completeCallback);
                break;
            case ViewStyleDefine.SCALE:
                this.openScale(node, completeCallback);
                break;
            case ViewStyleDefine.LEFT_RIGHT:

                break;
            case ViewStyleDefine.RIGHT_LEFT:

                break;
            case ViewStyleDefine.BOTTOM_TOP:

                break;
            case ViewStyleDefine.TOP_BOTTOM:

                break;
            default:
                Logger.getInstance().warn(`视图关闭动画 ${ViewStyleDefine[ViewStyleDefine[style]]} 风格不存在`);
                break;
        }
    }

    /**
     * 播放关闭动画
     * @param node {cc.Node} 运动节点
     * @param style {ViewStyleDefine} 动画风格
     * @param completeCallback {Function} 播放完成回调
     */
    public static playClose(node: cc.Node, style: ViewStyleDefine, completeCallback?: Function): void {
        switch (style) {
            case ViewStyleDefine.FADE:
                this.closeFade(node, completeCallback);
                break;
            case ViewStyleDefine.SCALE:
                this.closeScale(node, completeCallback);
                break;
            case ViewStyleDefine.LEFT_RIGHT:

                break;
            case ViewStyleDefine.RIGHT_LEFT:

                break;
            case ViewStyleDefine.BOTTOM_TOP:

                break;
            case ViewStyleDefine.TOP_BOTTOM:

                break;
            default:
                Logger.getInstance().warn(`视图打开动画 ${ViewStyleDefine[ViewStyleDefine[style]]} 风格不存在`);
                break;
        }
    }

}