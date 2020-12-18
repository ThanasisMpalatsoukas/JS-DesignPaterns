import CompositeRecipe from "./CompositeRecipe";

export default class Meat extends CompositeRecipe {

    name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

    cook() {
        console.log(`Type: Meat\nName:${this.name}\nIs cooked.\n`);
    }
}