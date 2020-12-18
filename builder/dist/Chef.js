"use strict";
exports.__esModule = true;
var Chef = /** @class */ (function () {
    function Chef(name, surname) {
        this.orders = [];
        this.name = name;
        this.surname = surname;
    }
    Chef.prototype.addPizzaToOrders = function (builder) {
        builder.buildBase();
        builder.buildBox();
        builder.buildToppings();
        this.orders.push(builder.getPizza());
    };
    Chef.prototype.describeOrder = function () {
        var totalCost = 0;
        this.orders.map(function (order) {
            console.log("Cost: " + order.cost);
            console.log("Ingredients: " + order.ingredients.join(",") + "\n");
            totalCost += order.cost;
        });
        console.log("Total cost: " + totalCost);
    };
    return Chef;
}());
exports["default"] = Chef;
