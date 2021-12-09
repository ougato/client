
let fs = require("fs");
let path = require("path");
require('shelljs/global');
const buildcfg = require("../config/build-native-config.json");
const nativeProjectConfig = require('../config/projectConfig.json')
const multiProjectConfig = require("../config/multiEnvironmentConfig.json")
let projectConfig = multiProjectConfig.inNet;//赋值类型有智能提示
const buildPathFile = buildcfg.buildPath.value;

const projectPath = nativeProjectConfig.CreateorProjectPath.value
const enginePath = nativeProjectConfig.CCCInstallRoute.value
const resourceRootDir = `${projectPath}/${buildPathFile}/jsb-${buildcfg["template"].value}`
const localHotsResFileName = "hotUpdate";
const localWebResFileName = 'web-mobile'
const localApkFileName = 'app'
const projectWebResPath = projectPath + `/${buildPathFile}/${localWebResFileName}`
const workSpacePath = path.join(path.resolve('./'), "../workSpace/")

const downloadHtmlPAth = path.join(path.resolve('./'), "../upload/download.html")
// 作为跳板用的
const uploadSkipPath = path.join(path.resolve('./'), "../upload/uploadSkip.bat")
if (!fs.existsSync(workSpacePath)) {
    mkdir(workSpacePath)
}
let pubEvn = ""
function SetProjectConfig(evn) {
    config.projectConfig = multiProjectConfig[evn]
    buildcfg.debug.value = config.projectConfig.debug;
    pubEvn = config.pubEvn = evn
}
let filePath = {};
function getbuildFilePath(fileName) {
    let propath = filePath[fileName]
    if (propath) return propath;
    propath = `${workSpacePath}${pubEvn}/`
    if (!fs.existsSync(propath)) {
        mkdir(propath)
    }
    propath = `${propath}/${fileName}/`
    if (!fs.existsSync(propath)) {
        mkdir(propath)
    }
    filePath[fileName] = propath;
    return propath
}
function getlocalHotsResPath() {
    return path.join(getbuildFilePath(buildTypes.hots), config.projectConfig.romoteResFileName.hots || localHotsResFileName)
}
function getlocalWebResPath() {
    return path.join(getbuildFilePath(buildTypes.web), config.projectConfig.romoteResFileName.web || localWebResFileName)
}
function getlocalApkResPath() {
    return path.join(getbuildFilePath(buildTypes.app), config.projectConfig.romoteResFileName.app || localApkFileName)
}
const buildTypes = {
    web: "web",
    hots: "hots",
    app: "app"
}
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ((RegExp.$1.indexOf("S") > -1 ? "000" : "00") + o[k]).substr(("" + o[k]).length, RegExp.$1.length));
        }
    }
    return format;
}
const buildDate = new Date().format("yyyy-MM-dd hh:mm:ss|SSS")
const config = {
    SetProjectConfig,
    projectConfig,
    multiProjectConfig,
    buildcfg,
    getlocalHotsResPath,
    getlocalWebResPath,
    getlocalApkResPath,
    projectWebResPath,
    resourceRootDir,
    projectPath,
    enginePath,
    buildPathFile,
    workSpacePath,
    getbuildFilePath,
    buildTypes,
    localHotsResFileName,
    localWebResFileName,
    localApkFileName,
    uploadSkipPath,
    buildDate,
    pubEvn,
    downloadHtmlPAth
}
module.exports = config
