"use strict";
exports.__esModule = true;
var GreekPizzaFactory_1 = require("./GreekFamily/GreekPizzaFactory");
var ItalianPizzaFactory_1 = require("./ItalianFamily/ItalianPizzaFactory");
function createAPizza(factory) {
    console.log("PIZZA CREATION INITIALIZED...");
    var pizza = factory.createPizza();
    var ham = factory.createHam();
    pizza.addHam(ham);
    console.log("TOTAL COST: " + pizza.getCost());
    console.log("PIZZA HAS BEEN CREATED!\n");
}
createAPizza(new GreekPizzaFactory_1["default"]);
createAPizza(new ItalianPizzaFactory_1["default"]);
