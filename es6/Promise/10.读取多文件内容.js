// 1.导入模块
const fs= require('fs');
const util = require('util');

// 2.调用方法
const myreadFile = util.promisify(fs.readFile);
// 3.读取文件
let one = myreadFile('../resource/班级.md');
let two = myreadFile('../resource/年龄.md');
let three = myreadFile('../resource/姓名.md');

let result = Promise.all([one,two,three]);
console.log(result);

result.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})
