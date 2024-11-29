import { PIZZA_SIZE, DOUGH_TYPE, IMeal } from "../data/types";
import {PIZZA_NAMES, pizzaReceipts} from "../data/receipts";
import {TOPPINGS} from "../data/prices";
import { Pizza } from '../meal/pizza';
import {ERROR_MESSAGES} from '../data/messages';


export class Order {
  constructor(public orderId: number, 
    public numberOfMeal: IMeal[] = []) {
    
  }

 addPizza(
    name: PIZZA_NAMES, 
    size: PIZZA_SIZE,
    price:  number = pizzaReceipts[name].prices[size],
    toppings: string[] = pizzaReceipts[name].toppings, 
    dough: DOUGH_TYPE, 
    extraToppings: (keyof typeof TOPPINGS)[] = [])
  {
    const pizza = new Pizza (name, size, price, toppings, dough, extraToppings);
    const result = this.numberOfMeal.push(pizza);
    return result;
   
  }

  getMeals() {
    const result = this.numberOfMeal;
    return result;
    
  }

  getFullPrice() {
    return this.numberOfMeal.reduce ((total, pizza) => total + pizza.getPrice(), 0);
   
  }
  removeFromOrder(name: string) {
    const indexOfPizza = this.numberOfMeal.findIndex((element) => element.name === name);
        if(indexOfPizza === -1){
      throw new Error (`Pizza ${name} ${ERROR_MESSAGES.DIDNTFIND} `);
    }
    const result = this.numberOfMeal.splice( indexOfPizza, 1);
    console.log(`Pizza ${name} ${ERROR_MESSAGES.DELETEDFROMORDER}`);
        return result;
   
  }
}
