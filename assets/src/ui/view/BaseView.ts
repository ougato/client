/*
 * @Author       : ougato
 * @Date         : 2020-08-08 15:44:28
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-25 15:48:07
 * @FilePath     : \client242\assets\src\ui\view\BaseView.ts
 * @Description  : 视图的父类，用于统一处理界面需要扩展的调用
 */

const { ccclass, property } = cc._decorator;

@ccclass
export class BaseView extends cc.Component {

    constructor() {
        super();
    }

    /**
     * 如果该组件启用，则每帧调用 update。
     * @param dt the delta time in seconds it took to complete the last frame 
     */
    protected update(dt: number): void {

    }

    /**
     * 如果该组件启用，则每帧调用 lateUpdate。 
     */
    protected lateUpdate(): void {

    }

    /**
     * 当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。 
     */
    protected onLoad(): void {

    }

    /**
     * 如果该组件第一次启用，则在所有组件的 update 之前调用。通常用于需要在所有组件的 onLoad 初始化完毕后执行的逻辑。 
     */
    protected start(): void {

    }

    /**
     * 当该组件被启用，并且它的节点也激活时。 
     */
    protected onEnable(): void {

    }

    /**
     * 当该组件被禁用或节点变为无效时调用。 
     */
    protected onDisable(): void {

    }

    /**
     * 当该组件被销毁时调用 
     */
    protected onDestroy(): void {

    }

    /**
     * 当该组件被销毁时调用 
     */
    protected onFocusInEditor(): void {

    }

    /**
     * 当该组件被销毁时调用 
     */
    protected onLostFocusInEditor(): void {

    }

    /**
     * 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。 
     */
    protected resetInEditor(): void {

    }

}
