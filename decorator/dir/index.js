"use strict";
exports.__esModule = true;
var Food_1 = require("./Food");
var ShoutingFood_1 = require("./ShoutingFood");
var SmellingFood_1 = require("./SmellingFood");
var shoutingShoutingFood = new SmellingFood_1["default"](new ShoutingFood_1["default"](new Food_1["default"]("Cheese")));
shoutingShoutingFood.eat();
console.log("\n");
var justSmelly = new SmellingFood_1["default"](new Food_1["default"]("Onions"));
justSmelly.eat();
