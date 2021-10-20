'''
Author       : ougato
Date         : 2021-07-14 02:03:13
LastEditors  : ougato
LastEditTime : 2021-10-21 02:00:58
FilePath     : /undefinede:/Project/games/client/tools/protobuf/pb2ts.py
Description  : 
'''
 
"""
Author       : ougato
Date         : 2020-09-29 01:20:04
LastEditors  : ougato
LastEditTime : 2020-10-15 01:43:58
FilePath     : \client242\tools\protobuf\pb2ts.py
Description  : 通过 *.proto 文件生成出 *.d.ts 与 *.js 文件，用于网络数据结构 protobuf 使用
"""

#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os
import sys
import getopt
import webbrowser

COMMAND_PATH = os.getcwd()
CURRENT_PATH = os.path.dirname(os.path.realpath(__file__))

os.chdir(CURRENT_PATH)

PB_EXECUTE_PATH = os.path.abspath(
    os.path.join(CURRENT_PATH, "..", "..", "node_modules", ".bin")
)
PBJS_WINDOWS_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbjs.cmd")
PBJS_LINUX_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbjs")
PBTS_WINDOWS_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbts.cmd")
PBTS_LINUX_EXECUTE_PATH = os.path.join(PB_EXECUTE_PATH, "pbts")
PROTO_INPUT_PATH = os.path.relpath(
    os.path.join(CURRENT_PATH, "..", "..", "proto", "*.proto")
)
PROTO_OUTPUT_PATH = os.path.join(CURRENT_PATH, "..", "..", "assets", "src", "protobuf")
JS_PATH = os.path.relpath(os.path.join(PROTO_OUTPUT_PATH, "Proto.js"))
TS_PATH = os.path.relpath(os.path.join(PROTO_OUTPUT_PATH, "Proto.d.ts"))

MAKE_JS_COMMAND = "%s -t static-module -p ../lib/protobuf -w commonjs --dependency protobuf --es6 --keep-case --no-beautify --no-convert -o %s %s"
MAKE_TS_COMMAND = "%s -n Proto --no-comments -o %s %s"


def make_js(pbjs):
    os.system(MAKE_JS_COMMAND % (pbjs, JS_PATH, PROTO_INPUT_PATH))


def make_ts(pbts):
    os.system(MAKE_TS_COMMAND % (pbts, TS_PATH, JS_PATH))


def main():
    pbjs_execute_path = ""
    pbts_execute_path = ""

    if sys.platform.startswith("win32") or sys.platform.startswith("cygwin"):
        pbjs_execute_path = PBJS_WINDOWS_EXECUTE_PATH
        pbts_execute_path = PBTS_WINDOWS_EXECUTE_PATH
    elif (
        sys.platform.startswith("aix")
        or sys.platform.startswith("linux")
        or sys.platform.startswith("darwin")
    ):
        pbjs_execute_path = PBJS_LINUX_EXECUTE_PATH
        pbts_execute_path = PBTS_LINUX_EXECUTE_PATH
    else:
        print("未知系统，无法自动生成 proto 文件")
        exit(-1)

    make_js(pbjs_execute_path)
    make_ts(pbts_execute_path)
    print("proto 文件生成完成")
    print(os.path.abspath(JS_PATH))
    print(os.path.abspath(TS_PATH))


if __name__ == "__main__":
    main()
