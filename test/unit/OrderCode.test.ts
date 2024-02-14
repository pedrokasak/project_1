import OrderCode from "../../source/domain/entity/OrderCode";

test("Should be create order with code", function () {
  const orderCode = new OrderCode();
  const value = orderCode.value
  expect(value).toBeTruthy();
});
