import Pizza from "./Pizza";
import Cookable from "./Cookable";

export default class CookableAdapter implements Cookable {

    adaptee: any;

    constructor(adaptee) {
        this.adaptee = adaptee;
    }

    cook() {
        if (this.adaptee instanceof Pizza) {
            this.adaptee.bake();
        }
    }
}