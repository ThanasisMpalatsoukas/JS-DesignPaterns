import AbstractHam from "./AbstractHam";

/**
 * Abstract pizza that dictates what concrete pizza
 * will be able to do. Right now we can addHam() and getCost().
 */
export default abstract class AbstractPizza {

    abstract ham: AbstractHam;

    abstract addHam(ham: AbstractHam): any;
    abstract getCost(): number;
}