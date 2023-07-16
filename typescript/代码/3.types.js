// object 表示一个JS对象
// 因为在JS中一切皆为对象，所以TS中一般不去声明一个变量为对象 
var a;
a = {};
a = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值, 属性名：属性值}
var b;
var c;
// b = {} 缺少属性 name 
b = { name: "sunwukong" };
c = { name: "123", age: 123 };
c = { name: "123" };
var d;
d = { name: "123", a: 1, b: 23 };
// [propName:string]: any 表示任意类型的属性
var e;
e = { name: "123", a: 123, b: 123 };
/*
    设置函数结构的类型声明：
        语法：(形参：类型，形参：类型...)=>返回值
    

*/
var f;
f = function (n1, n2) {
    return 10;
};
/**
 * 数组的声明类型方法:
 *      类型[]
 *      Array<类型>
 */
// string[] 表示字符串数组
var g;
g = ['a', 'b', 'c'];
// number[] 表示树值数组
var h;
h = [1, 2, 3];
var i;
i = [1, 2, 3];
/*
    元组就是固定长度的数组：
        语法：[类型,类型,类型]
*/
var j;
j = ['123', '456'];
/**
 * enum 枚举
 *
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var k;
k = {
    name: "sunwukong",
    gender: Gender.Male // 'male'
};
console.log(k.gender === Gender.Male);
