export enum PIZZA_NAMES {
  PEPPERONI = "Pepperoni",
  MARGHERITA = "Margherita",
  CHEESE_4 = "4 Cheese",
  HAWAII = "Hawaii"
} 
 
import {PIZZA_SIZE} from './types'

export const pizzaReceipts = {
 
  [PIZZA_NAMES.PEPPERONI]: {
    toppings: ["cheese", "pepperoni"],
    prices: {
      [PIZZA_SIZE.SMALL]: 60,
      [PIZZA_SIZE.MEDIUM]: 80,
      [PIZZA_SIZE.LARGE]: 110
    }
  },
  [PIZZA_NAMES.MARGHERITA]: {
    toppings: ["cheese", "tomato"],
    prices: {
      [PIZZA_SIZE.SMALL]: 50,
      [PIZZA_SIZE.MEDIUM]: 75,
      [PIZZA_SIZE.LARGE]: 100
    }
  },
  [PIZZA_NAMES.CHEESE_4]: {
    toppings: ["4 cheese"],
    prices: {
      [PIZZA_SIZE.SMALL]: 55,
      [PIZZA_SIZE.MEDIUM]: 70,
      [PIZZA_SIZE.LARGE]: 100
    }
  },
  [PIZZA_NAMES.HAWAII]: {
    toppings: ["cheese", "corn", "pineapple", "ham"],
    prices: {
      [PIZZA_SIZE.SMALL]: 65,
      [PIZZA_SIZE.MEDIUM]: 85,
      [PIZZA_SIZE.LARGE]: 115
    }
  }
   
};
