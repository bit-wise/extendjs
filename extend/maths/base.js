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