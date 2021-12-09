/**
 * 完成构建_jsb-default
 * 生成热更新资源
 * 用于 热更 或 打包APK
 */

require('shelljs/global');

console.log('-------------------------------------------------------------------1-build-pro appBase.js开始');

let fs = require("fs");
let path = require("path");
const config = require("./config")
let buildcfg = config.buildcfg
// 本地 Cocos Creator 安装路径 /Applications/CocosCreator.app
let CCCInstallRoute = config.enginePath
// 本地项目绝对路径
let projectPath = config.projectPath

if (!CCCInstallRoute || CCCInstallRoute === "") {
    console.error("没有配置 Cocos Creator 的安装路径 ...");
    return;
};
if (!projectPath || projectPath === "") {
    console.error("没有配置当前项目路径 ...");
    return;
};

let buildShellDict = [];
for (let key in buildcfg) {
    buildShellDict.push(`${key}=${buildcfg[key].value}`);
};

//资源png 加密
let endocePng = function () {
    exec(`cd ${projectPath} && python tools/encode/encode.py`);
    console.log("资源png 加密完成")
}
//生成热更新文件
let _gamesPath = `${projectPath}/packages/config/games.json`;
let resourceRootDir = `${projectPath}/${config.buildPathFile}/jsb-${buildcfg.template.value}`
// let genManifestDir = path.join(projectPath, "hot-update-tools-manifestOutPut");
let localServerPath = ``
let _gamesConfig = fs.readFileSync(_gamesPath);
_gamesConfig = JSON.parse(_gamesConfig);
console.log(_gamesConfig)
let _subGameVersion = {};
let _subGameServerVersion = {};
let _hallVersion = `1`;//大厅版本
let _serverRootDir = config.projectConfig.hotUpdatePath;//热更新地址
// if (_gamesConfig) {
//     _serverRootDir = _gamesConfig.packageUrl;
// }
//子游戏是否包含
let _subGameInclude = {};
for (let i = 0; i < _gamesConfig.games.length; i++) {
    let gameInfo = _gamesConfig.games[i];
    if (gameInfo.dir && gameInfo.dir.length > 0) {
        _subGameVersion[`${gameInfo.dir}`] = gameInfo.version;
        _subGameInclude[`${gameInfo.dir}`] = gameInfo.includeApk;
        _subGameServerVersion[`${gameInfo.dir}`] = '-';

    }
    if (gameInfo.id == "0") {
        _hallVersion = gameInfo.version;
    }
}
let _delDir = function (e) {
    let t = function (e) {
        let i = fs.readdirSync(e);
        for (let s in i) {
            let r = path.join(e, i[s]);
            fs.statSync(r).isDirectory() ? t(r) : fs.unlinkSync(r)
        }
    },
        i = function (t) {
            let s = fs.readdirSync(t);
            if (s.length > 0) {
                for (let e in s) {
                    let r = path.join(t, s[e]);
                    i(r)
                }
                t !== e && fs.rmdirSync(t)
            } else t !== e && fs.rmdirSync(t)
        };
    t(e), i(e)
}
let _mkdirSync = function (dir) {
    try {
        fs.mkdirSync(dir)
    } catch (e) {
        if ("EEXIST" !== e.code) throw e
    }
}
let _readDir = function (dir, obj, source) {
    var stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
        return;
    }
    var subpaths = fs.readdirSync(dir),
        subpath, size, md5, compressed, relative;
    for (var i = 0; i < subpaths.length; ++i) {
        if (subpaths[i][0] === '.') {
            continue;
        }
        subpath = path.join(dir, subpaths[i]);
        stat = fs.statSync(subpath);
        if (stat.isDirectory()) {
            _readDir(subpath, obj, source);
        } else if (stat.isFile()) {
            // Size in Bytes
            size = stat['size'];
            md5 = require("crypto").createHash('md5').update(fs.readFileSync(subpath)).digest('hex');
            compressed = path.extname(subpath).toLowerCase() === '.zip';

            //Editor.log(source);
            relative = path.relative(source, subpath);
            relative = relative.replace(/\\/g, '/');
            relative = encodeURI(relative);

            obj[relative] = {
                'size': size,
                'md5': md5
            };
            if (compressed) {
                obj[relative].compressed = true;
            }
        }
    }
}

let _genVersion = function (version, serverRootDir) {
    let games = Object.keys(_subGameVersion);

    let manifest = {
        version: version,
        packageUrl: serverRootDir,
        remoteManifestUrl: "",
        remoteVersionUrl: "",
        assets: {},
        searchPaths: [],
        buildDate: config.buildDate
        //games: games //此字段不需要了
    };
    if ("/" === serverRootDir[serverRootDir.length - 1]) {
        manifest.remoteManifestUrl = serverRootDir + "manifest/project.manifest";
        manifest.remoteVersionUrl = serverRootDir + "manifest/version.manifest";
    } else {
        manifest.remoteManifestUrl = serverRootDir + "/manifest/project.manifest";
        manifest.remoteVersionUrl = serverRootDir + "/manifest/version.manifest";
    }
    // let dest = genManifestDir;
    let source = resourceRootDir;
    _readDir(path.join(source, "src"), manifest.assets, source);
    _readDir(path.join(source, "assets/internal"), manifest.assets, source);
    _readDir(path.join(source, "assets/main"), manifest.assets, source);
    _readDir(path.join(source, "assets/resources"), manifest.assets, source);
    // let projectManifest = path.join(dest, "project.manifest");
    // let versionManifest = path.join(dest, "version.manifest");
    // _mkdirSync(dest);

    //生成构建目录下的manifest文件
    let bulidPathManifestDir = `${resourceRootDir}/manifest`;
    if (fs.existsSync(bulidPathManifestDir)) {
        _delDir(bulidPathManifestDir);
    }
    _mkdirSync(bulidPathManifestDir);

    // fs.writeFileSync(projectManifest, JSON.stringify(manifest));
    projectManifest = path.join(bulidPathManifestDir, "project.manifest");
    fs.writeFileSync(projectManifest, JSON.stringify(manifest));

    console.log("[Build] 生成 project.manifest成功");
    delete manifest.assets;
    delete manifest.searchPaths;
    // fs.writeFileSync(versionManifest, JSON.stringify(manifest));
    versionManifest = path.join(bulidPathManifestDir, "version.manifest");
    fs.writeFileSync(versionManifest, JSON.stringify(manifest));
    console.log("[Build] 生成 version.manifest成功");

    //子游戏manifest生成
    // Editor.log("source",source);
    for (let i = 0; i < games.length; i++) {

        let key = games[i];
        let submanifest = {
            version: _subGameVersion[key],
            packageUrl: serverRootDir,
            remoteManifestUrl: "",
            remoteVersionUrl: "",
            assets: {},
            searchPaths: []
        };
        if ("/" === serverRootDir[serverRootDir.length - 1]) {
            submanifest.remoteManifestUrl = `${serverRootDir}manifest/${key}_project.manifest`;
            submanifest.remoteVersionUrl = `${serverRootDir}manifest/${key}_version.manifest`;
        } else {
            submanifest.remoteManifestUrl = `${serverRootDir}/manifest/${key}_project.manifest`;
            submanifest.remoteVersionUrl = `${serverRootDir}/manifest/${key}_version.manifest`;
        }

        _readDir(path.join(source, `assets/${key}`), submanifest.assets, source);
        fs.writeFileSync(path.join(bulidPathManifestDir, `${key}_project.manifest`), JSON.stringify(submanifest));
        console.log(`[Build] 生成 ${key}_project.manifest成功`);
        delete submanifest.assets;
        delete submanifest.searchPaths;
        fs.writeFileSync(path.join(bulidPathManifestDir, `${key}_version.manifest`), JSON.stringify(submanifest));
        console.log(`[Build] 生成 ${key}_version.manifest成功`);
    }

}
/**
 * 生成Manifest 文件
 */
let createManifest = function () {
    _genVersion(_hallVersion, _serverRootDir);

}
/**
 * 剔除子游戏
 */
let deleSubGame = function () {
    let games = Object.keys(_subGameVersion);
    let isFind = false;
    console.log(`删除子游戏`);
    for (let i = 0; i < games.length; i++) {
        let game = games[i];
        if (!_subGameInclude[game]) {
            isFind = true;

            let gamePath = path.join(resourceRootDir, "assets");
            gamePath = path.join(gamePath, game);
            if (fs.existsSync(gamePath)) {
                //删除子游戏代码及资源
                _delDir(gamePath)
                fs.rmdirSync(gamePath)
                console.log(`删除子游戏${game} : ${gamePath}`);
                //删除子游戏 版本控制文件
                let versionManifestPath = path.join(resourceRootDir, `manifest/${game}_version.manifest`);
                if (fs.existsSync(versionManifestPath)) {
                    fs.unlinkSync(versionManifestPath)
                    console.log(`删除子游戏${game} : ${versionManifestPath}`);
                }

                let projectManifestPath = path.join(resourceRootDir, `manifest/${game}_project.manifest`);
                if (fs.existsSync(projectManifestPath)) {
                    fs.unlinkSync(projectManifestPath)
                    console.log(`删除子游戏${game} : ${projectManifestPath}`);
                }
            } else {
                console.log(`子游戏${game}已经删除`);
            }

        }
    }
    if (!isFind) {
        console.log("没有子游戏需要剔除")
    } else {
        console.log(`删除子游戏完成`);
    }
}
let main = function () {
    // 资源构建
    console.error("资源构建...");
    // rm(`-rf`, `keystore/keystore.jks`);
    // cp(`-rf`, `../../../keystore/keystore.jks`, `./keystore/`);
    _hallVersion= require("./getAppVersion").hallVersion
    console.log(CCCInstallRoute);
    exec(`${CCCInstallRoute} --path ../../../ --build \"${buildShellDict.join(";")}\"`);
    // endocePng()
    createManifest()
    console.log('-------------------------------------------------------------------1-build-pro buildRes.js end');
}
main()




