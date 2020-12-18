import AbstractFood from "./AbstractFood";
import PreparationInterface from "./PreparationInterface";

export default class Bake implements PreparationInterface {
    prepareFood(food: AbstractFood) {
        console.log(`We are baking: ${food.describe()}`);
    }
}