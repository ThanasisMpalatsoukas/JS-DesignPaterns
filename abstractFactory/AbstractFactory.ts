import AbstractHam from "./AbstractHam";
import AbstractPizza from "./AbstractPizza";

/**
 * General abstract factory that dictates which abstract items
 * will be instantiated.
 */
export default abstract class AbstractFactory {
    abstract createPizza(): AbstractPizza;
    abstract createHam(): AbstractHam;
}