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
var GreekHam = /** @class */ (function (_super) {
    __extends(GreekHam, _super);
    function GreekHam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Greek ham";
        _this.cost = 10;
        return _this;
    }
    GreekHam.prototype.describe = function () {
        return this.name;
    };
    return GreekHam;
}(AbstractHam_1["default"]));
exports["default"] = GreekHam;
