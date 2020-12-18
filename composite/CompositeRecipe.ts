export default abstract class CompositeRecipe {

    id: number;

    constructor(id: number) {
        this.id = id;
    }

    abstract cook();

    add(recipe: CompositeRecipe) {}
    remove(recipe: CompositeRecipe) {}
    getChild(id: number) {}
}