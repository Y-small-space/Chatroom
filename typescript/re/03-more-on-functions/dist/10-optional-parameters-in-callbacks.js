"use strict";
// 当你为回调写一个函数类型是，永远不要写一个可选参数，除非你打算在不传递该参数的情况下调用函数。
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
