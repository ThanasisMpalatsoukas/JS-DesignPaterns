import CompositeRecipe from "./CompositeRecipe";

export default class Recipe extends CompositeRecipe {

    ingredients: CompositeRecipe[] = [];
    name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

    cook() {
        console.log("=====");
        console.log(`Cooking ${this.name}`);
        this.ingredients.map( ingredient => {
            ingredient.cook();
        });
        console.log("=====\n");
    }

    add(ingredient: CompositeRecipe) {
        this.ingredients.push(ingredient);
    }

    remove(ingredient: CompositeRecipe) {
        let indexToRemove = this.getChild(ingredient.id);
        this.ingredients.splice(indexToRemove, 1);
    }

    getChild(id: number) {
        for (let i=0;i<this.ingredients.length;i++) {
            if (this.ingredients[i].id === id)
                return i;
                break;
        }
    }
}