import { Meal } from "./meal";
import { PIZZA_SIZE, DOUGH_TYPE } from "../data/types";
import { PIZZA_NAMES, pizzaReceipts } from "../data/receipts";
import { TOPPINGS } from "../data/prices";

export class Pizza extends Meal {
  constructor(
    public name: PIZZA_NAMES,
    public size: PIZZA_SIZE,
    public price: number = pizzaReceipts[name].prices[size],
    public toppings: string[] = pizzaReceipts[name].toppings,
    public dough: DOUGH_TYPE,
    public extraToppings: (keyof typeof TOPPINGS)[] = []
  ) {
    super(name, size);
  }

  calculatePrice(): number {
    let extraToppingsPrice = this.extraToppings.reduce(
      (total: number, topping: keyof typeof TOPPINGS) => {
        return total + (TOPPINGS[topping] || 0);
      },
      0
    );

    return this.price + extraToppingsPrice;
  }
}
