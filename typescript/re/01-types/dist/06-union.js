"use strict";
function printId(id) {
    console.log('Your ID is :' + id);
    // console.log(id.toUpprtCase())
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id);
    }
}
printId(200);
printId('20-');
