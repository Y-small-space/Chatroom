"use strict";
let x = undefined;
let y = null;
// let z:string = undefined
function doSomething(x) {
    if (x === null) {
        // 做一些事情
    }
    else {
        console.log('Hello,' + x.toLowerCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
