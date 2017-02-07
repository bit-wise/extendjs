/*
    Return first n set of elements in an array
*/

Array.prototype.first = function (n) {
    'use strict';
    return this.slice(0, n || 1);
};