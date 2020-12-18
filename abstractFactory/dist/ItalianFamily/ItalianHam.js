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
var AbstractHam_1 = require("../AbstractHam");
var ItalianHam = /** @class */ (function (_super) {
    __extends(ItalianHam, _super);
    function ItalianHam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Italian ham";
        _this.cost = 20;
        return _this;
    }
    ItalianHam.prototype.describe = function () {
        return this.name;
    };
    return ItalianHam;
}(AbstractHam_1["default"]));
exports["default"] = ItalianHam;
