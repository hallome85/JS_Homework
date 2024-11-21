"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaReceipts = exports.PIZZA_NAMES = void 0;
var PIZZA_NAMES;
(function (PIZZA_NAMES) {
    PIZZA_NAMES["PEPPERONI"] = "Pepperoni";
    PIZZA_NAMES["MARGHERITA"] = "Margherita";
    PIZZA_NAMES["CHEESE_4"] = "4 Cheese";
    PIZZA_NAMES["HAWAII"] = "Hawaii";
})(PIZZA_NAMES || (exports.PIZZA_NAMES = PIZZA_NAMES = {}));
const types_1 = require("./types");
exports.pizzaReceipts = {
    [PIZZA_NAMES.PEPPERONI]: {
        toppings: ["cheese", "pepperoni"],
        prices: {
            [types_1.PIZZA_SIZE.SMALL]: 60,
            [types_1.PIZZA_SIZE.MEDIUM]: 80,
            [types_1.PIZZA_SIZE.LARGE]: 110
        }
    },
    [PIZZA_NAMES.MARGHERITA]: {
        toppings: ["cheese", "tomato"],
        prices: {
            [types_1.PIZZA_SIZE.SMALL]: 50,
            [types_1.PIZZA_SIZE.MEDIUM]: 75,
            [types_1.PIZZA_SIZE.LARGE]: 100
        }
    },
    [PIZZA_NAMES.CHEESE_4]: {
        toppings: ["4 cheese"],
        prices: {
            [types_1.PIZZA_SIZE.SMALL]: 55,
            [types_1.PIZZA_SIZE.MEDIUM]: 70,
            [types_1.PIZZA_SIZE.LARGE]: 100
        }
    },
    [PIZZA_NAMES.HAWAII]: {
        toppings: ["cheese", "corn", "pineapple", "ham"],
        prices: {
            [types_1.PIZZA_SIZE.SMALL]: 65,
            [types_1.PIZZA_SIZE.MEDIUM]: 85,
            [types_1.PIZZA_SIZE.LARGE]: 115
        }
    }
};
