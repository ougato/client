/*
 * @Author       : ougato
 * @Date         : 2020-11-06 01:47:10
 * LastEditors  : ougato
 * LastEditTime : 2021-10-29 16:03:00
 * FilePath     : /client/assets/src/interface/WebParamInterface.ts
 * @Description  : Web 的请求和响应接口
 */

// 通用 Web API 响应信息
export interface WebAPIResponse {
    code: number,
    msg?: string,
    data?: any,
}

// 登录请求
export interface WebAPILoginRequest {
    // 验证码
    code: string,
    // 登录方式：visitor=游客登录，wechat_applet=微信小程序登录，mobile=手机号登录
    type: string,
    // 用户id
    user_id: string,
    // 手机号
    mobile: string,
    // 游戏：shooter=挂机射手
    game: string,
}

// 登陆响应
export interface WebAPILoginResponse {
    // 用户id
    user_id: string,
    // 动态校验码
    token: string,
    // 静态校验码
    refresh_token: string,
    // 登陆字符
    login_str: string,
}
