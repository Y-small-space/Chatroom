const path = require('path')
const fs = require('fs')
/* path模块是 Nodejs 官方提供的、用来处理路径的模块。它提供了一系列的方法和屬性，用来满足用户对路径的处理
需求。
例如：
•pathjoin()方法，用来将多个路径片段拼接成一个完整的路径字符串
•path.basename()方法，用来从路径字符串中，将文件名解析出来 */

//path.join()实例示范
//  注意：
//      ../会抵消前面的路径
/* const pathStr = path.join('./a','./b/c','../','./d','e')
console.log(pathStr) */

/* const pathStr2 = path.join(__dirname,'../resource/1.txt')
console.log(pathStr2)//输出 为当前文件所处目录/resource/1.txt
fs.readFile(path.join(__dirname,'../resource/1.txt'),'utf-8',function(err,dataStr){
    if(err){
        return console.log(err.message)
    }
    console.log(dataStr)
}) */

//path.basename()实例示范

/* path.basename(path[, ext])
参数解读：
•path <string＞必选参数，表示一个路径的字符串
•ext <string＞可选参数，表示文件扩展名 
•返回：<string＞表示路径中的最后一部分*/

const fspath = './a/b/c/file.html'
var fullname = path.basename(fspath);
console.log(fullname)

var nameWithoutExt = path. basename (fspath,'.html')
console.log(nameWithoutExt)

//获取文件的拓展名
const fext = path.extname(fspath)
console.log(fext)