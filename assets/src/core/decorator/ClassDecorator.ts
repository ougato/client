/*
 * Author       : ougato
 * Date         : 2021-11-05 11:40:08
 * LastEditors  : ougato
 * LastEditTime : 2021-11-05 11:44:23
 * FilePath     : /client/assets/src/core/decorator/ClassDecorator.ts
 * Description  : 类装饰器
 */

export default class ClassDecorator {

    /**
     * 类名装饰器
     */
    public static get classname(): Function {
        return function (target: any) {
            let frameInfo = cc['_RF'].peek();
            let script = frameInfo.script;
            cc.js.setClassName(script, target);
        }
    }

}