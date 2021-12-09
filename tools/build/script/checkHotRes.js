
require('shelljs/global');
let path = require("path");
let fs = require("fs");
const config = require("./config")
const resourceRootDir = config.resourceRootDir
const localHotsResPath = config.getlocalHotsResPath();
let _copyFileToLocalServer = function () {
    if (!fs.existsSync(localHotsResPath)) {
        console.log("本地测试服务器目录不存在:" + localHotsResPath);
        return;
    }

    let src = path.join(resourceRootDir, "src");
    let res = path.join(resourceRootDir, "assets");

    if (!fs.existsSync(resourceRootDir)) {
        console.log("资源目录不存在: " + resourceRootDir + ", 请先构建项目");
        return;
    }
    if (!fs.existsSync(src)) {
        console.log(resourceRootDir + "不存在src目录, 无法拷贝文件");
        return;
    }
    if (!fs.existsSync(res)) {
        console.log(resourceRootDir + "不存在res目录, 无法拷贝文件");
        return;
    }
    let manifest = path.join(resourceRootDir, "manifest")
    cp(`-rf`, [src, res, manifest], localHotsResPath);
}
function main(call) {
    // 构建资源
    require("./buildRes")
    console.log(localHotsResPath)
    rm(`-rf`, localHotsResPath + "/");
    fs.mkdirSync(localHotsResPath);
    _copyFileToLocalServer()
    call();
}
module.exports = main;