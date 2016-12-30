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