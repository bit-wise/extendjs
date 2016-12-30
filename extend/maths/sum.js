// SUM
Math.sum = function (arr, inc) {
    'use strict';
    var sum = 0,
        placeholder,
        placeholder_high,
        placeholder_low,
        i = 1e+8;
    inc = Number(inc) || 1;
    if (typeof arr === "string" && arr.match(/\.\./g)) {
        placeholder = arr.split('..');
        placeholder_low = Number(placeholder[0]);
        placeholder_high = Number(placeholder[1]);
        while (placeholder_low <= placeholder_high) {
            sum = sum + placeholder_low;
            placeholder_low -= -inc;
            i -= 1;
            if (i < 0) {
                window.console.log('timeout');
                return sum;
            }
        }
    } else if (typeof arr === "string") {
        sum = Number(arr);
    } else {
        arr.map(function (m) {
            sum += Number(m);
        });
    }
    return sum;
};