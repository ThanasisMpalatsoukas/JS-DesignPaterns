import Chef from "./Chef";
import AbstractChef from "./AbstractChef";

function cookPizza(chef: AbstractChef, type: string) {
    chef.createPizza(type);
    chef.cookPizza();
}

const chef = new Chef("Akis", "Petratzikis");
cookPizza(chef, "GREEK");
cookPizza(chef, "ITALIAN");
