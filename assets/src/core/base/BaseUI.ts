/*
 * Author       : ougato
 * Date         : 2021-07-07 00:21:20
 * LastEditors  : ougato
 * LastEditTime : 2021-07-08 01:34:10
 * FilePath     : /client/assets/src/core/base/BaseUI.ts
 * Description  : UI 基类、是 BaseView 和 BaseScene 的父类
 */

export default class BaseUI extends cc.Component {

    /**
     * 如果该组件启用，则每帧调用 update。
     * @param dt {number} 完成最后一帧所需的时间增量（以秒为单位）
     */
    protected update(dt: number): void {

    }

    /**
     * 如果该组件启用，则每帧调用 lateUpdate。
     * @param dt {number} 完成最后一帧所需的时间增量（以秒为单位）
     */
    protected lateUpdate(dt: number): void {

    }

    /**
     * 当附加到一个激活的节点上或者其节点第一次激活时候调用。onLoad 总是会在任何 start 方法调用前执行，这能用于安排脚本的初始化顺序。
     */
    protected onLoad(): void {
        this.register();
        this.initData();
        this.initUI();
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

    /**
     * 加载完成回调 数据带入
     * @param data {...any[]} 多个数据参数
     */
    protected onLoaded(...data: any[]): void {

    }

    /**
     * 多语言切换时回调
     */
    protected onLanguage(): void {

    }

    /**
     * 注册事件
     */
    protected register(): void {
        console.log("BaseUI register");
    }

    /**
     * 初始化数据
     */
    protected initData(): void {
        console.log("BaseUI initData");
    }

    /**
     * 初始化界面
     */
    protected initUI(): void {
        console.log("BaseUI initUI");
    }
}