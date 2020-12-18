"use strict";
exports.__esModule = true;
var CompositeRecipe = /** @class */ (function () {
    function CompositeRecipe(id) {
        this.id = id;
    }
    CompositeRecipe.prototype.add = function (recipe) { };
    CompositeRecipe.prototype.remove = function (recipe) { };
    CompositeRecipe.prototype.getChild = function (id) { };
    return CompositeRecipe;
}());
exports["default"] = CompositeRecipe;
