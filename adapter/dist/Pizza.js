"use strict";
exports.__esModule = true;
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.prepare = function () {
        console.log("MAKING THE BASICS");
    };
    Pizza.prototype.addTopping = function () {
        console.log("DELICIOUS TOPPING");
    };
    Pizza.prototype.bake = function () {
        console.log("BAKING THE PIZZA");
    };
    return Pizza;
}());
exports["default"] = Pizza;
