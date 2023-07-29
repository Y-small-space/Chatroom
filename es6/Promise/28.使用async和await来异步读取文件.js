// 1. 导入模块
const fs = require('fs');
const { promisify } = require('util');

// 2. 创建async函数
async function main() {
    // 读取文件
    let myreadfile = promisify(fs.readFile);
    try {
        let one = await myreadfile('../resource/班级.md');
        let two = await myreadfile('../resource/年龄.md');
        let three = await myreadfile('../resource/姓名.md');
        console.log(one+two+three);
    }catch(e){
        console.log(e);
    }
}

// 调用函数
main();