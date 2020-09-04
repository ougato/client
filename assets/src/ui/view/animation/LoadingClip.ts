/*
 * @Author       : ougato
 * @Date         : 2020-08-25 11:51:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-04 23:17:36
 * @FilePath     : \client242\assets\src\ui\view\animation\LoadingClip.ts
 * @Description  : 加载转动的剪辑动画
 */

const { ccclass, property } = cc._decorator;

// 层级交换
enum Order {
    // 小球在底部
    BOTTOM = 100,
    // 小球在顶部
    TOP = 101
}

@ccclass
export default class LoadingClip extends cc.Component {

    @property(cc.Sprite)
    private imgBall1: cc.Sprite = null;

    @property(cc.Sprite)
    private imgBall2: cc.Sprite = null;

    // 动画组件
    private m_anim: cc.Animation = null;

    protected onLoad(): void {
        this.initData();
        this.initView();
    }

    protected start(): void {

    }

    /**
     * 初始化数据
     */
    private initData(): void {
        this.m_anim = this.node.getComponent(cc.Animation)
    }

    /**
     * 初始化视图
     */
    private initView(): void {
        this.imgBall1.node.zIndex = Order.BOTTOM;
        this.imgBall2.node.zIndex = Order.TOP;
    }

    /**
     * 交叉动画时层级交换 回调函数
     */
    private onSwitchOrder(): void {
        this.imgBall1.node.zIndex = this.imgBall1.node.zIndex === Order.BOTTOM ? Order.TOP : Order.BOTTOM;
        this.imgBall2.node.zIndex = this.imgBall2.node.zIndex === Order.BOTTOM ? Order.TOP : Order.BOTTOM;
    }

    /**
     * 播放加载动画
     */
    public play(): void {
        if (this.m_anim) {
            this.m_anim.play();
        }
    }

    /**
     * 停止加载动画
     */
    public stop(): void {
        if (this.m_anim) {
            this.m_anim.stop();
        }
        this.initView();
    }

}