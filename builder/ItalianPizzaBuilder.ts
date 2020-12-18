import AbstractPizzaBuilder from "./AbstractPizzaBuilder";
import Pizza from "./Pizza";

export default class ItalianPizzaBuilder extends AbstractPizzaBuilder {

    pizza: Pizza;

    constructor() {
        super();
        this.pizza = new Pizza();
    }

    buildBase() {
        this.pizza.ingredients.push("Crusty italian bottom");
        this.pizza.ingredients.push("tomato");
        this.pizza.ingredients.push("parmezana");
        this.pizza.cost += 15;
    }

    buildBox() {
        // no box required.
    }

    buildToppings() {
        this.pizza.ingredients.push("mushrooms");
        this.pizza.ingredients.push("ham");
        this.pizza.cost += 10;
    }

    getPizza() {
        return this.pizza;
    }
}