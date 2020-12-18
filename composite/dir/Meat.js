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
var CompositeRecipe_1 = require("./CompositeRecipe");
var Meat = /** @class */ (function (_super) {
    __extends(Meat, _super);
    function Meat(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    Meat.prototype.cook = function () {
        console.log("Type: Meat\nName:" + this.name + "\nIs cooked.\n");
    };
    return Meat;
}(CompositeRecipe_1["default"]));
exports["default"] = Meat;
