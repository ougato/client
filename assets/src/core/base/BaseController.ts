/*
 * Author       : ougato
 * Date         : 2021-10-30 22:46:28
 * LastEditors  : ougato
 * LastEditTime : 2023-07-22 21:25:43
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