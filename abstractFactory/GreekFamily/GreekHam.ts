import AbstractHam from "../AbstractHam";

export default class GreekHam extends AbstractHam {
    name: string = "Greek ham";
    cost: number = 10;
    
    describe(): string {
        return this.name;
    }
}