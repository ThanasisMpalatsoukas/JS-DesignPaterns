"use strict";
exports.__esModule = true;
var Cook = /** @class */ (function () {
    function Cook() {
    }
    Cook.prototype.prepareFood = function (food) {
        console.log("We are cooking: " + food.describe());
    };
    return Cook;
}());
exports["default"] = Cook;
