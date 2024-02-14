import Cpf from './Cpf';
import Item from './Item';
import OrderItem from './OrderItem';
import Coupon from './Coupon';
import FreightCalculator from './FreightCalculator';
import DefaulFreightCalculator from './DefaultFreightCalculator';
import OrderCode from './OrderCode';

export default class Order {
  cpf: Cpf;
  private orderItems: OrderItem[];
  coupon: Coupon | undefined;
  private freight: number;
  private code: OrderCode;

  constructor(
    cpf: string,
    readonly date: Date = new Date(),
    readonly freightCalculator: FreightCalculator = new DefaulFreightCalculator(),
    readonly sequence: number = 1
  ) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
    this.freight = 0;
    this.code = new OrderCode();
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
    total += this.getFreight();
    return total;
  }

  getCode() {
    return this.code
  }
}
