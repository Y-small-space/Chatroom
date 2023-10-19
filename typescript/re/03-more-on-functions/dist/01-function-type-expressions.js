"use strict";
function greeter(fn) {
    fn('hello');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
