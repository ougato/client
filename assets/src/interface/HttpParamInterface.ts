/*
 * @Author       : ougato
 * @Date         : 2020-11-06 01:47:10
 * LastEditors  : ougato
 * LastEditTime : 2021-11-01 15:41:23
 * FilePath     : /client/assets/src/interface/HttpParamInterface.ts
 * @Description  : Http 的请求和响应接口
 */

// 通用 Http  响应信息
export interface HttpResponse {
    code: number,
    msg?: string,
    data?: any,
}

// 动态主机响应
export interface HttpDynamicHostResponse {
    // 登陆主机
    loginURL: string,
    // 游戏主机
    gameURL: string,
    // 下载 APP 主机
    appURL: string,
    // 热更主机
    hotUpdateURL: string,
    // 支付主机
    payURL: string,
    // 资源服主机
    resURL: string,
}

// 获取唯一码响应
export interface HttpGetUUIDResponse {
    // 设备唯一码
    deviceId: string,
}

// 登录请求
export interface HttpLoginRequest {
    // 验证码
    code?: string,
    // 登录方式：visitor=游客登录，wechat_applet=微信小程序登录，mobile=手机号登录
    type: string,
    // 用户id
    user_id?: string,
    // 手机号
    mobile?: string,
    // 游戏：shooter=挂机射手
    game?: string,
}

// 登陆响应
export interface HttpLoginResponse {
    // 用户id
    user_id: string,
    // 动态校验码
    token: string,
    // 静态校验码
    refresh_token: string,
    // 登陆字符
    login_str: string,
}

/**
 * 获取长链接头
 */
export interface HttpGetWebSocketHeader {
    // 校验码
    token: string,
    // 客户端版本号
    clientVersion?: string,
    // 渠道号
    channel?: string,
    // 设备系统
    os?: string,
}
