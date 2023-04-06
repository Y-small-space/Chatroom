//引入fs模块
const fs = require("fs");

function readClass(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./resource/班.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            //如果成功
            resolve(data);
        });
    })
}

function readAge(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./resource/年龄.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            //如果成功
            resolve(data);
        });
    })
}

function readName(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./resource/姓名.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            //如果成功
            resolve(data);
        });
    })
}

async function main(){
    //获取班级数据
    let Class = await readClass();
    //获取年龄数据
    let Age = await readAge();
    //获取姓名数据
    let Name = await readName();

    console.log(Class.toString());
    console.log(Age.toString());
    console.log(Name.toString());
}

main();
  