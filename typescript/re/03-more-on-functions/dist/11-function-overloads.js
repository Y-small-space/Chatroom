"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(123456);
const d2 = makeDate(5, 6, 7);
// const d3 = makeDate(5, 9)
