/* 
什么是模块化？
    编桯领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。

把代码进行模块化拆分的好处：
    ① 提高了代码的复用性
    ② 提高了代码的可维护性
    ③ 可以实现按需加载 

Node.js 中模块的分类：
    Nodejs中根据模块来源的不同，将模块分为了3大类，分别是：
    •内置模块(内置模块是由Node.js官方提供的，例如fs、path、http等）
    •自定义模块（用户创建的每个.js 文件，都是自定义模块）
    •第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，
    也不是用户创建的自定义模块，使用前需要先下载）

加载内置的fs模快
    const fs = require('fs')
加载用户的自定义模块
    const custom = require(' ./custom. js')
加载第三方模块
    const moment = require( 'moment')
注意：使用 require（） 方法加载其它模块时，会执行被加载模块中的代码。

*/
//const m1 = require('../fs文件系统模块/1.使用readFile方法来调用文件的内容.js')
const m1 = require('../fs文件系统模块/1.使用readFile方法来调用文件的内容')
console.log(m1)
/*
    什么是模块作用域：
        和函数作用域类似，在白定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块
    作用域。
*/

/*
    Node.js中的模块作用域:
        什么是模块作用域:
            和函数作用域类似，在自定义模块中定义的变量，方法等成员，
            只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。

        优点：
            防止了全局变量污染的问题
        
        如何向外共享模块作用域中的成员:
            1. module 对象：
                在每个js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
            2. module.exports对象：
                在自定义模块中，可以使用 module.exports对象，将模块内的成员共亨出去，供外界使用。
                外界用require()方法导入自定义模块时，得到的就是module.exports 所指向的对象。
            3.注意：
                使用 require()方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。
            4.4. exports 対象
                由于 module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，
                Node 提供了exports 对象。
                默认情况下，exports 和module.exports 指向同一个对象。
                最終共享的结果，还是以 module.exports 指向的对象为准。

*/

/* 
Node.js 中的模块化规范:
Node.js 遵循了 CommonJS 模块化规范，CommonJS规定了模块的特性和各模块之间如何相互依赖。 

        CommonJS規定：
            ① 每个模块内部，module变量代表当前模块。
            ② module 变量是一个对象，它的exports 属性 （即module.exports)是对外的接口。
            ③ 加载某个模块，其实是加载该模块的 module.exports 属性。require()方法用于加载模块。
*/