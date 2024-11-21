import { Order } from "../order/order";
import { ERROR_MESSAGES } from "../data/messages";

export class Pizzeria {
    private orders: Order[] = [];

  constructor(
    public name: string,
    public address: string,
    public workingHours: string,
    private optionalOrders?: Order[]
  ) {
  
  }

  createOrder() {
    const orderId = (Date.now() % 1000) + 1;
    const order = new Order(orderId);
    this.orders.push(order);
    return order;

     }

  getOrder(orderId: number) {
    const clientsOrder = this.orders.find(
      (element) => element.orderId === orderId
    );
    if (!clientsOrder) {
      console.log(`Order ID ${orderId} ${ERROR_MESSAGES.DIDNTFIND} `);
      return null;
    }
    return clientsOrder;
  }

   removeOrder(orderId: number): void {
    const orderToRemove = this.orders.findIndex(
      (element) => element.orderId === orderId
    );
    if (orderToRemove === -1) {
      throw new Error(`Order ID ${orderId} ${ERROR_MESSAGES.DIDNTFIND} `);
    }
    this.orders.splice(orderToRemove, 1);
    console.log(`Order ID ${orderId} ${ERROR_MESSAGES.DELETED}.`);
    
  }
}
