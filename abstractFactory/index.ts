import AbstractFactory from "./AbstractFactory";
import AbstractPizza from "./AbstractPizza";
import GreekPizzaFactory from "./GreekFamily/GreekPizzaFactory";
import AbstractHam from "./AbstractHam";
import ItalianPizzaFactory from "./ItalianFamily/ItalianPizzaFactory";

function createAPizza(factory: AbstractFactory) {
    console.log("PIZZA CREATION INITIALIZED...");
    const pizza: AbstractPizza = factory.createPizza();
    const ham: AbstractHam = factory.createHam();
    pizza.addHam(ham);
    console.log(`TOTAL COST: ${pizza.getCost()}`)
    console.log("PIZZA HAS BEEN CREATED!\n");
}

createAPizza(new GreekPizzaFactory);
createAPizza(new ItalianPizzaFactory);