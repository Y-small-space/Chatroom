"use strict";
function multiply(n, ...m) {
    return m.map(x => n * x);
}
const a = multiply(10, 1, 2, 3, 4, 5, 6);
console.log(a);
