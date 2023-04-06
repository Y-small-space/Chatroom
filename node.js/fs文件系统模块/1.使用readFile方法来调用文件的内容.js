/*
fs模块是 Nodejs官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
例如：
•fs.readFile()方法，用来读取指定文件中的内容
•fs.writeFile()方法，用来向指定的文件中写入内容
*/


//1.导入fs 模块，来操作文件
const fs = require('fs');


//2. 调用fs.readFile(）方法速取文件
//参数1：读取文件的存放路径
//参数2：读取文件时候采用的编码格式，一般默认指定 utf-8
//参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('../resource/班级.md', 'utf8', function(err, dataStr) {
//2.1 打印失敗的結果
//如果速取成功，則 err 的値力 null
// 如果读取失败，则err 的值为 错误对象，datastr 的值为 undefined
console.log(err);
console.log('------');
//2.2 打印成功的結果
console.log(dataStr)
})