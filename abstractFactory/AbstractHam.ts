/**
 * Abstract hame that will be a part of pizza.
 * It is an ingredient.
 */
export default abstract class AbstractHam {
    name: string = "Default ham";
    cost: number = 10;
    abstract describe(): void;
}