import AbstractPizza from "./AbstractPizza";

export default class ItalianPizza extends AbstractPizza {
    cook() {
        console.log("ITALIAN PIZZA COOKED!");
    }
}