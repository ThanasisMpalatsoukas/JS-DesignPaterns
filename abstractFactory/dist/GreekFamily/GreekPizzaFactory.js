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
var AbstractFactory_1 = require("../AbstractFactory");
var GreekPizza_1 = require("./GreekPizza");
var GreekHam_1 = require("./GreekHam");
var GreekPizzaFactory = /** @class */ (function (_super) {
    __extends(GreekPizzaFactory, _super);
    function GreekPizzaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreekPizzaFactory.prototype.createPizza = function () {
        return new GreekPizza_1["default"]();
    };
    GreekPizzaFactory.prototype.createHam = function () {
        return new GreekHam_1["default"]();
    };
    return GreekPizzaFactory;
}(AbstractFactory_1["default"]));
exports["default"] = GreekPizzaFactory;