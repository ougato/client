/**
 * 
 * 打包APK  
 */
require('shelljs/global');
var path = require('path')
let fs = require("fs");
const config = require("./config")
function firstToUpper1(str) {
    return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
}
// 生成 下载界面的网页
function creatorDownloadHtmlFile(savaPath, apkname) {
    let str = fs.readFileSync(config.downloadHtmlPAth).toString();
    str = str.replace("xxx.apk", apkname)
    let filename = config.downloadHtmlPAth.substring(config.downloadHtmlPAth.lastIndexOf("\\") + 1)
    fs.writeFileSync(savaPath + filename, str)
}
function createAPK(commepCall) {
    let androidProPath = `${config.projectPath}/${config.buildPathFile}/jsb-${config.buildcfg.template.value}/frameworks/runtime-src/proj.android-studio`;
    let grable = path.join(`${androidProPath}/app/`, "build.gradle");
    let buildType = config.projectConfig.debug ? "debug" : "release"
    let grableCom = `assemble${firstToUpper1(config.pubEvn)}${firstToUpper1(buildType)}`
    let output = `${androidProPath}/app/build/outputs/apk/${config.pubEvn}/${buildType}/`
    let appPath = config.getlocalApkResPath() + "\\";

    console.log(appPath)
    // return
    // 打包命令
    let r = exec(`cd ${androidProPath} && gradle ${grableCom}`);
    if (r.code != 0) return console.log("apk构建失败", r)
    console.log('结束生成apk！！！');
    fs.readFile(grable, "utf8", function (error, content) {
        if (error) {
            console.error(error);
        } else {
            let pkgname = config.buildcfg.title.value
            let verstion = content.substring(content.indexOf("versionName"), content.indexOf("versionName") + 25).trim().split(" ")
            var reg = /^['|"](.*)['|"]$/;
            let v = verstion[1].replace(reg, "$1")
            rm("-rf", appPath)
            mkdir(appPath)
            let outputApk = `${output}${pkgname}-${config.pubEvn}-${buildType}.apk`
            let apkName = `${pkgname}-${require("./getAppVersion").hallVersion}-${new Date().format("yyyy.MM.dd.hh.mm")}.apk`
            creatorDownloadHtmlFile(appPath, apkName)

            cp(`-rf`, outputApk, `${appPath}${apkName}`);
            rm("-rf", outputApk) //避免因构建失败 还用上次构建的包
            console.log('生成成功apk！！！', apkName);
            commepCall()

        }
    })
}
module.exports = createAPK
