/*
    Return last n set of elements in an array
*/

Array.prototype.last = function (n) {
    'use strict';
    return this.slice(this.length - (n || 1), this.length);
};