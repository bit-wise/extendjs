Math.sum = function (arr) {
    'use strict';
    var sum = 0,
        placeholder,
        placeholder_high,
        placeholder_low;
    if (typeof arr === "string" && arr.match(/\.\./g)) {
        placeholder = arr.split('..');
        placeholder_high = placeholder[1];
        placeholder_low = placeholder[0];
        while (placeholder_high >= placeholder_low) {
            sum += Number(placeholder_high);
            placeholder_high -= 1;
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