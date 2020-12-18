import EatableComponent from "./EatableComponent";

export default class Food extends EatableComponent {

    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    eat() {
        console.log(`Eating: ${this.name}`);
    }
}