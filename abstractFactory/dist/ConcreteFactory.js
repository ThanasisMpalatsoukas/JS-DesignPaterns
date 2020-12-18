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
var AbstractFactory_1 = require("./AbstractFactory");
var GreekPizza_1 = require("./GreekPizza");
var ConcreteFactory = /** @class */ (function (_super) {
    __extends(ConcreteFactory, _super);
    function ConcreteFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactory.prototype.createPizza = function () {
        return new GreekPizza_1["default"]();
    };
    return ConcreteFactory;
}(AbstractFactory_1["default"]));
exports["default"] = ConcreteFactory;
