export default abstract class AbstractHam {
    name: string = "Default ham";
    cost: number = 10;
    abstract describe(): void;
}