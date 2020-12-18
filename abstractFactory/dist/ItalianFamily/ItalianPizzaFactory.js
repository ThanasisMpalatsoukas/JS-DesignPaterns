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
var ItalianPizza_1 = require("./ItalianPizza");
var ItalianHam_1 = require("./ItalianHam");
var ItalianPizzaFactory = /** @class */ (function (_super) {
    __extends(ItalianPizzaFactory, _super);
    function ItalianPizzaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalianPizzaFactory.prototype.createPizza = function () {
        return new ItalianPizza_1["default"]();
    };
    ItalianPizzaFactory.prototype.createHam = function () {
        return new ItalianHam_1["default"]();
    };
    return ItalianPizzaFactory;
}(AbstractFactory_1["default"]));
exports["default"] = ItalianPizzaFactory;
