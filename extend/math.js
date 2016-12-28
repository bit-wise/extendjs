Math.sum = function (arr) {
    'use strict';
    var sum = 0;
    if (typeof arr === "string") {
        return "its a string";
    }
    window.console.log(typeof arr);
    arr.map(function (m) {
        sum += Number(m);
    });
    return sum;
};