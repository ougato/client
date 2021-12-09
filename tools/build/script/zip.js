

var JSZip = require('jszip');
let fs = require("fs");
let path = require("path");
let _packageDir = function (e, t) {
    let i = fs.readdirSync(e);
    for (let s = 0; s < i.length; s++) {
        let r = i[s],
            o = path.join(e, r),
            n = fs.statSync(o);
        n.isFile() ? t.file(r, fs.readFileSync(o)) : n.isDirectory() && _packageDir(o, t.folder(r))
    }
}
/**
 * 
 * @param {"需要压缩的文件路径"} packFileNameFullPath 
 * @param {压缩包的名字} packZipName 
 * @param {完成回调} onComplete 
 * @param {保存路径} savePath 
 */
let zip = function (packFileNameFullPath, savePath, packZipName, onComplete) {
    let jszip = new JSZip()
    _packageDir(packFileNameFullPath, jszip.folder(packZipName));
    packZipName = packZipName + ".zip";
    let packVersionZipPath = path.join(savePath, packZipName);
    fs.existsSync(packVersionZipPath) && (fs.unlinkSync(packVersionZipPath), console.log("[Pack] 发现该版本的zip, 已经删除!")), jszip.generateNodeStream({
        type: "nodebuffer",
        streamFiles: !0
    }).pipe(fs.createWriteStream(packVersionZipPath)).on("finish", function () {
        console.log("[Pack] 打包成功: " + packVersionZipPath)
        onComplete();
    }.bind(this)).on("error", function (e) {
        console.log("[Pack] 打包失败:" + e.message)
        onComplete(e.message);
    }.bind(this))
}
module.exports = zip;