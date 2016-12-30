// FACTORIAL
Math.fact = function (num) {
    'use strict';
    num = Number(num);
    var prod = num;
    while (num > 1) {
        num -= 1;
        prod = prod * num;
    }
    return prod;
};