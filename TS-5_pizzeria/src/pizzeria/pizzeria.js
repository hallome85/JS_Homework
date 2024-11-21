"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
const order_1 = require("../order/order");
const messages_1 = require("../data/messages");
class Pizzeria {
    name;
    address;
    workingHours;
    optionalOrders;
    orders = [];
    constructor(name, address, workingHours, optionalOrders) {
        this.name = name;
        this.address = address;
        this.workingHours = workingHours;
        this.optionalOrders = optionalOrders;
    }
    createOrder() {
        const orderId = (Date.now() % 1000) + 1;
        const order = new order_1.Order(orderId);
        this.orders.push(order);
        return order;
    }
    getOrder(orderId) {
        const clientsOrder = this.orders.find((element) => element.orderId === orderId);
        if (!clientsOrder) {
            console.log(`Order ID ${orderId} ${messages_1.ERROR_MESSAGES.DIDNTFIND} `);
            return null;
        }
        return clientsOrder;
    }
    removeOrder(orderId) {
        const orderToRemove = this.orders.findIndex((element) => element.orderId === orderId);
        if (orderToRemove === -1) {
            throw new Error(`Order ID ${orderId} ${messages_1.ERROR_MESSAGES.DIDNTFIND} `);
        }
        this.orders.splice(orderToRemove, 1);
        console.log(`Order ID ${orderId} ${messages_1.ERROR_MESSAGES.DELETED}.`);
    }
}
exports.Pizzeria = Pizzeria;
