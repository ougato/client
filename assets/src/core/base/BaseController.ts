/*
 * Author       : ougato
 * Date         : 2021-10-30 22:46:28
 * LastEditors  : ougato
 * LastEditTime : 2021-11-05 12:07:29
 * FilePath     : /client/assets/src/core/base/BaseController.ts
 * Description  : 控制器基类
 */

import ClassDecorator from "../decorator/ClassDecorator";

@ClassDecorator.classname
export default class BaseController {

    constructor() {
        this.register();

    }

    /**
     * 注册消息
     */
    protected register(): void {

    }

    /**
     * 注销消息
     */
    protected unregister(): void {

    }

    /**
     * 销毁
     */
    public destroy(): void {
        this.unregister();
    }

}