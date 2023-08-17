/*
 * Author       : ougato
 * Date         : 2021-10-29 17:28:20
 * LastEditors  : ougato
 * LastEditTime : 2023-07-22 20:54:19
 * FilePath     : /client/assets/src/core/manager/data/DataManager.ts
 * Description  : 数据管理器
 */

import BaseData from "../../base/BaseData";
import BaseManager from "../../base/BaseManager";
import { DataInterface } from "../../interface/DataInterface";
import TypeUtils from "../../utils/TypeUtils";

export default class DataManager extends BaseManager {

    private static s_instance: DataManager = null;

    // 数据注册结构 Map<数据类名, 数据>
    private _dataMap: Map<string, BaseData> = null;

    public static getInstance(): DataManager {
        if (this.s_instance === null) {
            this.s_instance = new DataManager();
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

        this._dataMap = new Map();
    }

    /**
     * 销毁 清理所有数据
     */
    protected destroy(): void {
        this._dataMap.forEach((value: BaseData, key: string, map: Map<string, BaseData>) => {
            value.destroy();
        });
        this._dataMap.clear();
        this._dataMap = null;
    }

    /**
     * 获取数据对象
     * @param dataClass 数据类
     * @returns {BaseData} 数据对象
     */
    public get<T extends BaseData>(dataClass: DataInterface.DataClass<T>): T {
        let className: string = cc.js.getClassName(dataClass);
        let baseData: T = this._dataMap.get(className) as T;
        if (TypeUtils.isNull(baseData)) {
            baseData = this.add(dataClass);
        }
        return baseData;
    }

    /**
     * 添加数据
     * @param dataClass {DataInterface.DataClass<T>} 数据类
     */
    public add<T extends BaseData>(dataClass: DataInterface.DataClass<T>): T {
        let className: string = cc.js.getClassName(dataClass);

        if (this._dataMap === null) {
            G.LogMgr.warn(`添加 ${className} 数据失败`);
            return;
        }

        let baseData: T = this._dataMap.get(className) as T;
        if (baseData) {
            G.LogMgr.warn(`已经存在 ${className} 对象`);
            return baseData;
        }

        baseData = new dataClass();
        this._dataMap.set(className, baseData);
        return baseData;
    }


    /**
     * 删除数据
     */
    public del<T extends BaseData>(dataClass: DataInterface.DataClass<T>): void {
        let className: string = cc.js.getClassName(dataClass);

        if (this._dataMap === null) {
            return;
        }

        let baseData: T = this._dataMap.get(className) as T;
        if (baseData) {
            baseData.destroy();
            this._dataMap.delete(className);
        }
    }


}