import Chef from "./Chef";
import GreekPizzaBuilder from "./GreekPizzaBuilder";
import ItalianPizzaBuilder from "./ItalianPizzaBuilder";
let chef = new Chef("Akis", "Petratzikis");

chef.addPizzaToOrders(new GreekPizzaBuilder());
chef.addPizzaToOrders(new ItalianPizzaBuilder());
chef.addPizzaToOrders(new GreekPizzaBuilder());
chef.addPizzaToOrders(new ItalianPizzaBuilder());

chef.describeOrder();