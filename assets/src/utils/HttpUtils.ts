/*
 * Author       : ougato
 * Date         : 2021-11-01 10:08:36
 * LastEditors  : ougato
 * LastEditTime : 2022-09-18 18:39:53
 * FilePath     : /client/assets/src/utils/HttpUtils.ts
 * Description  : Http 工具类
 */

import { HttpDefine } from "../core/define/HttpDefine";
import { HttpInterface } from "../core/interface/HttpInterface";

export default class HttpUtils {

    public static isOK(responseInfo: HttpInterface.ResponseInfo): boolean {
        return responseInfo && responseInfo.state === HttpDefine.StateType.OK &&
            responseInfo.body && responseInfo.body.code === 0;
    }

}