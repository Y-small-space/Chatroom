"use strict";
// class Base{
//     private x = 0
//     printX(){
//         console.log(this.x)
//     }
// }
// class Derived extends Base{
//     showX(){
//         console.log(this.x)
//     }
// }
// const d = new Derived()
// console.log(d.x)
class A {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        return other.x === this.x;
    }
}
