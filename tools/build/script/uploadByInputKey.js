const readline = require('readline');
const config = require("./config")
const uploadMoudle = require("./upload")
// 选择环境信息
let envInfoMsg1 = "可选择构建环境："
let envKes = {}
let count = 1;
for (var a in config.multiProjectConfig) {
    envInfoMsg1 += (count + "、" + a + ":" + config.multiProjectConfig[a].explain + " ")
    envKes[count] = a;
    count += 1;
}
envInfoMsg1 += "。\r\n清输入你选择构建环境序号："

let workTypeMsg = "可选择构建内容："
workKeys = {}
let works = [
    {
        key: "app",
        explain: "构建apk"
    },
    {
        key: "web",
        explain: "构建Web"
    },
    {
        key: "hots",
        explain: "构建热更新资源"
    },
]
works.forEach((obj, i) => {
    workTypeMsg += (i + 1 + "、" + obj.key + ":" + obj.explain) + " "
    workKeys[i + 1] = obj.key;
})
workTypeMsg += "。\r\n  \r\n清输入你选择工作内容序号："
let questions = [
    {
        question: envInfoMsg1,
        kes: envKes,
        choseNoti: "你选择构建环境是"
    },
    {
        question: workTypeMsg,
        kes: workKeys,
        choseNoti: "你选择构建内容是"
    }
]


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});;
let choisekeys = [];
let toCount = 0;
function toQuestion() {
    let q = questions[toCount]
    rl.question(q.question, (answer) => {
        if (q.kes[answer] == undefined) {
            console.log("输入错误");
        } else {
            console.log(`${q.choseNoti}: ${answer}`);
            choisekeys[toCount] = {
                answer: answer,
                key: q.kes[answer],
            }
            toCount += 1;
            if (toCount == questions.length) {
                return confirmQuestion();
            }
        }
        toQuestion();
    });
}

function confirmQuestion() {
    let msg = `你当前选择的
    构建环境：${choisekeys[0].answer}:${config.multiProjectConfig[choisekeys[0].key].explain}
    构建内容：${choisekeys[1].answer}:${works[choisekeys[1].answer - 1].explain}

    确认但并{ 不 上传}请输入：0，确认并上传请输入：1， 重新选择请输入：2， 退出请输入：3。
    `
    let callobj = new uploadMoudle.choiseKeys(choisekeys[0].key, choisekeys[1].key)
    rl.question(msg, (answer) => {
        switch (answer) {
            case '0':
                callobj.isUpload = false;
            case '1':
                rl.close();
                uploadMoudle.uploadMain(callobj);
                break;
            case '2':
                choisekeys = []
                toCount = 0;
                toQuestion();
                break;
            case '3':
                choisekeys = []
                toCount = 0;
                rl.close();
                uploadMoudle.uploadMain(callobj);
                break;
            default: {
                console.log("输入错误")
                confirmQuestion();
            }
        }
    });
}
toQuestion()
