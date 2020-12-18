import AbstractPizzaBuilder from "./AbstractPizzaBuilder";
import Pizza from "./Pizza";

export default class Chef {

    name: string;
    surname: string;
    orders: Pizza[] = [];

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    addPizzaToOrders(builder: AbstractPizzaBuilder) {
        builder.buildBase();
        builder.buildBox();
        builder.buildToppings();
        this.orders.push( builder.getPizza() );
    }

    describeOrder() {
        let totalCost = 0;
        this.orders.map( order => {
            console.log(`Cost: ${order.cost}`);
            console.log(`Ingredients: ${order.ingredients.join(",")}\n`);
            totalCost += order.cost;
        });

        console.log(`Total cost: ${totalCost}`)
    }
}