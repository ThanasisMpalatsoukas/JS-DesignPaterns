import AbstractChef from "./AbstractChef";
import GreekPizza from "./GreekPizza";
import ItalianPizza from "./ItalianPizza";

export default class Chef extends AbstractChef {

    createPizza(type: string) {
        if (type === "GREEK") {
            this.pizza = new GreekPizza();
        } else if (type === "ITALIAN") {
            this.pizza = new ItalianPizza();
        }
    }
} 