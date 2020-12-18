import Cookable from "./Cookable";

export default class Oven {

    temperature: number;
    opened: boolean = false;

    constructor(temperature: number) {
        this.temperature = temperature;
    }

    openOven() {
        this.opened = true;
    }

    closeOven() {
        this.opened = false;
    }

    cookFood(food: Cookable) {
        food.cook();
    }
}