import PreparationInterface from "./PreparationInterface";

export default abstract class AbstractFood {
    ingredients: string[] = [];
    preparation: PreparationInterface;

    describe(): string {
        return this.ingredients.join(',');
    }

    prepareFood(preparation: PreparationInterface) {
        preparation.prepareFood(this);
    }
}