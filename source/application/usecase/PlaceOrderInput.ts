import OrderCode from "../../domain/entity/OrderCode";

export default class PlaceOrderInput {
  constructor(
    readonly cpf: string,
    readonly orderItems: { idItem: OrderCode; quantity: number }[],
    readonly date: Date,
    readonly coupon?: string
  ) {}
}
