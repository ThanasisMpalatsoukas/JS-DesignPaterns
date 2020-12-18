import AbstractHam from "../AbstractHam";

export default class ItalianHam extends AbstractHam {
    name: string = "Italian ham";
    cost: number = 20;
    describe(): string {
        return this.name;
    }
}