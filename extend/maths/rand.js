// Random Number Generator
window.ExtJS.gv.maths.rand = {
    n: new Date().getTime()
};
Math.rand = function () {
    'use strict';
    var n1 = window.ExtJS.gv.maths.rand.n % 1e5,
        n2 = Math.sqrt(n1) % 1,
        n = n2 * 1e7;
    window.ExtJS.gv.maths.rand.n = n;
    return n2;
};