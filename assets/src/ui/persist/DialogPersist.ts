/*
 * @Author       : ougato
 * @Date         : 2020-09-04 23:07:17
 * LastEditors  : ougato
 * LastEditTime : 2024-01-17 14:53:47
 * FilePath     : /client/assets/src/ui/persist/DialogPersist.ts
 * @Description  : 对话框（按钮自定义文字）
 */

import BasePersist from "../../core/base/BasePersist";
import { UIInterface } from "../../core/interface/UIInterface";
import TypeUtils from "../../core/utils/TypeUtils";
import { LangDefine } from "../../define/LangDefine";

const { ccclass, property } = cc._decorator;

// 弹窗动画打开时间（单位：秒）
const OPEN_DURATION_TIME: number = 0.3;
// 弹窗动画关闭时间（单位：秒）
const CLOSE_DURATION_TIME: number = 0.3;

@ccclass
export default class DialogPersist extends BasePersist {

    public static prefabPath: string = "prefab/persist/DialogPersist";

    @property(cc.Label)
    private labTitle: cc.Label = null;

    @property(cc.Label)
    private labContent: cc.Label = null;

    @property(cc.Sprite)
    private imgFrame: cc.Sprite = null;

    @property(cc.Button)
    private btnConfirm: cc.Button = null;

    @property(cc.Button)
    private btnCancel: cc.Button = null;

    @property(cc.Button)
    private btnClose: cc.Button = null;

    // 关闭后回调
    public closeCallback: Function = null;
    // 参数数据
    private _data: UIInterface.DialogParam = null;
    // 播放动画
    private _tween: cc.Tween = null;

    protected onLoad(): void {
        super.onLoad();

    }

    /**
     * 即将显示回调
     * @param data {UIInterface.DialogParam} 对话框参数
     */
    public onShow(data: UIInterface.DialogParam): void {
        super.onShow(data);
        this._data = data;

        if (TypeUtils.isNull(data.title)) {
            data.title = LangDefine.Key.HINT;
        }

        if (TypeUtils.isNull(data.isShowCancel)) {
            data.isShowCancel = false;
        }

        if (TypeUtils.isNull(data.isShowClose)) {
            data.isShowClose = true;
        }

        this.setLabelLang(this.labTitle, { key: data.title });
        this.setLabelLang(this.labContent, { key: data.content });

        this.btnCancel.node.active = data.isShowCancel;
        this.btnClose.node.active = data.isShowClose;

        this.playOpenAnimation();
    }

    protected initUI(): void {
        this.labTitle.string = "";
        this.labContent.string = "";
    }

    private playOpenAnimation(): void {
        this.stopAnimation();
        this.setOptionBtn(true);
        this._tween = cc.tween(this.imgFrame.node)
            .set({ opacity: 0, scale: 0.5 })
            .to(OPEN_DURATION_TIME, { scale: 1, opacity: 255 }, { easing: 'backOut' })
            .start();
    }

    public playCloseAnimation(): void {
        this.stopAnimation();
        this.setOptionBtn(false);
        this._tween = cc.tween(this.imgFrame.node)
            .to(CLOSE_DURATION_TIME, { scale: 0.5, opacity: 0 }, { easing: 'backIn' })
            .call(() => {
                this.hide();
                this.closeCallback && this.closeCallback(this._data);
            })
            .start();
    }

    private stopAnimation(): void {
        if (this._tween) {
            this._tween.stop();
            this._tween = null;
        }
    }

    /**
     * 设置选项按钮是否可点击
     * @param isCanClick 
     */
    private setOptionBtn(isCanClick: boolean): void {
        this.btnConfirm.interactable = isCanClick;
        this.btnCancel.interactable = isCanClick;
        this.btnClose.interactable = isCanClick;
    }

    /**
     * 点击关闭
     */
    private clickClose(): void {
        this.playCloseAnimation();
    }

    /**
     * 点击取消
     */
    private clickCancel(): void {
        this._data.cancelCallback && this._data.cancelCallback();
        this.playCloseAnimation();
    }

    /**
     * 点击确认
     */
    private clickConfirm(): void {
        this._data.confirmCallback && this._data.confirmCallback();
        this.playCloseAnimation();
    }

    protected onClick<T>(ev: cc.Event.EventTouch, data?: T): void {
        super.onClick(ev, true);
        switch (ev.target.name) {
            case "btnConfirm":
                this.clickConfirm()
                break;
            case "btnCancel":
                this.clickCancel();
                break;
            case "btnClose":
                this.clickClose();
                break;
        }
    }

}