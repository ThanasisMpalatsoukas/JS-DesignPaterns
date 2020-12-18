import AbstractFactory from "../AbstractFactory";
import AbstractHam from "../AbstractHam";
import AbstractPizza from "../AbstractPizza";
import ItalianPizza from "./ItalianPizza";
import ItalianHam from "./ItalianHam";

/**
 * The client will only know of this factory type which has all the related
 * concrete classes that create teh ItalianFamily.
 */
export default class ItalianPizzaFactory extends AbstractFactory {
    createPizza(): AbstractPizza {
        return new ItalianPizza();
    }
    createHam(): AbstractHam {
        return new ItalianHam();
    }
}