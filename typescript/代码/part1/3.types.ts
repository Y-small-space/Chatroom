// object 表示一个JS对象
// 因为在JS中一切皆为对象，所以TS中一般不去声明一个变量为对象 
let a : object;
a = {}
a = function(){}


// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值, 属性名：属性值}
let b : {name:string}
let c : {name:string,age?:number}

// b = {} 缺少属性 name 
b = {name:"sunwukong"}

c = {name:"123",age:123}
c = {name:"123"}

let d : {name:string, a?:number, b?:number}
d = {name:"123",a:1,b:23}

// [propName:string]: any 表示任意类型的属性
let e : {name:string, [propName : string]: any}
e = {name:"123", a:123, b:123}

/* 
    设置函数结构的类型声明：
        语法：(形参：类型，形参：类型...)=>返回值
    

*/

let f : (a:number,b:number)=>number; 
f = function(n1:number,n2:number){
    return 10;
}

/**
 * 数组的声明类型方法:
 *      类型[] 
 *      Array<类型>
 */

// string[] 表示字符串数组
let g : string[];
g = ['a', 'b', 'c']

// number[] 表示树值数组
let h : number[];
h = [1,2,3]

let i : Array<number>
i = [1,2,3]

/*
    元组就是固定长度的数组：
        语法：[类型,类型,类型]
*/ 
let j :  [string,string]
j = ['123', '456']

/**
 * enum 枚举
 * 
 */

enum Gender{
    Male = 0,
    Female = 1 
}

let k : {name:string, gender:Gender}
k = {
    name:"sunwukong",
    gender: Gender.Male // 'male'
}

console.log(k.gender === Gender.Male)

// &表示同时
let l: {name:string}&{age:number}
l = {name:"123",age:123}

// 类型别名
type myType = 1|2|3|4|5
let m : myType
