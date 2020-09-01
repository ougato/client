/*
 * @Author       : ougato
 * @Date         : 2020-08-10 16:40:17
 * @LastEditors  : ougato
 * @LastEditTime : 2020-09-01 18:11:31
 * @FilePath     : \client242\assets\src\test\Test.ts
 * @Description  : 
 */

import TimeUtil from "../utils/TimeUtil";

const MAX: number = 1000000;

export class Test {

    public static list: number[] = [];
    public static count: number = 0;

    private static init(): void {
        this.list.length = 0;
        for (let i: number = 0; i < MAX; ++i) {
            this.list.push(i);
        }
        this.count = 0;
    }

    public static every(): void {
        this.init();
        let t: number = TimeUtil.markTime();
        this.list.every((value: number, index: number, array: number[]) => {
            this.count += value;
            if (index < 10000) {
                return true;
            }
        });
        console.log(this.count);
        console.log("every: " + TimeUtil.markTime(t) + " ms");
    }

    public static some(): void {
        this.init();
        let t: number = TimeUtil.markTime();
        this.list.some((value: number, index: number, array: number[]) => {
            this.count += value;
            if (index >= 10000) {
                return true;
            }
        });
        console.log(this.count);
        console.log("some: " + TimeUtil.markTime(t) + " ms");
    }

    public static for(): void {
        this.init();
        let t: number = TimeUtil.markTime();
        for (let i: number = 0; i < this.list.length; ++i) {
            this.count += this.list[i];
            if (i >= 10000) {
                break;
            }
        }
        console.log(this.count);
        console.log("for: " + TimeUtil.markTime(t) + " ms");
    }

    public static onEvent(): void {

    }

    public static event(): void {

    }
}