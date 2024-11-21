import { IMeal, PIZZA_SIZE } from "../data/types";
import { PIZZA_NAMES, pizzaReceipts } from "../data/receipts";
import { ERROR_MESSAGES } from "../data/messages";

export abstract class Meal implements IMeal {
  protected price: number;
  constructor(public name: PIZZA_NAMES, public size: PIZZA_SIZE) {
    const pizza = pizzaReceipts[name as keyof typeof pizzaReceipts];
    if (!pizza) {
      throw new Error(`Pizza with name ${name} ${ERROR_MESSAGES.DIDNTFIND}`);
    }
    this.price = pizza.prices[size];
    if (this.price === undefined) {
      throw new Error(
        `Pizza ${name} with size ${size} ${ERROR_MESSAGES.DONOTEXIST}`
      );
    }
  }

  protected abstract calculatePrice(): number;
  getPrice(): number {
    return this.calculatePrice();
  }
}
