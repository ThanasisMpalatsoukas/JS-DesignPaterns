import Cookable from "./Cookable";

export default class Vegetables implements Cookable {
    cook() {
        console.log("COOKING VEGETABLES");
    }
}