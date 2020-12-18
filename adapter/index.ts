import Pizza from "./Pizza";
import CookableAdapter from "./CookableAdapter";
import Oven from "./Oven";
import Vegetables from "./Vegetables";

const oven: Oven = new Oven(200);
oven.openOven();

oven.cookFood(new Vegetables());
oven.cookFood(new CookableAdapter(new Pizza()));