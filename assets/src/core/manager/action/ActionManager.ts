/*
 * Author       : ougato
 * Date         : 2023-12-28 11:29:24
 * LastEditors  : ougato
 * LastEditTime : 2024-01-02 19:00:13
 * FilePath     : /client/assets/src/core/manager/action/ActionManager.ts
 * Description  : 用户行为管理器
 */

import GameData from "../../../data/GameData";
import UserData from "../../../data/UserData";
import BaseManager from "../../base/BaseManager";
import { ActionDefine } from "../../define/ActionDefine";
import { DBDefine } from "../../define/DBDefine";
import { ActionInterface } from "../../interface/ActionInterface";
import { DBInterface } from "../../interface/DBInterface";
import TypeUtils from "../../utils/TypeUtils";
import DataManager from "../data/DataManager";
import DBManager from "../database/DBManager";

export default class ActionManager extends BaseManager {

    private static s_instance: ActionManager = null;

    // 上一次移动时间
    protected _prevTime: number = 0;

    public static getInstance(): ActionManager {
        if (this.s_instance === null) {
            this.s_instance = new ActionManager();
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

    }

    protected destroy(): void {

    }

    protected save<T>(data: DBInterface.ActionData<T>) {
        if (TypeUtils.isNull(data.timestamp)) {
            let gameData: GameData = DataManager.getInstance().get(GameData);

            if (TypeUtils.isNull(gameData.timeDifferenceFirst)) {
                data.timestamp = -Date.now();
            } else {
                data.timestamp = Date.now() + gameData.timeDifferenceFirst;
            }
        }
        if (TypeUtils.isNull(data.uid)) {
            let userData: UserData = DataManager.getInstance().get(UserData);
            data.uid = userData.uid;
        }
        DBManager.getInstance().insert(DBDefine.Table.ACTION, data);
    }

    public touchStart(data: ActionInterface.TouchStartData): void {
        this.save({
            action_type: ActionDefine.Type.TOUCH_START,
            action_data: data,
        })
    }

    public touchMove(data: ActionInterface.TouchMoveData): void {
        let currTime: number = Date.now();
        if (currTime < this._prevTime + ActionDefine.MOVE_INTERVAL_TIME) {
            return;
        }
        this._prevTime = currTime;

        this.save({
            action_type: ActionDefine.Type.TOUCH_MOVE,
            action_data: data,
        })
    }

    public touchCancel(data: ActionInterface.TouchCancelData): void {
        this.save({
            action_type: ActionDefine.Type.TOUCH_CANCEL,
            action_data: data,
        })
    }

    public touchEnd(data: ActionInterface.TouchEndData): void {
        this.save({
            action_type: ActionDefine.Type.TOUCH_END,
            action_data: data,
        })
    }

    public wsRequest(): void {

    }

    public wsResponse(): void {

    }

    public httpRequest(): void {

    }

    public httpResponse(): void {

    }

    public openView(): void {

    }

    public closeView(): void {

    }

    public openScene(): void {

    }

}