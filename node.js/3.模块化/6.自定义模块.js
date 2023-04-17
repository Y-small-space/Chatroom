//在一个自定义模块中，默认情況下，module.exports = {}
//向 module.exports 对象上接載 username 属性

const age = 19;

//向module.exports对象上挂载 username属性
module.exports.username = 'zs'
//向modul.exports 对象上挂载 sayHello()方法
module. exports. sayHello = function(){
    console.log("hello world")
}
module.exports.age = age
