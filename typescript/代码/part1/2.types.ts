// 声明
let b: string;

let a: String;

a = "123"
b = "23"

// 也可以直接使用字面量进行声明 
 
let c: 10;
c = 10; // 如果这样c只能赋值10

// 或者可以使用|连接多个类型

let d: 1|2;
d = 1;
d = 2;
// d = 3 报错

let e: Boolean|String;

e = true;
e = false;
e = "123";

// any表示任何类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时不建议使用any

let f : any;

f = 1;
f = false;
f = "jy";

// 声明变量时如果不指定类型，编译器会自动判断变量为any

let g;

g = 10;
g = "123";
g = false;

// unknown 表示未知类型的值
let h: unknown;
h = true;
h = "123";
h = 123;

// f的类型是any，可以被赋值给任意变量不会报错
let i : string;

h = "hello";

// unknown 实际上就是一个类型安全的的any
// unknoww 不可以直接赋值给其他变量
if(typeof h === "string"){
    i = h;
}

// 类型断言
/*
语法：
    变量 as 类型
    <类型>变量
*/

i = h as string;
i = <string>h;
 
// 指定函数返回值类型
function fn() : Number{
    return 123
}
// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn1() : void{
}  
// never 表示永远不会返回结果
function fn2() : never{
    throw new Error('报错了！')
}
 