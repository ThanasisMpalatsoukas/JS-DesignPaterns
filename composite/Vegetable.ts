import CompositeRecipe from "./CompositeRecipe";

export default class Vegetable extends CompositeRecipe {

    name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

    cook() {
        console.log(`Type: Vegetable\nName:${this.name}\nIs cooked.\n`);
    }
}