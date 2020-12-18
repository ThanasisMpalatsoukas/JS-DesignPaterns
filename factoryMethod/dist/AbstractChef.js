"use strict";
exports.__esModule = true;
var AbstractChef = /** @class */ (function () {
    function AbstractChef(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    AbstractChef.prototype.cookPizza = function () {
        this.pizza.cook();
    };
    return AbstractChef;
}());
exports["default"] = AbstractChef;
