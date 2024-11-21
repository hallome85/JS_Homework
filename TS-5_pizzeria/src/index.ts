
import { Pizzeria } from "./pizzeria/pizzeria";
import { PIZZA_NAMES, pizzaReceipts } from "./data/receipts";
import { DOUGH_TYPE, PIZZA_SIZE } from "./data/types";


const pizzeria = new Pizzeria("Lisitsa", "Tverskaya st, 24", "10.00 - 24.00");
const order = pizzeria.createOrder();
order.addPizza(
  PIZZA_NAMES.PEPPERONI,
  PIZZA_SIZE.LARGE,
  pizzaReceipts[PIZZA_NAMES.PEPPERONI].prices[PIZZA_SIZE.LARGE],
  pizzaReceipts[PIZZA_NAMES.PEPPERONI].toppings,
  DOUGH_TYPE.FERMENTED
);
order.addPizza(
  PIZZA_NAMES.HAWAII,
  PIZZA_SIZE.LARGE,
  pizzaReceipts[PIZZA_NAMES.HAWAII].prices[PIZZA_SIZE.LARGE],
  pizzaReceipts[PIZZA_NAMES.HAWAII].toppings,
  DOUGH_TYPE.THICK, ["olives", "mushrooms"]
);
console.log(order.getMeals());
console.log(order.getFullPrice());
order.removeFromOrder(PIZZA_NAMES.HAWAII);
