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
var ItalianPizzaBuilder = /** @class */ (function (_super) {
    __extends(ItalianPizzaBuilder, _super);
    function ItalianPizzaBuilder() {
        var _this = _super.call(this) || this;
        _this.pizza = new Pizza_1["default"]();
        return _this;
    }
    ItalianPizzaBuilder.prototype.buildBase = function () {
        this.pizza.ingredients.push("Crusty italian bottom");
        this.pizza.ingredients.push("tomato");
        this.pizza.ingredients.push("parmezana");
        this.pizza.cost += 15;
    };
    ItalianPizzaBuilder.prototype.buildBox = function () {
        // no box required.
    };
    ItalianPizzaBuilder.prototype.buildToppings = function () {
        this.pizza.ingredients.push("mushrooms");
        this.pizza.ingredients.push("ham");
        this.pizza.cost += 10;
    };
    ItalianPizzaBuilder.prototype.getPizza = function () {
        return this.pizza;
    };
    return ItalianPizzaBuilder;
}(AbstractPizzaBuilder_1["default"]));
exports["default"] = ItalianPizzaBuilder;
