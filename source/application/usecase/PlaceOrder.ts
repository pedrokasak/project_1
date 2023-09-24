import Order from "../../domain/entity/Order";
import PlaceOrderinput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import CouponRepository from "../../domain/repository/CouponRepository";

export default class PlaceOrder {
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository,
    readonly cuponRepository: CouponRepository
  ) {}

  async execute(input: PlaceOrderinput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf, input.date);
    for (const orderItem of input.orderItems) {
      const item = await this.itemRepository.findById(orderItem.idItem);
      if (!item) throw new Error("Item not found");
      order.addItem(item, orderItem.quantity);
    }
    if (input.coupon) {
      const coupon = await this.cuponRepository.findByCode(input.coupon);
      if (coupon) order.addCoupon(coupon);
    }
    await this.orderRepository.save(order);
    const total = order.getTotal();
    const output = new PlaceOrderOutput(total);
    return output;
  }
}
