import AbstractHam from "../AbstractHam";
import AbstractPizza from "../AbstractPizza";

export default class GreekPizza extends AbstractPizza {

    ham: AbstractHam;

    addHam(ham: AbstractHam) {
        console.log(`ADDED: ${ham.describe()}`);
        this.ham = ham;
    }

    getCost() {
        return this.ham.cost;
    }
}