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
var AbstractPizza_1 = require("./AbstractPizza");
var ItalianPizza = /** @class */ (function (_super) {
    __extends(ItalianPizza, _super);
    function ItalianPizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalianPizza.prototype.cook = function () {
        console.log("ITALIAN PIZZA COOKED!");
    };
    return ItalianPizza;
}(AbstractPizza_1["default"]));
exports["default"] = ItalianPizza;
