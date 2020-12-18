import AbstractFood from "./AbstractFood";
import PreparationInterface from "./PreparationInterface";

export default class Cook implements PreparationInterface {
    prepareFood(food: AbstractFood) {
        console.log(`We are cooking: ${food.describe()}`);
    }
}