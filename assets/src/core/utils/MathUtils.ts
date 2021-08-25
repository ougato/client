/*
 * Author       : ougato
 * Date         : 2021-08-26 01:42:32
 * LastEditors  : ougato
 * LastEditTime : 2021-08-26 01:59:46
 * FilePath     : /client/assets/src/core/utils/MathUtils.ts
 * Description  : 数学工具
 */

export default class MathUtils {

    /**
     * 保留小数点后位数
     * @param value {number} 数字
     * @param digit {number} 小数点后位数
     * @returns {number} 保留下来的数
     */
    public static decimal(value: number, digit: number): number {
        let result: number = value;
        let strNum: string = value.toString();
        if (strNum.indexOf(".") > 0) {
            let arrNum: Array<string> = strNum.split(".");
            let frontNum: string = arrNum[0] + ".";
            let rearNum: string = arrNum[1];
            for (let i = 0; i < digit; ++i) {
                let index = rearNum[i];
                if (index) {
                    frontNum += index;
                } else {
                    break;
                }
            }
            result = Number(frontNum);
        }

        return result;
    }

    /**
     * 小数点后填充 0 
     * @param value {number | string} 数字
     * @param digit {number} 小数点后位数
     * @returns {string} 填充后的值
     */
    public static fill0(value: number | string, digit: number) : string {
        const POINT: string = ".";
        const ZERO: string = "0";
        let strResult: string = ""
        if(typeof(value) === "string")  {
            strResult = value;
        } else {
            strResult = value.toString();
        }
        let pointIndex = strResult.indexOf(POINT);
        let perchCount: number = 0;
        if (pointIndex < 0) {
            perchCount = digit;
            strResult += POINT;
        } else {
            perchCount = digit - (strResult.length - (pointIndex + 1));
        }

        for (let i: number = 0; i < perchCount; ++i) {
            strResult += ZERO;
        }

        return strResult;
    }

}