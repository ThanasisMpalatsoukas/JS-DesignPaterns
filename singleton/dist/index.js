"use strict";
exports.__esModule = true;
var UniquePizza_1 = require("./UniquePizza");
var aPizza = UniquePizza_1["default"].getInstance();
aPizza.contents = "ContentsA";
aPizza.describe();
var theSamePizza = UniquePizza_1["default"].getInstance();
theSamePizza.contents = "ContentsB";
aPizza.describe();
