"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
const receipts_1 = require("../data/receipts");
const messages_1 = require("../data/messages");
class Meal {
    name;
    size;
    price;
    constructor(name, size) {
        this.name = name;
        this.size = size;
        const pizza = receipts_1.pizzaReceipts[name];
        if (!pizza) {
            throw new Error(`Pizza with name ${name} ${messages_1.ERROR_MESSAGES.DIDNTFIND}`);
        }
        this.price = pizza.prices[size];
        if (this.price === undefined) {
            throw new Error(`Pizza ${name} with size ${size} ${messages_1.ERROR_MESSAGES.DONOTEXIST}`);
        }
    }
    getPrice() {
        return this.calculatePrice();
    }
}
exports.Meal = Meal;
