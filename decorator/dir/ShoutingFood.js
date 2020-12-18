"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Decorator_1 = require("./Decorator");
var ShoutingFood = /** @class */ (function (_super) {
    __extends(ShoutingFood, _super);
    function ShoutingFood(food) {
        return _super.call(this, food) || this;
    }
    ShoutingFood.prototype.eat = function () {
        _super.prototype.eat.call(this);
        this.shout();
    };
    ShoutingFood.prototype.shout = function () {
        console.log("What?! Why does this shout!");
    };
    return ShoutingFood;
}(Decorator_1["default"]));
exports["default"] = ShoutingFood;
