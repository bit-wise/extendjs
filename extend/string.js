String.prototype.capitalize = function () {
    'use strict';
    return this.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};