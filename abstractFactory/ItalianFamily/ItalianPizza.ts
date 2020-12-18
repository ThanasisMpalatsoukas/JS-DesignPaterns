import AbstractHam from "../AbstractHam";
import AbstractPizza from "../AbstractPizza";

/**
 * Extends the functionallity of abstract pizza so it can dictate the
 * way that italian pizza will control the addition of ham and getting the cost.
 */
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