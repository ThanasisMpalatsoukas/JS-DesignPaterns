"use strict";
exports.__esModule = true;
var Oven = /** @class */ (function () {
    function Oven(temperature) {
        this.opened = false;
        this.temperature = temperature;
    }
    Oven.prototype.openOven = function () {
        this.opened = true;
    };
    Oven.prototype.closeOven = function () {
        this.opened = false;
    };
    Oven.prototype.cookFood = function (food) {
        food.cook();
    };
    return Oven;
}());
exports["default"] = Oven;
