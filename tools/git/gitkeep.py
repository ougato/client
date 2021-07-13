#!/usr/bin/env python
# -*- coding:utf-8 -*-

"""
Author       : ougato
Date         : 2020-08-28 22:24:11
LastEditors  : ougato
LastEditTime : 2020-10-14 03:30:52
FilePath     : \client242\tools\git\gitkeep.py
Description  : 用于生成 .gitkeep 文件，防止 git 无法提交空文件夹
"""

import os
import sys
import getopt
import webbrowser

COMMAND_PATH = os.getcwd()
CURRENT_PATH = os.path.dirname(os.path.realpath(__file__))

os.chdir(os.path.dirname(os.path.realpath(__file__)))
DEFAULT_PATH = os.path.join("..", "..", "assets", "src", "core")
DOCUMENT_PATH = os.path.abspath(os.path.join(CURRENT_PATH, "README.md"))
GITKEEP_FILE_NAME = ".gitkeep"

ARG_STATE_NEW = 0x0001
ARG_STATE_DEL = 0x0002

log_data = set()


def del_gitkeep_file(path):
    path_gitkeep = os.path.join(path, GITKEEP_FILE_NAME)
    if os.path.exists(path_gitkeep) and os.path.isfile(path_gitkeep):
        os.remove(path_gitkeep)
        log_data.add(path_gitkeep)

    names = os.listdir(path)
    for name in names:
        path_name = os.path.join(path, name)
        if os.path.isdir(path_name):
            del_gitkeep_file(path_name)


def new_gitkeep_file(path):
    names = os.listdir(path)
    if names:
        for name in names:
            path_name = os.path.join(path, name)
            if os.path.isdir(path_name):
                new_gitkeep_file(path_name)
    else:
        path_name = os.path.join(path, GITKEEP_FILE_NAME)
        fd = open(path_name, "wb")
        fd.close()
        log_data.add(path_name)


def output_log(state):
    str_state = ""
    count = 0
    if state == ARG_STATE_DEL:
        str_state = "delete"
    elif state == ARG_STATE_NEW:
        str_state = "new"
    count = len(log_data)
    print(str_state + " " + str(count) + " file.")
    for paths in log_data:
        print(paths)


def main():
    try:
        opts, _ = getopt.getopt(sys.argv[1:], "hdnp:", [
                                "help", "del", "new", "path="])
    except getopt.GetoptError as _:
        print(
            'Error parametric, please use "python '
            + os.path.basename(__file__)
            + ' --help"'
        )
        sys.exit(-1)

    path = DEFAULT_PATH
    state = ARG_STATE_NEW
    for opt, arg in opts:
        if opt in ("-h", "--help"):
            webbrowser.open(DOCUMENT_PATH)
            sys.exit(0)
        elif opt in ("-d", "--del"):
            state = ARG_STATE_DEL
        elif opt in ("-n", "--new"):
            state = ARG_STATE_NEW
        elif opt in ("-p", "--path"):
            path = os.path.join(COMMAND_PATH, arg)

    if os.path.exists(path) and os.path.isdir(path):
        path = os.path.realpath(path)
    else:
        print("Error path, please check path is valid.")
        sys.exit(-1)

    if state == ARG_STATE_NEW:
        new_gitkeep_file(path)
    elif state == ARG_STATE_DEL:
        del_gitkeep_file(path)

    output_log(state)


if __name__ == "__main__":
    main()
