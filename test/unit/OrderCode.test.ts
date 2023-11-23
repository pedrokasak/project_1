import OrderCode from "../../source/domain/entity/OrderCode";

test("Should be create order with code", function () {
  const date = new Date('2023-11-16');
  const sequence = 1
  const orderCode = new OrderCode(date, sequence)
  const value = orderCode.value
  expect(value).toBe("202300000001");
});
