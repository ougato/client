/*
 * @Author       : ougato
 * @Date         : 2020-08-17 11:04:05
 * @LastEditors  : ougato
 * @LastEditTime : 2020-08-17 11:13:55
 * @FilePath     : \client\assets\src\core\interface\IResouces.ts
 * @Description  : 
 */

type ProcessCallback = (completedCount: number, totalCount: number, item: any) => void;
type CompletedCallback = (error: Error, resource: any) => void;
type CompletedArrayCallback = (error: Error, resource: any[], urls?: string[]) => void;

interface IResLoadParam {
    url?: string;
    urls?: string;
    type?: typeof cc.Asset;
    onCompleted?: (CompletedCallback | CompletedArrayCallback);
    onProgess?: ProcessCallback;
    use?: string;
}