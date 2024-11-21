"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const meal_1 = require("./meal");
const receipts_1 = require("../data/receipts");
const prices_1 = require("../data/prices");
class Pizza extends meal_1.Meal {
    name;
    size;
    price;
    toppings;
    dough;
    extraToppings;
    constructor(name, size, price = receipts_1.pizzaReceipts[name].prices[size], toppings = receipts_1.pizzaReceipts[name].toppings, dough, extraToppings = []) {
        super(name, size);
        this.name = name;
        this.size = size;
        this.price = price;
        this.toppings = toppings;
        this.dough = dough;
        this.extraToppings = extraToppings;
    }
    calculatePrice() {
        let extraToppingsPrice = this.extraToppings.reduce((total, topping) => {
            return total + (prices_1.TOPPINGS[topping] || 0);
        }, 0);
        return this.price + extraToppingsPrice;
    }
}
exports.Pizza = Pizza;
