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
var EatableComponent_1 = require("./EatableComponent");
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Food.prototype.eat = function () {
        console.log("Eating: " + this.name);
    };
    return Food;
}(EatableComponent_1["default"]));
exports["default"] = Food;
