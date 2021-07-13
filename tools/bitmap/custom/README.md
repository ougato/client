<!--
 * @Author       : ougato
 * @Date         : 2021-01-15 21:21:00
 * @LastEditors  : ougato
 * @LastEditTime : 2021-01-19 22:31:25
 * @FilePath     : \client243\tools\bitmap\custom\README.md
 * @Description  : 
-->
# 使用说明

## 依赖
```
pip install -r requirements.txt
```

## 功能
* 用于需要生成自定义位图字体，以原文件为散图的形式，读取文件命名与自定义规则，进行合图并生成 `.fnt` / `.png` 文件。

## 参数
* `[-h]` `[--help]` ：查看帮助
* `[-i]` `[--input]` ：指定一个需要生成位图的目录
* `[-r]` `[--recursive]` ：是否递归对指定文件夹下的子目录进行位图生成

## 配置

``` json
{
    "info": {
        "face": "Arial",
        "size": 30,
        "bold": 0,
        "italic": 0,
        "charset": "",
        "unicode": 0,
        "stretchH": 100,
        "smooth": 1,
        "aa": 1,
        "padding": "0,0,0,0",
        "spacing": "0,0",
        "outline": 0
    },
    "common":{
        "lineHeight": 120,
        "base": 87,
        "pages": 1,
        "packed": 0,
        "alphaChnl": 0,
        "redChnl": 0,
        "greenChnl": 0,
        "blueChnl": 0
    }
}
```