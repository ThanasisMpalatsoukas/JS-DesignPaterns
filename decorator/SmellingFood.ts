import Decorator from "./Decorator";
import EatableComponent from "./EatableComponent";

export default class SmellingFood extends Decorator {
    constructor(food: EatableComponent) {
        super(food);
    }

    eat() {
        super.eat();
        this.smell();
    }

    smell() {
        console.log("This food smells really odd...");
    }
}