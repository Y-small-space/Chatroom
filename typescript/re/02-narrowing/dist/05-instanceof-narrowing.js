"use strict";
function logVaLue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logVaLue(new Date());
logVaLue('HELLO');
