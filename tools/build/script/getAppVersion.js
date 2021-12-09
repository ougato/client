const config = require("./config")
let path = require("path");
let fs = require("fs");

var exec = require('child_process').execSync;
function getAppVersion({ publishEnv }) {
    let androidProPath = `${config.projectPath}/${config.buildPathFile}/jsb-${config.buildcfg.template.value}/frameworks/runtime-src/proj.android-studio`;
    let grable = path.join(`${androidProPath}/app/`, "build.gradle");
    let projectPath = config.projectPath
    // 大版本号
    let ConfigSTr = fs.readFileSync(grable, { encoding: 'utf8' })
    ConfigSTr = ConfigSTr.substring(ConfigSTr.indexOf(publishEnv), ConfigSTr.indexOf(publishEnv) + 200)
    let appVersionNum = JSON.parse(ConfigSTr.substring(ConfigSTr.indexOf('versionName')).split(" ")[1])

    // 小版本号。 git的提交次数
    let str = exec(`cd ${projectPath}&git rev-list --all --count`);

    obj.resVersionId = Number(str);
    obj.appVersionId = parseInt(appVersionNum);
    obj.hallVersion = parseInt(appVersionNum) + "." + Number(str);

    console.log("版本号：", JSON.stringify(obj))

}

const obj = { main: getAppVersion, appVersionId: -1, resVersionId: -1, hallVersion: "" }
module.exports = obj