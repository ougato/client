'''
Author       : ougato
Date         : 2021-07-14 10:36:31
LastEditors  : ougato
LastEditTime : 2021-11-08 17:13:56
FilePath     : /client/tools/protobuf/json2ts.py
Description  : 通过多语言的 json 文件 生成 typescript 中 enum 的 key 定义
'''

#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os
import sys
import re
import json

COMMAND_PATH = os.getcwd()
CURRENT_PATH = os.path.dirname(os.path.realpath(__file__))

os.chdir(CURRENT_PATH)

# 主包 resources 的 json 文件目录
RESOURCES_JSON_DIR_PATH = os.path.abspath(
    os.path.join(CURRENT_PATH, "..", "..", "assets", "resources")
)
# 主包 resources 的 typescript 文件目录
RESOURCES_TS_DIR_PATH = os.path.abspath(
    os.path.join(CURRENT_PATH, "..", "..", "assets", "src", "define", "LangDefine.ts")
)
# 游戏的 json 文件目录
GAME_JSON_DIR_PATH = os.path.abspath(
    os.path.join(CURRENT_PATH, "..", "..", "assets", "game")
)
# json 相对文件路径
JSON_FILE_PATH = os.path.join("i18n", "json", "zh_CN.json")
# typescript 模版文件
TS_TEMPLATE_FILE_PATH = os.path.join(CURRENT_PATH, "template.ts")

# PBJS_WINDOWS_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbjs.cmd")
# PBJS_LINUX_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbjs")
# PBTS_WINDOWS_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbts.cmd")
# PBTS_LINUX_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbts")
# PROTO_INPUT_PATH = os.path.relpath(
#     os.path.join(CURRENT_PATH, "..", "..", "proto", "*.proto")
# )
# PROTO_OUTPUT_PATH = os.path.join(CURRENT_PATH, "..", "..", "assets", "src", "protobuf")
# JS_PATH = os.path.relpath(os.path.join(PROTO_OUTPUT_PATH, "Proto.js"))
# TS_PATH = os.path.relpath(os.path.join(PROTO_OUTPUT_PATH, "Proto.d.ts"))

# MAKE_JS_COMMAND = "%s -t static-module -p ../lib/protobuf -w commonjs --dependency protobuf --es6 --keep-case --force-number --no-beautify --no-convert  -o %s %s"
# MAKE_TS_COMMAND = "%s -n Proto --no-comments -o %s %s"

def gen_ts(json_file_path, ts_file_path):
    ts_content = None
    json_content = None

    with open(TS_TEMPLATE_FILE_PATH, "r", encoding="utf-8") as f:
        ts_content = f.read()

    with open(json_file_path, "r", encoding="utf-8") as f:
        json_content = json.load(f)
    
    key_content = ""
    for key, _ in json_content.items():
        key_content += "        %s\n" % ("%s = %s" % key, key)
    ts_content = ts_content % key_content

    with open(ts_file_path, "w", encoding="utf-8") as f:
        f.write(ts_content)


def gen_resources_ts():
    path = os.path.join(RESOURCES_JSON_DIR_PATH, JSON_FILE_PATH)
    if not os.path.exists(path):
        print("%s 文件不存在" % path)
        return

    gen_ts(path, RESOURCES_TS_DIR_PATH)

def gen_game_ts():
    print("")

def main():
    gen_resources_ts()
    gen_game_ts()
    # print("proto 文件生成完成")
    # print(os.path.abspath(JS_PATH))
    # print(os.path.abspath(TS_PATH))


if __name__ == "__main__":
    main()
