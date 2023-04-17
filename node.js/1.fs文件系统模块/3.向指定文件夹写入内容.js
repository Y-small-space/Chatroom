 //1. 导入 fs 文件系统模块
 const fs = require('fs')


 /*
 1. fs.writeFile()的语法格式
    使用 fs.writeFile()方法，可以向指定的文件中写入内容，语法格式如下：
    fs.writeFile(file, data[, options], callback)
    参数解读：
        •参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
        •参数2：必选参数，表示要写入的内容。
        •参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf-8。
 */
fs.writeFile('../resource/1.txt',"周杰伦最屌!",function(err){
    //2.1 如果文件导入成功，则 err 的值等于 null
    //2.2 如果文件写入失败，则 err 的值等于一个 错误对象
    console.log(err)
})
