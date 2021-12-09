
const uploadMoudle = require("./upload")

let chonisekey = new uploadMoudle.choiseKeys();

if (process.argv.length > 2) {
    let count = 2;
    while (process.argv.length > count) {
        let k = process.argv[count++];
        let val = process.argv[count++]
        console.log(k, val)
        switch (k) {
            case "-e":
                chonisekey.publishEnv = val;
                break;
            case "-w":
                chonisekey.publishWork = val;
                break;
            case "-u":
                chonisekey.isUpload = val;
                break;
            default: break;
        }
    }
    uploadMoudle.uploadMain(chonisekey);
}