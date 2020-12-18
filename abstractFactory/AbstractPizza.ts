import AbstractHam from "./AbstractHam";

export default abstract class AbstractPizza {

    abstract ham: AbstractHam;

    abstract addHam(ham: AbstractHam): any;
    abstract getCost(): number;
}