/*
    Capitalize the first letter of words
*/

String.prototype.capitalize = function () {
    'use strict';
    return this.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};