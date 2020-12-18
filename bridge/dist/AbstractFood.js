"use strict";
exports.__esModule = true;
var AbstractFood = /** @class */ (function () {
    function AbstractFood() {
        this.ingredients = [];
    }
    AbstractFood.prototype.describe = function () {
        return this.ingredients.join(',');
    };
    AbstractFood.prototype.prepareFood = function (preparation) {
        preparation.prepareFood(this);
    };
    return AbstractFood;
}());
exports["default"] = AbstractFood;
