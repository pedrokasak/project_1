import OrderItem from "../../source/domain/entity/OrderItem";

test("Should be create the order", function () {
  const orderItem = new OrderItem(1, 1000, 10);
  expect(orderItem.getTotal()).toBe(10000);
});
