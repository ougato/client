/*
 * Author       : ougato
 * Date         : 2021-10-30 22:43:02
 * LastEditors  : ougato
 * LastEditTime : 2021-10-31 00:29:36
 * FilePath     : /client/assets/src/core/manager/controller/ControllerManager.ts
 * Description  : 控制管理器
 */

import BaseController from "../../base/BaseController";
import BaseManager from "../../base/BaseManager";
import * as ControllerInterface from "../../interface/ControllerInterface";

export default class ControllerManager extends BaseManager {

    private static s_instance: ControllerManager = null;

    // 控制器集合 Map<控制器类名, 控制器>
    private m_controllerMap: Map<string, BaseController> = null;

    public static getInstance(): ControllerManager {
        if (this.s_instance === null) {
            this.s_instance = new ControllerManager();
        }
        return this.s_instance;
    }

    public static destroy(): void {
        if (this.s_instance !== null) {
            this.s_instance.destroy();
        }
        this.s_instance = null;
    }

    constructor() {
        super();

        this.m_controllerMap = new Map();
    }

    /**
     * 销毁 清理所有控制器
     */
    protected destroy(): void {
        this.m_controllerMap.forEach((value: BaseController, key: string, map: Map<string, BaseController>) => {
            value.destroy();
        });
        this.m_controllerMap.clear();
        this.m_controllerMap = null;
    }

    /**
     * 获取控制器对象
     * @param controllerClass 控制器类
     * @returns {BaseController} 控制器对象
     */
    public get<T extends BaseController>(controllerClass: ControllerInterface.ControllerClass<T>): T {
        let className: string = cc.js.getClassName(controllerClass);
        let baseController: T = this.m_controllerMap.get(className) as T;
        if (baseController === undefined || baseController === null) {
            baseController = this.add(controllerClass);
        }
        return baseController;
    }

    /**
     * 添加控制器
     * @param controllerClass {ControllerInterface.ControllerClass<T>} 控制器类
     */
    public add<T extends BaseController>(controllerClass: ControllerInterface.ControllerClass<T>): T {
        let className: string = cc.js.getClassName(controllerClass);

        if (this.m_controllerMap === null) {
            G.LogMgr.warn(`添加 ${className} 控制器失败`);
            return;
        }

        let baseController: T = this.m_controllerMap.get(className) as T;
        if (baseController) {
            G.LogMgr.warn(`已经存在 ${className} 对象`);
            return baseController;
        }

        baseController = new controllerClass();
        this.m_controllerMap.set(className, baseController);
        return baseController;
    }

    /**
     * 删除控制器
     */
    public del<T extends BaseController>(controllerClass: ControllerInterface.ControllerClass<T>): void {
        let className: string = cc.js.getClassName(controllerClass);

        if (this.m_controllerMap === null) {
            return;
        }

        let baseController: T = this.m_controllerMap.get(className) as T;
        if (baseController) {
            baseController.destroy();
            this.m_controllerMap.delete(className);
        }
    }

}