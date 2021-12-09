# 项目构建工具

# 针对同一项目，不同发布环境
# 主要针对 apk 、web、 hots 热更新资源的构建与自动上传
# config/multiEnvironmentConfig.json  需发布环境相关配置的.json 文件
 <!-- "explain": "内网相关",                               //环境描述
        "routerUrl": "http://192.168.6.210:8088/",         // 服务器地址
        "hotUpdatePath": "http://192.168.6.210/hotUpdate", //热更新下载根目录
        "debug": true,                                     //是否开启调试模式
        "uploadBatPath": "../upload/inNet/uploadPop.bat",  //自定义.bat 执行文件上传,开启压缩上传，调用此脚本
        "shSginPem": "",                                   // 本地私钥地址。 没私钥要输密码
        "isZip": false,                                     // 是否开启压缩长传
        "serverAddress": "Administrator@192.168.6.210",     // 服务器地址
        "staticPath": "/Users/Administrator/Desktop/worke/client/static/", //上传资源保存在服务器路径。
        "romoteResFileName": {  // 构建后资源放置文件夹名
            "web": "web-mobile",
            "hots": "hotUpdate",
            "app": "app"
        } -->
# config/projectConfig.json 引擎路径 与 项目路配置

# build/环境/***.bat 配好的快速执行脚本  参数：自己定义的 环境 与 构建 类型 《uploadByCommand.bat inNet app》

# build/uploadByInputKey.bat 根据 提示 选择 需要发布的环境 与构建 类型

# 注意：window 环境的服务器。zip 上传. 会提示找不到 解压缩工具，就不要开启压缩上传，


# 安卓自动打包构建


# 打资源包 依赖 creator 2.4.2, nodejs , Python27 
# 打包apk 依赖 jdk1.8 , SDK : API Level : android-29 , NDK : android-ndk-r18b , gradle-4.10.3-all

## 初始化 npm 环境
npm install -d shelljs
npm install -d jszip