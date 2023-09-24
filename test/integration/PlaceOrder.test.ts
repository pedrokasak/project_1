import Order from "../../source/domain/entity/Order";
import Item from "../../source/domain/entity/Item";
import PlaceOrder from '../../source/application/usecase/PlaceOrder';

test("Must be make order", async function () {
  const placeOrder = new PlaceOrder();
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    date: new Date("2023-07-30"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(1000)
});
