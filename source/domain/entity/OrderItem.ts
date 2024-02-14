import OrderCode from "./OrderCode";

export default class OrderItem {
  constructor(
    readonly idItem: OrderCode,
    readonly price: number,
    readonly quantity: number
  ) {}

  getTotal() {
    return this.price * this.quantity;
  }
}
