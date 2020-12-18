import Decorator from "./Decorator";
import EatableComponent from "./EatableComponent";

export default class ShoutingFood extends Decorator {
    constructor(food: EatableComponent) {
        super(food);
    }

    eat() {
        super.eat();
        this.shout();
    }

    shout() {
        console.log("What?! Why does this shout!");
    }
}