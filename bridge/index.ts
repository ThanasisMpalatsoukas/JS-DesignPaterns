import Bake from "./Bake";
import Cook from "./Cook";
import Pizza from "./Pizza";
import Soup from "./Soup";

let pizza: Pizza = new Pizza();
pizza.prepareFood(new Bake());

let soup: Soup = new Soup();
soup.prepareFood(new Cook());
