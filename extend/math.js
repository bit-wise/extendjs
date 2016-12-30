// PHI
Math.PHI = (1 + Math.sqrt(5)) / 2;
Math.phi = function (num) {
    'use strict';
    var arr = {
        n: {},
        r: {}
    };
    num = Number(num);
    arr.n.up = num * Math.PHI;
    arr.n.down = num / Math.PHI;
    arr.r.up = Math.round(arr.n.up);
    arr.r.down = Math.round(arr.n.down);
    return arr;
};

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

// BASE
Math.base = function (value, from_base, to_base) {
    'use strict';
    var range = ('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'),
        from_range,
        to_range,
        dec_value,
        new_value = '';
    range = range.split('');
    from_range = range.slice(0, from_base);
    to_range = range.slice(0, to_base);
    dec_value = value.toString().split('').reverse().reduce(function (carry, digit, index) {
        if (from_range.indexOf(digit) === -1) {
            throw new Error('Invalid digit `' + digit + '` for base ' + from_base + '.');
        }
        carry = carry + from_range.indexOf(digit) * (Math.pow(from_base, index));
        return carry;
    }, 0);

    while (dec_value > 0) {
        new_value = to_range[dec_value % to_base] + new_value;
        dec_value = (dec_value - (dec_value % to_base)) / to_base;
    }
    return new_value || '0';
};

// GRAVITY
Math.G = {
    m: 9.80665,
    ft: 32.1740
};

// FORCE
Math.force = function (mass, acc) {
    'use strict';
    return mass / acc;
};

// INFINITE SUM (1+2+3+...∞)
Math.ISUM = -1 / 12;

// TAXICAB
Math.TAXICAB = 1729;