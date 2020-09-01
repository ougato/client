/*
 * @Author       : ougato
 * @Date         : 2020-09-01 18:11:11
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-01 18:24:13
 * @FilePath     : \client242\assets\src\utils\AnimationUtil.ts
 * @Description  : 动画工具
 */

import ViewStyleDefine from "../define/ViewStyleDefine";
import Logger from "../core/machine/Logger";

export default class AnimationUtil {

    /**
     * 旋转动画出场
     * @param node {cc.Node} 运动节点
     */
    private static rotate(node: cc.Node, completeCallback?: Function): void {
        completeCallback();
    }

    public static play(node: cc.Node, style: ViewStyleDefine, completeCallback?: Function): void {
        switch (style) {
            case ViewStyleDefine.FADE:

                break;
            case ViewStyleDefine.ROTATE:
                this.rotate(node, completeCallback);
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