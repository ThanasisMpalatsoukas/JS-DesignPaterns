import AbstractPizza from "./AbstractPizza";

export default class GreekPizza extends AbstractPizza {
    cook() {
        console.log("GREEK PIZZA COOKED!");
    }
}