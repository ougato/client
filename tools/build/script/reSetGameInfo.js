const config = require("./config")
require('shelljs/global');
let fs = require("fs");
function getFilePath(type) {
    let env = ''
    let env2 = ''
    switch (type) {
        case config.buildTypes.web: {
            env = "web-mobile"
            env2 = "W"
        } break;
        case config.buildTypes.hots:
        case config.buildTypes.app: {
            env = "jsb-default"
            env2 = 'A'
        } break;
    }
    return [env2, config.projectPath + `/build-templates/${env}/src/config.js`]
}
function main(choises) {
    let [envS, configpath] = getFilePath(choises.publishWork)
    if (fs.existsSync(configpath)) {
        rm(`-r`, configpath);
    }
    let str = `
window.BUILD_GET_DYNAMIC_URL="${config.projectConfig.routerUrl}";
window.BUILD_ENV="${envS}/${choises.publishEnv}";
window.BUILD_DATE="${config.buildDate}";
window.RES_VERSION_ID="${require("./getAppVersion").resVersionId}";
window.APP_VERSION_ID="${require("./getAppVersion").appVersionId}";
`
    console.log(str)
    fs.writeFileSync(configpath, str);
}

module.exports = main