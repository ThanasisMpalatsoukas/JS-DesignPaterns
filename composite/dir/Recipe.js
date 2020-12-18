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
var Recipe = /** @class */ (function (_super) {
    __extends(Recipe, _super);
    function Recipe(id, name) {
        var _this = _super.call(this, id) || this;
        _this.ingredients = [];
        _this.name = name;
        return _this;
    }
    Recipe.prototype.cook = function () {
        console.log("=====");
        console.log("Cooking " + this.name);
        this.ingredients.map(function (ingredient) {
            ingredient.cook();
        });
        console.log("=====\n");
    };
    Recipe.prototype.add = function (ingredient) {
        this.ingredients.push(ingredient);
    };
    Recipe.prototype.remove = function (ingredient) {
        var indexToRemove = this.getChild(ingredient.id);
        this.ingredients.splice(indexToRemove, 1);
    };
    Recipe.prototype.getChild = function (id) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].id === id)
                return i;
            break;
        }
    };
    return Recipe;
}(CompositeRecipe_1["default"]));
exports["default"] = Recipe;
