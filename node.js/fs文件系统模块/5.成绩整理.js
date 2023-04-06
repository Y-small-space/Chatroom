const fs = require("fs")

fs.readFile('../resource/2.txt','utf-8',function(err,dataStr){
    if(err){
        console('something is wrong'+err.message)
    }
    //先把成绩按照空格分割
    const arrold = dataStr.split(' ')
    //循环分割后的数据，对每一项数据，进行字符串的替换操作 
    const arr = [];
    arrold.forEach(item =>{
        arr.push(item.replace('=','：'))
    })
    //把新数组中的每一个项进行合并，得到一个新数组
    const arrNew = arr.join('\r\n')
    
    //调用fs写入
    fs.writeFile('../resource/2.txt', arrNew ,function(err){
        if(err){
            return console.log('写入文字失败!'+err.message)
        }
        console.log('写入成功')
    })
})