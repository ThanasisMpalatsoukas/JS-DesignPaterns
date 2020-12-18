"use strict";
exports.__esModule = true;
var UniquePizza = /** @class */ (function () {
    function UniquePizza() {
    }
    ;
    UniquePizza.getInstance = function () {
        if (!UniquePizza.instance) {
            UniquePizza.instance = new UniquePizza();
        }
        return UniquePizza.instance;
    };
    UniquePizza.prototype.setContents = function (contents) {
        this.contents = contents;
    };
    UniquePizza.prototype.describe = function () {
        console.log(this.contents);
    };
    return UniquePizza;
}());
exports["default"] = UniquePizza;
