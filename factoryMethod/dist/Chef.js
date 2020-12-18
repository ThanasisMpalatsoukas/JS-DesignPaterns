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
var AbstractChef_1 = require("./AbstractChef");
var GreekPizza_1 = require("./GreekPizza");
var ItalianPizza_1 = require("./ItalianPizza");
var Chef = /** @class */ (function (_super) {
    __extends(Chef, _super);
    function Chef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chef.prototype.createPizza = function (type) {
        if (type === "GREEK") {
            this.pizza = new GreekPizza_1["default"]();
        }
        else if (type === "ITALIAN") {
            this.pizza = new ItalianPizza_1["default"]();
        }
    };
    return Chef;
}(AbstractChef_1["default"]));
exports["default"] = Chef;
