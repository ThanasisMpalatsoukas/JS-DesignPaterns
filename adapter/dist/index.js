"use strict";
exports.__esModule = true;
var Pizza_1 = require("./Pizza");
var CookableAdapter_1 = require("./CookableAdapter");
var Oven_1 = require("./Oven");
var Vegetables_1 = require("./Vegetables");
var oven = new Oven_1["default"](200);
oven.openOven();
oven.cookFood(new Vegetables_1["default"]());
oven.cookFood(new CookableAdapter_1["default"](new Pizza_1["default"]()));
