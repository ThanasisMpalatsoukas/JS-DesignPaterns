import AbstractFactory from "../AbstractFactory";
import AbstractHam from "../AbstractHam";
import AbstractPizza from "../AbstractPizza";
import GreekPizza from "./GreekPizza";
import GreekHam from "./GreekHam";

export default class GreekPizzaFactory extends AbstractFactory {
    createPizza(): AbstractPizza {
        return new GreekPizza();
    }
    createHam(): AbstractHam {
        return new GreekHam();
    }
}