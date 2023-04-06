const fs = require('fs')

fs.writeFile('../resource/1.txt','确实屌',function(err){
    if(err){
        console.log('something is wrong!\n'+err.message)
    }
    console.log('success input! ')
})