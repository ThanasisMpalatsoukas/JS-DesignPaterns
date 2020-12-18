import AbstractFactory from "../AbstractFactory";
import AbstractHam from "../AbstractHam";
import AbstractPizza from "../AbstractPizza";
import ItalianPizza from "./ItalianPizza";
import ItalianHam from "./ItalianHam";

export default class ItalianPizzaFactory extends AbstractFactory {
    createPizza(): AbstractPizza {
        return new ItalianPizza();
    }
    createHam(): AbstractHam {
        return new ItalianHam();
    }
}