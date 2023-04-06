// 在外界使用 require 导入一个自定义模块的时候，得到的成员，
// 就是那个模块中，通过module.exports指向的那个对象
const custom = require('./6.自定义模块')

console.log(custom)