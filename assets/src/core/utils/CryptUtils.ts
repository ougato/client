/*
 * Author       : ougato
 * Date         : 2021-11-19 15:38:52
 * LastEditors  : ougato
 * LastEditTime : 2021-11-19 15:40:03
 * FilePath     : /client/assets/src/core/utils/CryptUtils.ts
 * Description  : 加解密工具
 */

import md5 = require("../../lib/md5");

export default class CryptUtils {

    /**
     * MD5 加密
     * @param data {string | any[] | Uint8Array | ArrayBuffer} 未加密前的明文
     * @return {string} 加密后的码文
     */
    public static md5(data: string | any[] | Uint8Array | ArrayBuffer): string {
        return md5(data);
    }
    
}