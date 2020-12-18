import AbstractHam from "./AbstractHam";
import AbstractPizza from "./AbstractPizza";

export default abstract class AbstractFactory {
    abstract createPizza(): AbstractPizza;
    abstract createHam(): AbstractHam;
}