"use strict";
exports.__esModule = true;
var Decorator = /** @class */ (function () {
    function Decorator(food) {
        this.food = food;
    }
    Decorator.prototype.eat = function () {
        this.food.eat();
    };
    return Decorator;
}());
exports["default"] = Decorator;
