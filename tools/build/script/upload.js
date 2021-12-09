require('shelljs/global');
const config = require("./config")
const path = require("path");
function getUploadCommand(type) {
    let head = "scp -r";
    let resPath = "";
    let remotePath = config.projectConfig.serverAddress + ":" + config.projectConfig.staticPath;
    if (config.projectConfig.shSginPem) { //私钥
        head = `scp -i ${config.projectConfig.shSginPem} -r`
    }

    switch (type) {
        case config.buildTypes.web: {
            resPath = config.getlocalWebResPath();
        } break;
        case config.buildTypes.hots: {
            resPath = config.getlocalHotsResPath();

        } break;
        case config.buildTypes.app: {
            resPath = config.getlocalApkResPath();
        } break;
        default: {
            head = '';
        }
    }
    return `${head} ${resPath} ${remotePath}`;
}

function toWorking(type) {
    console.log("toWorking:", type)
    let module = null;
    switch (type) {
        case config.buildTypes.web: {
            module = require("./buildWeb")
        } break;
        case config.buildTypes.hots: {
            // 整理构建热更新资源
            module = require("./checkHotRes")
        } break;
        case config.buildTypes.app: {
            // 构建资源
            module = require("./buildApk")
            // 构建app
        } break;
    }
    return module
}
function getZipFilePaths(type) {
    let obj = { localResPath: "", savaPath: "", localFileName: '' }
    switch (type) {
        case config.buildTypes.web: {
            obj = {
                localResPath: config.getlocalWebResPath(),
                localFileName: config.projectConfig.romoteResFileName.web,
            }
        } break;
        case config.buildTypes.hots: {
            obj = {
                localResPath: config.getlocalHotsResPath(),
                localFileName: config.projectConfig.romoteResFileName.hots,
            }
        } break;
        case config.buildTypes.app: {
            obj = {
                localResPath: config.getlocalApkResPath(),
                localFileName: config.projectConfig.romoteResFileName.app,
            }
        } break;
    }
    obj.savaPath = path.join(obj.localResPath, "../")
    return obj
}
const UploadTypes = {
    oss: "oss",//通过bat/sh 脚本 上传到oss
    commit: "commit",// 纯 命令上传
    zip: "zip",//先压缩 然后 通过bat/sh 脚本 上传到linux 服务器
    bat: 'bat',//自定义bat 上传
}
function uploadMain(choises) {
    console.log("choises:", JSON.stringify(choises))
    config.SetProjectConfig(choises.publishEnv)
    if (!config.projectConfig) {
        return console.log("沒有找到項目配置：在-" + choises.publishEnv)
    }
    let module = toWorking(choises.publishWork);
    if (!module) return
    require("./getAppVersion").main(choises)
    require("./reSetGameInfo")(choises)
    // return
    module(() => {
        if (!choises.isUpload) return console.log("choises.isUpload:", choises.isUpload, "不进行上传！")
        switch (config.projectConfig.uploadType) {
            case UploadTypes.oss:
                var obj = getZipFilePaths(choises.publishWork)
                uploadByBat([obj.localResPath, obj.localFileName])
                break;
            case UploadTypes.bat: break;
            case UploadTypes.commit:
                let command = getUploadCommand(choises.publishWork);
                console.log('执行-exec-command中..上传到远端服务器:' + command)
                let rmsg = exec(command)
                rmsg && console.log(rmsg)
                break;
            case UploadTypes.zip:
                var obj = getZipFilePaths(choises.publishWork)
                if (obj.localResPath == "" || obj.savaPath == "" || obj.localFileName == "") return console.log("沒有有效的 壓縮文件路徑配置", obj)
                require("./zip")(obj.localResPath, obj.savaPath, obj.localFileName, (err) => {
                    console.log("压缩结算后回调")
                    let params = []
                    params.push(config.projectConfig.serverAddress)
                    params.push(config.projectConfig.staticPath)
                    params.push(obj.localFileName + ".zip")
                    params.push(obj.savaPath)
                    uploadByBat(params)
                })
                break;
            default: console.error("没有匹配的UploadTypes：", config.projectConfig.uploadType)
        }
    })

}
function choiseKeys(publishEnv, publishWork, isUpload = true) {
    this.publishEnv = publishEnv
    this.publishWork = publishWork
    this.isUpload = isUpload
}
// 通过 打开bat 文件上传
function uploadByBat(params) {
    const iconv = require('iconv-lite');
    var child_process = require("child_process")
    params.unshift(path.join(path.resolve("./"), config.projectConfig.uploadBatPath))

    console.log(config.uploadSkipPath, params)
    let sp = child_process.spawn(config.uploadSkipPath, params)
    sp.stdout.on('data', (data) => {
        console.log(`stdout: ${iconv.decode(data, 'cp936')}`)
    });
    sp.stderr.on('data', (data) => {
        console.log(`stderr: ${iconv.decode(data, 'cp936')}`)
    });
    sp.on('close', (code) => {
        console.log(`完毕子进程退出，退出码 ${code}`);
    });
}

module.exports = {
    uploadMain,
    choiseKeys
}