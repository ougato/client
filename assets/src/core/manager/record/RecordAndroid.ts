/*
 * Author       : ougato
 * Date         : 2024-01-10 00:39:09
 * LastEditors  : ougato
 * LastEditTime : 2024-01-11 18:45:07
 * FilePath     : /client/assets/src/core/manager/record/RecordAndroid.ts
 * Description  : Android 环境录制
 */

import TypeUtils from "../../utils/TypeUtils";
import RecordBase from "./RecordBase";

const RECORD_FILE_PATH: string = "org/cocos2dx/javascript/utils/RecordUtils";

export default class RecordAndroid extends RecordBase {

    // 截图摄像机
    private _camCamera: cc.Camera = null;
    // 纹理 
    private _textureFrame: cc.RenderTexture = null;
    // 录制定时器
    private _recordTimer: NodeJS.Timeout = null;
    // 自增
    private _index: number = 0;

    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        // let nodCamera: cc.Node = new cc.Node();
        // nodCamera.parent = cc.director.getScene();
        // nodCamera.width = cc.winSize.width;
        // nodCamera.height = cc.winSize.height;
        // nodCamera.x = nodCamera.width * 0.5;
        // nodCamera.anchorY = nodCamera.height * 0.5;

        // this._camCamera = nodCamera.addComponent(cc.Camera);
        // this._camCamera.cullingMask = 0xFFFFFFFF;

        // this._textureFrame = new cc.RenderTexture();
        // this._textureFrame.initWithSize(nodCamera.width, nodCamera.height);
        // this._camCamera.targetTexture = this._textureFrame;

        jsb.reflection.callStaticMethod(RECORD_FILE_PATH, "init", "()V");
    }

    public start(): void {
        jsb.reflection.callStaticMethod(RECORD_FILE_PATH, "start", "()V");
        // G.LogMgr.log("333333333333");
        // G.LogMgr.log(this.state);

        // if (this.state !== RecordDefine.State.STOPED) {
        //     return;
        // }
        // G.LogMgr.log("4444444444");

        // this.state = RecordDefine.State.RECORDING;

        // this._recordTimer = setInterval(() => {
        //     G.LogMgr.log("55555555");
        //     this._camCamera.node.parent.scaleY = -1;  // 截图默认是y轴反转的，渲染前需要将图像倒过来，渲染完倒回去
        //     this._camCamera.render();
        //     this._camCamera.node.parent.scaleY = 1

        //     // 这样我们就能从 RenderTexture 中获取到数据了
        //     let data = this._textureFrame.readPixels();
        //     // let width = this._textureFrame.width;
        //     // let height = this._textureFrame.height;


        //     // let scaleAction = cc.scaleTo(1, 0.3);
        //     // let targetPos = cc.v2(width - width / 6, height / 4);
        //     // let moveAction = cc.moveTo(1, targetPos);
        //     // let spawn = cc.spawn(scaleAction, moveAction);
        //     // capture.runAction(spawn);
        //     // let blinkAction = cc.blink(0.1, 1);
        //     // this.node.runAction(blinkAction);

        //     let fileName = `result_share_${this._index++}.jpg`;
        //     let fullPath = jsb.fileUtils.getWritablePath() + fileName;
        //     if (jsb.fileUtils.isFileExist(fullPath)) {
        //         jsb.fileUtils.removeFile(fullPath);
        //     }
        //     // @ts-ignore
        //     let success = jsb.saveImageData(data, cc.winSize.width, cc.winSize.height, fullPath);
        //     if (success) {
        //         cc.log("截屏成功，fullPath,width,height = ", fullPath, cc.winSize.width, cc.winSize.height);
        //         cc.loader.load(fullPath, function (err, tex) {  //读取本地文件，刷新需要显示的sprite控件
        //             if (err) {
        //                 cc.error(err);
        //             } else {
        //                 var spriteFrame = new cc.SpriteFrame(tex);
        //                 if (spriteFrame) {
        //                     // self.logo.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //                     // console.log("刷新logo")
        //                 }
        //             }
        //         });
        //     }
        //     else {
        //         cc.error("截屏失败！");
        //     }
        // }, 1000 / 24);

        // G.LogMgr.log("777");

    }

    public stop(): void {
        if (!TypeUtils.isNull(this._recordTimer)) {
            clearInterval(this._recordTimer);
            this._recordTimer = null;
        }
    }

}