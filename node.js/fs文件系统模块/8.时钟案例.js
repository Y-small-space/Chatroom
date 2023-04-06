//导入fs模块
const fs = require('fs')
//导入path模块
const path = require('path')

//定义正则表达式，接收style和script模块
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//用fs模块读取文件
fs.readFile(path.join(__dirname,'./案例/index.html'),function(err,dataStr){
    if(err){
        return console.log(err.message)
    }

    //读取成功之后，调用对应的三个方法，分别拆解出 css，js，html 文件
    resolveCSS(dataStr)
    resolveScript(dataStr)
    resolveHtml(dataStr)
})

//定义处理css样式的方法
function resolveCSS(htmlstr){
    //使用正则表达式提取所需要的内容
    const r1 = regStyle.exec(htmlstr)
    //将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./案例/clock/index.css'),newCSS,err =>{
        if(err) return console.log(err.message)
        console.log('写入脚本成功！')
    })
}

//定义处理JS的方法
function resolveScript(htmlstr){
    const r2 = regScript.exec(htmlstr)
    const newScript = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./案例/clock/index.js'),newScript,err =>{
        if(err) return console.log(err.message)
        console.log('写入脚本成功！')
    })
}

//定义处理Html的方法
function resolveHtml(htmlStr){
    const a = htmlStr.toString()
    const newHtml = a.replace(regStyle,'<link rel="stylesheet" herf="./index.css"/>').replace(regScript,'<link rel="stylesheet" herf="./index.js"/>')

    fs.writeFile(path.join(__dirname,'./案例/clock/index.html'),newHtml,err =>{
        if(err) return console.log(err.message)
        console.log('写入脚本成功！')
    })

}


/* 4. 案例的两个注意点
tswiterile0 方法只能用来包建文件，不能用来创建路径
重调用 fs.writeFile0 写入同一个文件，新写入的内容会覆盖之前的1日内容 */