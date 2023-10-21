"use strict";
// function paintShape(opts: PaintOptions) {
//     let xPos = opts.xPos === undefined ? 0 : opts.xPos
//     let yPos = opts.yPos === undefined ? 0 : opts.yPos
//     console.log(xPos)
// }
function paintShape({ shape, xPos = 0, yPos = 0 }) {
    // let xPos = opts.xPos === undefined ? 0 : opts.xPos
    // let yPos = opts.yPos === undefined ? 0 : opts.yPos
    console.log(xPos);
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
