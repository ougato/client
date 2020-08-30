/*
 * @Author       : ougato
 * @Date         : 2020-08-13 02:00:18
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-30 00:39:43
 * @FilePath     : \client242\assets\src\core\machine\Loader.ts
 * @Description  : 加载器 封装 Creator 对资源加载、释放没有完成的部分
 */

export default class Loader {

    private static g_instance: Loader = null;

    public static getInstance(): Loader {
        if (this.g_instance === null) {
            this.g_instance = new Loader();
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

    private destroy(): void {

    }
}