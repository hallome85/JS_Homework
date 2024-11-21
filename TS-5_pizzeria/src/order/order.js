"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const receipts_1 = require("../data/receipts");
const pizza_1 = require("../meal/pizza");
const messages_1 = require("../data/messages");
class Order {
    orderId;
    numberOfMeal;
    constructor(orderId, numberOfMeal = []) {
        this.orderId = orderId;
        this.numberOfMeal = numberOfMeal;
    }
    addPizza(name, size, price = receipts_1.pizzaReceipts[name].prices[size], toppings = receipts_1.pizzaReceipts[name].toppings, dough, extraToppings = []) {
        const pizza = new pizza_1.Pizza(name, size, price, toppings, dough, extraToppings);
        const result = this.numberOfMeal.push(pizza);
        return result;
    }
    getMeals() {
        const result = this.numberOfMeal;
        return result;
    }
    getFullPrice() {
        return this.numberOfMeal.reduce((total, pizza) => total + pizza.getPrice(), 0);
    }
    removeFromOrder(name) {
        let indexOfPizza = this.numberOfMeal.findIndex((element) => element.name === name);
        if (indexOfPizza === -1) {
            throw new Error(`Pizza ${name} ${messages_1.ERROR_MESSAGES.DIDNTFIND} `);
        }
        const result = this.numberOfMeal.splice(indexOfPizza, 1);
        console.log(`Pizza ${name} ${messages_1.ERROR_MESSAGES.DELETEDFROMORDER}`);
        return result;
    }
}
exports.Order = Order;
