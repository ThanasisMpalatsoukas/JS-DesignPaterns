import EatableComponent from "./EatableComponent";

export default class Decorator {

    food: EatableComponent;

    constructor(food: EatableComponent) {
        this.food = food;
    }
    
    eat() {
        this.food.eat();
    }
}