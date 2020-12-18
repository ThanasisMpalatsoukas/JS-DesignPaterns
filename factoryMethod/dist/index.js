"use strict";
exports.__esModule = true;
var Chef_1 = require("./Chef");
function cookPizza(chef, type) {
    chef.createPizza(type);
    chef.cookPizza();
}
var chef = new Chef_1["default"]("Akis", "Petratzikis");
cookPizza(chef, "GREEK");
cookPizza(chef, "ITALIAN");
