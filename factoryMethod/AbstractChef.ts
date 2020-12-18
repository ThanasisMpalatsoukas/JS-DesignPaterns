import AbstractPizza from "./AbstractPizza";

export default abstract class AbstractChef {

    name: string;
    surname: string; 
    pizza: AbstractPizza;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    cookPizza() {
        this.pizza.cook();
    }

    abstract createPizza(type: string);
}