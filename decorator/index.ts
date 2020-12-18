import Food from "./Food";
import ShoutingFood from "./ShoutingFood";
import SmellingFood from "./SmellingFood";

let shoutingShoutingFood = new SmellingFood(
    new ShoutingFood(
        new Food("Cheese")
    )
);

shoutingShoutingFood.eat();

console.log("\n");

let justSmelly = new SmellingFood(new Food("Onions"));
justSmelly.eat();