import OrderCode from "../../source/domain/entity/OrderCode";
import OrderItem from "../../source/domain/entity/OrderItem";

test("Should be create the order", function () {
  const code = new OrderCode();
  const orderItem = new OrderItem(code, 1000, 10);
  expect(orderItem.getTotal()).toBe(10000);
});
