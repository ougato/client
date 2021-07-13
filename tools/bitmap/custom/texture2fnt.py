#!/usr/bin/env python
# -*- coding:utf-8 -*-

"""
Author       : ougato
Date         : 2021-01-15 00:38:05
LastEditors  : ougato
LastEditTime : 2021-01-15 01:04:54
FilePath     : \client243\tools\bitmap\custom\texture2fnt.py
Description  : 以文件命名 当成 码点的散图文件 自动生成 位图字体 .fnt / .png 文件
"""

import os
import sys
import glob
import math
import codecs
import getopt
import json
import shutil
from PIL import Image

COMMAND_PATH = os.getcwd()
CURRENT_PATH = os.path.dirname(os.path.realpath(__file__))

IMAGE_SUFFIX = ".png"
FONT_SUFFIX = ".fnt"
ALIAS_FILENAME = "alias.json"
ALIAS_PATH = os.path.abspath(os.path.join(CURRENT_PATH, ALIAS_FILENAME))
CONFIG_FILENAME = "config.json"
CONFIG_PATH = os.path.abspath(os.path.join(CURRENT_PATH, CONFIG_FILENAME))
OUPUT_DIRNAME = "output"

FNT_INFO = "info face=\"%s\" size=%d bold=%d italic=%d charset=\"%s\" unicode=%d stretchH=%d smooth=%d aa=%d padding=%d,%d,%d,%d spacing=%d,%d outline=%d\n"
FNT_COMMON = "common lineHeight=%d base=%d scaleW=%d scaleH=%d pages=%d packed=%d alphaChnl=%d redChnl=%d greenChnl=%d blueChnl=%d\n"
FNT_PAGE = "page id=%d file=\"%s\"\n"
FNT_CHARS = "chars count=%d\n"
FNT_CHAR = "char id=%s x=%s y=%s width=%s height=%s xoffset=%s yoffset=%s xadvance=%s page=%s chnl=%s letter=\"%s\"\n"


alias = None
config = None

FACE = "Arial"
SIZE = 32
BOLD = 0
ITALIC = 0
CHARSET = ""
UNICODE = 1
STRETCH_H = 100
smooth = 1
AA = 1
PADDING_TOP = 0
PADDING_BOTTOM = 0
PADDING_LEFT = 0
PADDING_RIGHT = 0
SPACING_RIGHT = 0
SPACING_BOTTOM = 0
OUTLINE = 0

LINE_HEIGHT = 0
BASE = 0
SCALE_W = 0
SCALE_H = 0
PAGES = 0
PACKED = 0
ALPHA_CHNL = 0
RED_CHNL = 0
GREEN_CHNL = 0
BLUE_CHNL = 0

os.chdir(CURRENT_PATH)


def get_config_default_value(_dict, key, default):
    result = None
    if _dict and _dict.get(key):
        result = _dict[key]
    else:
        result = default
    return result


def create_fnt(path, fnt_info, width, height):
    fd = codecs.open(path, "w", "utf-8")
    fnt_chars = fnt_info.get("chars")

    # FNT_INFO
    config_info = config.get("info")
    info_dict = {}
    info_dict["face"] = get_config_default_value(config_info, "face", FACE)
    info_dict["size"] = get_config_default_value(config_info, "size", SIZE)
    info_dict["bold"] = get_config_default_value(config_info, "bold", BOLD)
    info_dict["italic"] = get_config_default_value(
        config_info, "italic", ITALIC)
    info_dict["charset"] = get_config_default_value(
        config_info, "charset", CHARSET)
    info_dict["unicode"] = get_config_default_value(
        config_info, "unicode", UNICODE)
    info_dict["stretchH"] = get_config_default_value(
        config_info, "stretchH", STRETCH_H)
    info_dict["smooth"] = get_config_default_value(
        config_info, "smooth", smooth)
    info_dict["aa"] = get_config_default_value(config_info, "aa", AA)
    info_dict["padding_top"] = get_config_default_value(
        config_info, "paddingTop", PADDING_TOP)
    info_dict["padding_bottom"] = get_config_default_value(
        config_info, "paddingBottom", PADDING_BOTTOM)
    info_dict["padding_left"] = get_config_default_value(
        config_info, "paddingLeft", PADDING_LEFT)
    info_dict["padding_right"] = get_config_default_value(
        config_info, "paddingRight", PADDING_RIGHT)
    info_dict["spacing_left"] = get_config_default_value(
        config_info, "spacingLeft", SPACING_RIGHT)
    info_dict["spacing_right"] = get_config_default_value(
        config_info, "spacingRight", SPACING_BOTTOM)
    info_dict["outline"] = get_config_default_value(
        config_info, "outline", OUTLINE)

    info = FNT_INFO % (info_dict["face"],
                       info_dict["size"],
                       info_dict["bold"],
                       info_dict["italic"],
                       info_dict["charset"],
                       info_dict["unicode"],
                       info_dict["stretchH"],
                       info_dict["smooth"],
                       info_dict["aa"],
                       info_dict["padding_top"],
                       info_dict["padding_bottom"],
                       info_dict["padding_left"],
                       info_dict["padding_right"],
                       info_dict["spacing_left"],
                       info_dict["spacing_right"], info_dict["outline"])
    fd.write(info)

    # FNT_COMMON
    config_common = config.get("common")
    common_dict = {}
    common_dict["line_height"] = get_config_default_value(
        config_common, "lineHeight", LINE_HEIGHT)
    common_dict["base"] = get_config_default_value(config_common, "base", BASE)
    common_dict["scale_w"] = width
    common_dict["scale_h"] = height
    common_dict["pages"] = get_config_default_value(
        config_common, "pages", PAGES)
    common_dict["packed"] = get_config_default_value(
        config_common, "packed", PACKED)
    common_dict["alpha_chnl"] = get_config_default_value(
        config_common, "alphaChnl", ALPHA_CHNL)
    common_dict["red_chnl"] = get_config_default_value(
        config_common, "redChnl", RED_CHNL)
    common_dict["green_chnl"] = get_config_default_value(
        config_common, "greenChnl", GREEN_CHNL)
    common_dict["blue_chnl"] = get_config_default_value(
        config_common, "blueChnl", BLUE_CHNL)
    common = FNT_COMMON % (common_dict["line_height"],
                           common_dict["base"],
                           common_dict["scale_w"],
                           common_dict["scale_h"],
                           common_dict["pages"],
                           common_dict["packed"],
                           common_dict["alpha_chnl"],
                           common_dict["red_chnl"],
                           common_dict["green_chnl"],
                           common_dict["blue_chnl"])
    fd.write(common)

    # FNT_PAGE
    page = FNT_PAGE % (0, fnt_info.get("png_name"))
    fd.write(page)

    # FNT_CHARS
    chars = FNT_CHARS % (len(fnt_info.get("chars")))
    fd.write(chars)

    # FNT_CHAR
    for key in fnt_chars:
        char = FNT_CHAR % (key.get("id"),
                           key.get("x"),
                           key.get("y"),
                           key.get("width"),
                           key.get("height"),
                           key.get("xoffset"),
                           key.get("yoffset"),
                           key.get("xadvance"),
                           key.get("page"),
                           key.get("chnl"),
                           key.get("letter"))
        fd.write(char)


def clear_output(path):
    if os.path.exists(path) and os.path.isdir(path):
        for name in os.listdir(path):
            filepath = os.path.join(path, name)
            if os.path.isfile(filepath):
                os.remove(filepath)
            else:
                shutil.rmtree(filepath)


def create_png(path, code_point_list, width, height):
    config_info = config.get("info")
    canvas_image = Image.new('RGBA', (width, height))

    xoffset = get_config_default_value(
        config_info, "paddingLeft", PADDING_LEFT)
    padding_right = get_config_default_value(
        config_info, "paddingRight", PADDING_RIGHT)
    spacing_right = get_config_default_value(
        config_info, "spacingRight", SPACING_RIGHT)
    for key in code_point_list.keys():
        item_image = Image.open(key)
        item_width = item_image.size[0]
        canvas_image.paste(item_image, (xoffset, 0))
        xoffset += item_width + padding_right + spacing_right

    canvas_image.save(path)


def create_file(code_point_list, texture_path):
    config_info = config.get("info")

    texture_dirname = os.path.basename(texture_path)
    output_path = os.path.join(texture_path, OUPUT_DIRNAME)
    png_name = texture_dirname + IMAGE_SUFFIX
    fnt_path = os.path.join(output_path, texture_dirname + FONT_SUFFIX)
    png_path = os.path.join(output_path, png_name)

    if not code_point_list or len(code_point_list) <= 0:
        return

    if not output_path:
        return

    if not os.path.exists(output_path):
        os.makedirs(output_path)
    else:
        clear_output(output_path)

    total_width = get_config_default_value(
        config_info, "paddingLeft", PADDING_LEFT)
    padding_right = get_config_default_value(
        config_info, "paddingRight", PADDING_RIGHT)
    spacing_right = get_config_default_value(
        config_info, "spacingRight", SPACING_RIGHT)
    height = 0

    fnt_info = {}
    fnt_item_list = []
    for key in code_point_list.keys():
        image = Image.open(key)
        item_width = image.size[0]
        item_height = image.size[1]
        value = code_point_list.get(key)

        fnt_item = {}
        fnt_item["id"] = str(value)
        fnt_item["x"] = str(total_width)
        fnt_item["y"] = str(0)
        fnt_item["width"] = str(item_width)
        fnt_item["height"] = str(item_height)
        fnt_item["xoffset"] = str(0)
        fnt_item["yoffset"] = str(0)
        fnt_item["xadvance"] = str(item_width)
        fnt_item["page"] = str(0)
        fnt_item["chnl"] = str(0)
        fnt_item["letter"] = chr(value)

        fnt_item_list.append(fnt_item)

        total_width += item_width + padding_right + spacing_right
        height = item_height

    fnt_info["png_name"] = png_name
    fnt_info["chars"] = fnt_item_list

    create_png(png_path, code_point_list, total_width, height)
    create_fnt(fnt_path, fnt_info, total_width, height)


def get_code_point(filename):
    code_point = None

    if not filename:
        return code_point

    name_len = len(filename)
    if name_len > 0 and name_len <= 1:
        code_point = ord(filename)
    elif name_len > 1:
        value = alias.get(filename)
        if value:
            code_point = value

    return code_point


def make_file(path, recursive):
    if not os.path.exists(path) or not os.path.isdir(path):
        print("Error path, please check path is valid.")
        sys.exit(-1)

    failed_list = []
    code_point_list = {}
    for name in os.listdir(path):
        abspath = os.path.abspath(os.path.join(path, name))
        if os.path.isdir(abspath):
            if recursive:
                make_file(abspath, recursive)
        else:
            suffix = name[name.rfind("."):]
            if suffix == IMAGE_SUFFIX:
                filename = name[:name.rfind(".")]
                code_point = get_code_point(filename)
                if code_point:
                    code_point_list[abspath] = code_point
                else:
                    failed_list.append(abspath)

    create_file(code_point_list, path)

    failed_count = len(failed_list)
    print("路径：%s" % (path))
    print("成功：%d" % (len(code_point_list)))
    if failed_count > 0:
        print("失败：%d" % (failed_count))
        for i in range(failed_count):
            print(failed_list[i])


def abs(path):
    real_path = None
    if os.path.isabs(path):
        real_path = path
    else:
        real_path = os.path.realpath(os.path.join(COMMAND_PATH, path))
    return real_path


def load_alias(path):
    result = {}
    if os.path.exists(path) and os.path.isfile(path):
        with open(path, "r") as fd:
            content = fd.read()
            try:
                result = json.loads(content)
            except Exception:
                print("%s 文件解析失败" % (path))
                exit(-1)
    return result


def load_config(path):
    result = {}
    if os.path.exists(path) and os.path.isfile(path):
        with open(path, "r") as fd:
            content = fd.read()
            try:
                result = json.loads(content)
            except Exception:
                print("%s 文件解析失败" % (path))
                exit(-1)
    return result


def main():
    global alias
    global config

    try:
        opts, _ = getopt.getopt(sys.argv[1:], "hri:", ["help", "r", "i="])
    except getopt.GetoptError as _:
        print(
            'Error parametric, please use "python '
            + os.path.basename(__file__)
            + ' --help"'
        )
        sys.exit(-1)

    # 是否递归目录生成位图
    is_recursive = False
    # 导入散图文件夹的路径
    input_path = None

    for opt, arg in opts:
        if opt in ("-h", "--help"):
            # webbrowser.open(DOCUMENT_PATH)
            sys.exit(0)
        elif opt in ("-r", "--recursive"):
            is_recursive = True
        elif opt in ("-i", "--input"):
            input_path = abs(arg)

    if not input_path:
        input_path = os.path.abspath(CURRENT_PATH)

    alias = load_alias(ALIAS_PATH)
    config = load_config(CONFIG_PATH)
    make_file(input_path, is_recursive)


if __name__ == "__main__":
    main()
