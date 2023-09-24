import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
import Coupon from "./Coupon";
import FreightCalculator from "./FreightCalculator";
import DefaulFreightCalculator from "./DefaultFreightCalculator";

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon: Coupon | undefined;
  private freight: number;

  constructor(
    cpf: string,
    readonly date: Date = new Date(),
    readonly freightCalculator: FreightCalculator = new DefaulFreightCalculator()
  ) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
    this.freight = 0;
  }

  addItem(item: Item, quantity: number) {
    this.freight += this.freightCalculator.calculate(item) * quantity;
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  getFreight() {
    return this.freight;
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isValid(this.date)) {
      this.coupon = coupon;
    }
  }

  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total, this.date);
    }
    return total;
  }
}
