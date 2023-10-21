"use strict";
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
const v1 = f1();
const v2 = f2();
const v3 = f3();
// 错的
// function f4():void{
//     return true
// }
// const f5 = function():void{
//     return true
// }
