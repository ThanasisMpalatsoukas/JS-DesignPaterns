import AbstractHam from "../AbstractHam";
import AbstractPizza from "../AbstractPizza";

export default class ItalianPizza extends AbstractPizza {
    
    ham: AbstractHam;

    addHam(ham: AbstractHam) {
        console.log(`ADDED: ${ham.describe()}`);
        this.ham = ham;
    }
    getCost() {
        return this.ham.cost;
    }
}