const fs = require('fs')
const { dirname } = require('path')

//出现路径拼接错误的问题，是因为提供了 ./或../开头的相对路径
//如果要解决这个问题，可以直接提供一个完整的文件路径

/* fs.readFile('../班级.md','utf-8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败！'+err.message)
    }
    console.log('读取文件成功！\n'+ dataStr)
}) */

//移植性非常差、不利于维护
/* fs.readFile('/Users/gjy/Desktop/git_project/前端/node.js/resource/班级.md','utf-8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败！'+err.message)
    }
    console.log('读取文件成功！\n'+ dataStr)
}) */

//__dirname 表示当前文件所在的目录
//console.log(__dirname);
fs.readFile(__dirname+'/resource/1.txt','utf-8',function(){
    if(err){
        return console.log('文件读取失败！'+err.message)
    }
    console.log('读取文件成功！\n'+ dataStr)
})
