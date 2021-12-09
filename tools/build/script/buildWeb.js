require('shelljs/global');
const config = require("./config")
function main(call) {
    try {
        let cmd = `${config.enginePath} --path ${config.projectPath} --build "platform=web-mobile;debug=${config.projectConfig.debug};buildScriptsOnly=false;`
        console.log("开始完毕")
        exec(cmd);
        rm(`-rf`, config.getlocalWebResPath());
        cp(`-rf`, config.projectWebResPath, config.getlocalWebResPath());
        console.log("构建完毕")
        call()
    } catch (e) {
    }
}

module.exports = main;