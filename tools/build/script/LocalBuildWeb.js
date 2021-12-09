require('shelljs/global');
const config = require("./config")
const toPath='E:/httpserver'
function main() {
    try {
        let cmd = `${config.enginePath} --path ${config.projectPath} --build "platform=web-mobile;debug=${config.projectConfig.debug};buildScriptsOnly=false;`
        console.log("开始完毕")
        exec(cmd);
        rm(`-rf`, toPath+"/web-mobile");
        cp(`-rf`, config.projectWebResPath, toPath);
    } catch (e) {
    }
}

main();