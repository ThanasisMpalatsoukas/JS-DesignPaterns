"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractPizzaBuilder_1 = require("./AbstractPizzaBuilder");
var Pizza_1 = require("./Pizza");
var GreekPizzaBuilder = /** @class */ (function (_super) {
    __extends(GreekPizzaBuilder, _super);
    function GreekPizzaBuilder() {
        var _this = _super.call(this) || this;
        _this.pizza = new Pizza_1["default"]();
        return _this;
    }
    GreekPizzaBuilder.prototype.buildBase = function () {
        this.pizza.ingredients.push("Crusty bottom");
        this.pizza.ingredients.push("tomato");
        this.pizza.cost += 10;
    };
    GreekPizzaBuilder.prototype.buildBox = function () {
        this.pizza.isBoxed = true;
    };
    GreekPizzaBuilder.prototype.buildToppings = function () {
        this.pizza.ingredients.push("gyros");
        this.pizza.ingredients.push("tzatziki");
        this.pizza.cost += 5;
    };
    GreekPizzaBuilder.prototype.getPizza = function () {
        return this.pizza;
    };
    return GreekPizzaBuilder;
}(AbstractPizzaBuilder_1["default"]));
exports["default"] = GreekPizzaBuilder;
