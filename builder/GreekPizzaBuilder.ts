import AbstractPizzaBuilder from "./AbstractPizzaBuilder";
import Pizza from "./Pizza";

export default class GreekPizzaBuilder extends AbstractPizzaBuilder {

    pizza: Pizza;

    constructor() {
        super();
        this.pizza = new Pizza();
    }

    buildBase() {
        this.pizza.ingredients.push("Crusty bottom");
        this.pizza.ingredients.push("tomato");
        this.pizza.cost += 10;
    }

    buildBox() {
        this.pizza.isBoxed = true;
    }

    buildToppings() {
        this.pizza.ingredients.push("gyros");
        this.pizza.ingredients.push("tzatziki");
        this.pizza.cost += 5;
    }

    getPizza() {
        return this.pizza;
    }
}