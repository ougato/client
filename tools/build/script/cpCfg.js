require('shelljs/global'); 
var path = require('path') 
var fs = require('fs') 
let channelId = process.argv[2];
if (!channelId) {
    console.error('渠道id异常');
    return;
} 
console.error('cpCfg.js 开始');
function copyDefaultToProjectAndroid() {
    console.log('copyDefaultToProjectAndroid');

    // 需要替换的配置文件
    let _needRepList = [
        ['../channel/defaultCfg/AppAndroid/*', '../../../build/jsb-default/frameworks/runtime-src/proj.android-studio/']
    ];

    for (let i = 0; i < _needRepList.length; ++i) {
        let info = _needRepList[i];
        cp(`-rf`, `${info[0]}`,`${info[1]}`);
    }

};
// 拷贝打包工程默认文件到Android
function copyChannelToProjectAndroid() {
    console.log('copyChannelToProjectAndroid');

     // 需要替换的配置文件
     let _needRepList = [
        ['../channel/' + channelId + '/appCfg/android/*', '../../../build/jsb-default/frameworks/runtime-src/proj.android-studio/']
    ];
    for (let i = 0; i < _needRepList.length; ++i) {
        let info = _needRepList[i];
        cp(`-rf`, ` ${info[0]}`,`${info[1]}`);
    }
};

function createAPK(channelId){ 
  
    copyDefaultToProjectAndroid();

    copyChannelToProjectAndroid();
}  


createAPK(channelId);
 