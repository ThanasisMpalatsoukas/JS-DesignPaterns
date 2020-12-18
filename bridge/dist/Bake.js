"use strict";
exports.__esModule = true;
var Bake = /** @class */ (function () {
    function Bake() {
    }
    Bake.prototype.prepareFood = function (food) {
        console.log("We are baking: " + food.describe());
    };
    return Bake;
}());
exports["default"] = Bake;
