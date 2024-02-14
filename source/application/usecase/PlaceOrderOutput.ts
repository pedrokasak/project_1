import OrderCode from "../../domain/entity/OrderCode";

export default class PlaceOrderOutput {
  constructor(readonly code: OrderCode = new OrderCode(), readonly total: number) {}
}
