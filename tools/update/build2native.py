#!/usr/bin/env python
# -*- coding:utf-8 -*-

'''
Author       : ougato
Date         : 2021-07-14 10:36:31
LastEditors  : ougato
LastEditTime : 2021-11-19 17:43:22
FilePath     : /client/tools/update/build2native.py
Description  : 热更新构建本地原生文件，并生成热更文件到 ./version/ 文件夹内存档
'''

import os
import json
import sys
import getopt
import webbrowser
import shutil
import functools

COMMAND_PATH = os.getcwd()
CURRENT_PATH = os.path.dirname(os.path.realpath(__file__))

os.chdir(CURRENT_PATH)

CONFIG_PATH = os.path.join(CURRENT_PATH, "config.json")
DOCUMENT_PATH = os.path.abspath(os.path.join(CURRENT_PATH, "README.md"))
PROJECT_PATH = os.path.abspath(os.path.join(CURRENT_PATH, "..", ".."))
BUILD_PATH = os.path.abspath(os.path.join(PROJECT_PATH, "build"))
JSB_DEFAULT_PATH = os.path.join(BUILD_PATH, "jsb-default")
GENERATOR_PATH = os.path.join(CURRENT_PATH, "VersionGenerator.js")
MANIFEST_TAG_PATH = os.path.join(CURRENT_PATH, "tag")
MANIFEST_FILENAME = "project.manifest"
NATIVE_RES_PATH = os.path.join(JSB_DEFAULT_PATH, "assets")
NATIVE_SRC_PATH = os.path.join(JSB_DEFAULT_PATH, "src")
SEARCH_HEAD_PATH = os.path.join(CURRENT_PATH, "UpdateSearchHeader.js")
MAINJS_PATH = os.path.join(JSB_DEFAULT_PATH, "main.js")
DEFAULT_PHONE_OS = "android"
MANIFEST_SUFFIX = ".manifest"
BUILD_COMMAND = "%s --path %s --build \"%s\""
GENERATOR_COMMAND = "node %s -v %s -u %s -s %s -d %s"
# JSON 对象
config = None


def init_config():
    global config

    if not os.path.exists(CONFIG_PATH):
        print("%s 配置文件不存在，请检查再执行" % CONFIG_PATH)
        exit(-1)

    if not os.path.isfile(CONFIG_PATH):
        print("%s 不是文件类型，请确认再执行" % CONFIG_PATH)
        exit(-1)

    with open(CONFIG_PATH, "r") as fd:
        content = fd.read()
        try:
            config = json.loads(content)
        except Exception:
            print("%s 文件解析失败" % CONFIG_PATH)
            exit(-1)


def get_build_args_str(build_args):
    ARGS = "%s=%s;"
    build_args_str = ""
    for key in build_args:
        build_args_str += (ARGS % (key, build_args[key]))
    return build_args_str[:-1]


def build_assets(phone_os):
    print("正在资源发布")
    creator_path = None

    if sys.platform.startswith("win32") or sys.platform.startswith("cygwin"):
        creator_path = config["build"]["creatorWinPath"]
    elif sys.platform.startswith("darwin"):
        creator_path = config["build"]["creatorMacPath"]
    else:
        print("不支持操作平台")
        exit(-1)

    # 默认发布原生手机平台
    if phone_os == None:
        phone_os = DEFAULT_PHONE_OS

    build_args = {}
    # engine 中需要排除的模块
    # build_args["excludedModules"] = ""
    # 项目名
    build_args["title"] = config["build"]["title"]
    # 构建的平台 [web-mobile、web-desktop、android、win32、ios、mac、wechatgame、wechatgame-subcontext、baidugame、baidugame-subcontext、xiaomi、alipay、qgame、quickgame、huawei、cocosplay、fb-instant-games、android-instant]
    build_args["platform"] = phone_os
    # 构建目录
    build_args["buildPath"] = BUILD_PATH
    # 主场景的 uuid 值（参与构建的场景将使用上一次的编辑器中的构建设置）
    # build_args["startScene"] = ""
    # 是否为 debug 模式
    build_args["debug"] = "true"
    # web desktop 窗口宽度
    build_args["previewWidth"] = "750"
    # web desktop 窗口高度
    build_args["previewHeight"] = "1334"
    # 是否需要加入 source maps
    build_args["sourceMaps"] = "true"
    # web mobile 平台（不含微信小游戏）下的旋转选项 [landscape、portrait、auto]
    # build_args["webOrientation"] = "landscape、portrait、auto"
    # 是否内联所有 SpriteFrame
    # build_args["inlineSpriteFrames"] = "true"
    # 是否合并初始场景依赖的所有 JSON
    # build_args["mergeStartScene"] = "false"
    # 是否将图集中的全部 SpriteFrame 合并到同一个包中
    build_args["optimizeHotUpdate"] = "true"
    # 包名
    build_args["packageName"] = "com.sanguowanzhuan.game"
    # 是否使用 debug keystore
    build_args["useDebugKeystore"] = "true"
    # keystore 路径
    # build_args["keystorePath"] = ""
    # keystore 密码
    # build_args["keystorePassword"] = ""
    # keystore 别名
    # build_args["keystoreAlias"] = ""
    # keystore 别名密码
    # build_args["keystoreAliasPassword"] = ""
    # native 平台（不含微信小游戏）下的旋转选项 [portrait, upsideDown, landscapeLeft, landscapeRight] 因为这是一个 object, 所以定义会特殊一些
    build_args["orientation"] = "{'portrait': true, 'upsideDown': true}"
    # native 平台下的模板选项 [default、link]
    build_args["template"] = "default"

    if phone_os == "android":
        # 设置编译 android 使用的 api 版本
        build_args["apiLevel"] = "android-28"
        # 设置 android 需要支持的 cpu 类型，可以选择一个或多个选项 [armeabi-v7a、arm64-v8a、x86]
        build_args["appABIs"] = "['armeabi-v7a','arm64-v8a']"
    # 是否在 web 平台下插入 vConsole 调试插件
    # build_args["embedWebDebugger"] = ""
    # 是否开启 md5 缓存
    # build_args["md5Cache"] = "false"
    # 是否在发布 native 平台时加密 js 文件
    # build_args["encryptJs"] = "false"
    # 加密 js 文件时使用的密钥
    # build_args["xxteaKey"] = "123456"
    # 加密 js 文件后是否进一步压缩 js 文件
    # build_args["zipCompressJs"] = "false"
    # 是否在构建完成后自动进行编译项目，默认为 否。
    # build_args["autoCompile"] = "false"
    # 参数文件路径。如果定义了这个字段，那么构建时将会按照 json 文件格式来加载这个数据，并作为构建参数
    # build_args["configPath"] = ""

    command = BUILD_COMMAND % (creator_path, PROJECT_PATH, get_build_args_str(build_args))
    print(command)
    err = os.system(command)
    if err != 0:
        print(creator_path)
        exit(-1)


def copy_manifest_to_build(origin_dir):
    if not os.path.exists(origin_dir):
        print("%s 不存在" % (origin_dir))
        exit(-1)

    origin_path = os.path.join(origin_dir, MANIFEST_FILENAME)
    target_path = os.path.join(NATIVE_RES_PATH, MANIFEST_FILENAME)

    if not os.path.exists(NATIVE_RES_PATH):
        os.makedirs(NATIVE_RES_PATH)
    if os.path.exists(target_path):
        os.remove(target_path)

    shutil.copy(origin_path, target_path)


def copy_assets_to_tag(target_dir):
    if not os.path.exists(NATIVE_RES_PATH):
        print("找不到 ./build/jsb_default/ 下的 assets 文件夹")
        exit(-1)

    if not os.path.exists(NATIVE_SRC_PATH):
        print("找不到 ./build/jsb_default/ 下的 src 文件夹")
        exit(-1)

    res_target_path = os.path.join(
        target_dir, os.path.basename(NATIVE_RES_PATH))
    src_target_path = os.path.join(
        target_dir, os.path.basename(NATIVE_SRC_PATH))

    if os.path.exists(res_target_path):
        shutil.rmtree(res_target_path)
    if os.path.exists(src_target_path):
        shutil.rmtree(src_target_path)

    shutil.copytree(NATIVE_RES_PATH, res_target_path)
    shutil.copytree(NATIVE_SRC_PATH, src_target_path)


def comp_file_size(a, b):
    a_size = os.path.getsize(a)
    b_size = os.path.getsize(b)
    return b_size - a_size


def find_file_path_by_suffix(search_path, file_suffix):
    files = []

    def recursive_find(path, suffix):
        file_list = os.listdir(path)
        for f in file_list:
            file_path = os.path.join(path, f)
            if os.path.isdir(file_path):
                recursive_find(file_path, suffix)
            else:
                f_suffix = os.path.splitext(f)[1]
                if f_suffix == suffix:
                    files.append(file_path)
    recursive_find(search_path, file_suffix)

    files_len = len(files)
    if files_len <= 0:
        print("构建文件夹中找不到 .manifest 文件")
        exit(-1)
    elif files_len >= 2:
        files = sorted(files, key=functools.cmp_to_key(comp_file_size))

    return files[0]


def generator_manifest():
    print("正在生成 manifest")
    version = config["generator"]["version"]
    remote_manifest_url = config["generator"]["remoteManifestURL"]
    
    if not os.path.exists(JSB_DEFAULT_PATH):
        print("找不到 %s 下的 assets 文件夹" % (JSB_DEFAULT_PATH))
        exit(-1)
    
    if not os.path.exists(MANIFEST_TAG_PATH):
        os.makedirs(MANIFEST_TAG_PATH)

    jsb_default_path = JSB_DEFAULT_PATH
    version_manifest_path = os.path.join(MANIFEST_TAG_PATH, version)
    if os.path.exists(version_manifest_path):
        shutil.rmtree(version_manifest_path)
    os.system(GENERATOR_COMMAND % (GENERATOR_PATH, version,
                                   remote_manifest_url, jsb_default_path, version_manifest_path))
    copy_assets_to_tag(version_manifest_path)
    copy_manifest_to_build(version_manifest_path)


def insert_search_head_to_mainjs():
    if not os.path.exists(SEARCH_HEAD_PATH):
        print("找不到 %s" % (SEARCH_HEAD_PATH))
        exit(-1)

    if not os.path.exists(MAINJS_PATH):
        print("找不到 %s" % (MAINJS_PATH))
        exit(-1)

    search_head_content = ""
    with open(SEARCH_HEAD_PATH, "r") as fd:
        search_head_content = fd.read()
    with open(MAINJS_PATH, "r+") as fd:
        old_content = fd.read()
        fd.seek(0)
        fd.write(search_head_content)
        fd.write(old_content)


def main():
    try:
        opts, _ = getopt.getopt(sys.argv[1:], "ho:", ["help", "os="])
    except getopt.GetoptError as _:
        print(
            'Error parametric, please use "python. '
            + os.path.basename(__file__)
            + ' --help"'
        )
        sys.exit(-1)

    phone_os = None

    for opt, arg in opts:
        if opt in ("-h", "--help"):
            webbrowser.open(DOCUMENT_PATH)
            sys.exit(0)
        elif opt in ("-o", "--os"):
            phone_os = arg
        else:
            print("Error path, please check path is valid.")
            sys.exit(-1)

    init_config()
    # build_assets(phone_os)
    generator_manifest()
    insert_search_head_to_mainjs()

    print("版本号：%s" % (config["generator"]["version"]))


if __name__ == "__main__":
    main()
