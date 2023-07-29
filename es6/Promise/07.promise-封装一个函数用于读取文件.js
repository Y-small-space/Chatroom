// 1. 导入模块
const fs = require('fs');

// 2. 封装一个函数
function ReadFileFun(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            // 判断
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

// 3.调用
ReadFileFun('../resource/班级.md').then(value=>{
    console.log(value.toString());
},rea)