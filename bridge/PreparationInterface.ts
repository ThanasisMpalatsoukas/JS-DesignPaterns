import AbstractFood from "./AbstractFood";

export default interface PreparationInterface {
    prepareFood(food: AbstractFood): void;
}