"use strict";
exports.__esModule = true;
var Pizza_1 = require("./Pizza");
var CookableAdapter = /** @class */ (function () {
    function CookableAdapter(adaptee) {
        this.adaptee = adaptee;
    }
    CookableAdapter.prototype.cook = function () {
        if (this.adaptee instanceof Pizza_1["default"]) {
            this.adaptee.bake();
        }
    };
    return CookableAdapter;
}());
exports["default"] = CookableAdapter;
