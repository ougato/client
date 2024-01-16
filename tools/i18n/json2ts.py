'''
Author       : ougato
Date         : 2021-07-14 10:36:31
LastEditors  : ougato
LastEditTime : 2024-01-16 22:11:05
FilePath     : /client/tools/i18n/json2ts.py
Description  : 通过多语言的 json 文件 生成 typescript 中 enum 的 key 定义
'''

#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os
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
    os.path.join(CURRENT_PATH, "..", "..", "assets",
                 "src", "define", "LangDefine.ts")
)
# 游戏的 json 文件目录
GAME_JSON_DIR_PATH = os.path.abspath(
    os.path.join(CURRENT_PATH, "..", "..", "assets", "games")
)
# json 相对文件路径
JSON_FILE_PATH = os.path.join("i18n", "json", "zh_CN.json")
# typescript 相对文件路径
TS_FILE_PATH = os.path.join("src", "define", "LangDefine.ts")
# typescript 模版内容
TS_TEMPLATE_CONTENT = '''export namespace %sLangDefine {

    export enum Key {
%s
    }

}
'''
# 语言 key
TS_LANG_KEY = '''        %s = "%s",\n'''


def gen_ts(json_file_path, ts_file_path, game_name=""):
    ts_content = TS_TEMPLATE_CONTENT
    json_content = None

    with open(json_file_path, "r", encoding="utf-8") as f:
        json_content = json.load(f)

    key_content = ""
    for key, _ in json_content.items():
        key_content += TS_LANG_KEY % (key, key)

    ts_content = ts_content % (game_name, key_content.rstrip("\n"))

    with open(ts_file_path, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print("%s" % ts_file_path)


def gen_resources_ts():
    path = os.path.join(RESOURCES_JSON_DIR_PATH, JSON_FILE_PATH)
    if not os.path.exists(path):
        print("%s 文件不存在" % path)
        return

    ts_dir_path = os.path.dirname(RESOURCES_TS_DIR_PATH)
    if not os.path.exists(ts_dir_path):
        os.makedirs(ts_dir_path)

    gen_ts(path, RESOURCES_TS_DIR_PATH)


def gen_game_ts():
    game_name_list = os.listdir(GAME_JSON_DIR_PATH)
    for game_name in game_name_list:
        if not os.path.isdir(os.path.join(GAME_JSON_DIR_PATH, game_name)):
            continue
        game_json_file_path = os.path.join(
            GAME_JSON_DIR_PATH, game_name, JSON_FILE_PATH)
        trans_game_name = game_name.capitalize()
        ts_file_name = trans_game_name + os.path.basename(TS_FILE_PATH)
        ts_file_path = os.path.join(
            GAME_JSON_DIR_PATH, game_name, os.path.dirname(TS_FILE_PATH), ts_file_name)

        gen_ts(game_json_file_path, ts_file_path, trans_game_name)


def main():
    gen_resources_ts()
    gen_game_ts()
    print("文件生成完成")


if __name__ == "__main__":
    main()
