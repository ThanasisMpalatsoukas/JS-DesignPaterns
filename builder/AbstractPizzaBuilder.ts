import Pizza from "./Pizza";

export default abstract class AbstractPizzaBuilder {

    pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    abstract buildBase(): void;
    abstract buildToppings(): void;
    abstract buildBox(): void;
    abstract getPizza(): Pizza;
}