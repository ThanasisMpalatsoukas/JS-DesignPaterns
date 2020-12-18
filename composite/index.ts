import Meat from "./Meat";
import Recipe from "./Recipe";
import Vegetable from "./Vegetable";

let pork = new Meat(0, "pork");
let lettuce = new Vegetable(1, "lettuce");
let porkNLettuceRecipe = new Recipe(2, "Pork and lettuce");

porkNLettuceRecipe.add(pork);
porkNLettuceRecipe.add(lettuce);
porkNLettuceRecipe.cook();

let echancedRecipe = new Recipe(3, "Pork, lettuce and chicken");
echancedRecipe.add(porkNLettuceRecipe);
echancedRecipe.add(new Meat(4, "Chicken"));
echancedRecipe.cook();