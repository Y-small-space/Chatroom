const fs = require('fs');

fs.readFile('../resource/班级.md','utf-8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败！\n'+ err.message);
    }

    console.log('读取文件成功！\n'+ dataStr);
})
