/*
 * @Author       : ougato
 * @Date         : 2020-09-12 02:30:18
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-14 00:43:01
 * @FilePath     : \client242\assets\src\i18n\Localization.ts
 * @Description  : 
 */

export default class Localization {

    private static g_instance: Localization = null;

    // 本地话数据
    private m_localization: LocalizationDefineType = null;

    public static getInstance(): Localization {
        if (this.g_instance === null) {
            this.g_instance = new Localization();
        }
        return this.g_instance;
    }

    public static destroy(): void {
        if (this.g_instance !== null) {
            this.g_instance.destroy();
        }
        this.g_instance = null;
    }

    constructor() {

    }

    public set localization(data: LocalizationDefineType) {
        this.m_localization = data;
    }

    /**
     * 获取本地话内容
     * @param key {LocalizationDefineType} 本地话 key
     * @return {string} 本地话 value
     */
    public get(key: LocalizationDefineType): string {
        let value: string = "";
        if(this.m_localization && this.m_localization[key]) {
            value = this.m_localization[key];
        }
        return value;
    }

    /**
     * 销毁
     */
    public destroy(): void {
        this.m_localization = null;
    }
}