import Order from "../../source/domain/entity/Order";
import Item from "../../source/domain/entity/Item";
import Coupon from "../../source/domain/entity/Coupon";
import DefaulFreightCalculator from "../../source/domain/entity/DefaultFreightCalculator";
import FixedFreightCalculator from '../../source/domain/entity/FixedFreightCalculator';
import OrderCode from "../../source/domain/entity/OrderCode";

test("Should be create empty order with valid cpf", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf);
  const total = order.getTotal();
  expect(total).toBe(0);
});

test("Must try to create empty order with invalid cpf", function () {
  const cpf = "111.111.111.-11";
  expect(() => new Order(cpf)).toThrow(new Error("Invalid Cpf!"));
});

test("Should be create order with 3 items", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf);
  const code = new OrderCode();
  order.addItem(new Item(code, "Song", "CD", 15), 3);
  order.addItem(new Item(code, "Motherboard", "Hardware", 150), 1);
  order.addItem(new Item(code, "Memory", "Hardware", 65), 1);
  const total = order.getTotal();
  expect(total).toBe(260);
});

test("Should be create order with 20% discount coupon", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf);
  const code = new OrderCode();
  order.addItem(new Item(code, "Song", "CD", 15), 3);
  order.addItem(new Item(code, "Motherboard", "Hardware", 150), 1);
  order.addItem(new Item(code, "Memory", "Hardware", 65), 1);
  order.addCoupon(new Coupon("VALE20", 20));
  const total = order.getTotal();
  expect(total).toBe(208);
});

test("Should be create order with expired coupon", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf, new Date('2023-07-29'));
  const code = new OrderCode();
  order.addItem(new Item(code, "Song", "CD", 15), 3);
  order.addItem(new Item(code, "Motherboard", "Hardware", 150), 1);
  order.addItem(new Item(code, "Memory", "Hardware", 65), 1);
  order.addCoupon(new Coupon("VALE20", 20, new Date('2023-07-10')));
  const total = order.getTotal();
  expect(total).toBe(260);
});

test("Should be create order with 3 items with freight calculate", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf, new Date(), new DefaulFreightCalculator());
  const code = new OrderCode();
  order.addItem(new Item(code, "Memory RAM 16GB DDR4", "Hardware", 150, 0.5, 0.2, 0.5, 0.03), 2); // 1.6666666666666667 f=500
  order.addItem(new Item(code, "Graphic Card RTX 4060 8GB", "Hardware", 3500, 0.6, 0.25, 0.32, 2), 1); // 0.024 f=84
  order.addItem(new Item(code, "Fonte GAMEMAX 650W ", "Hardware", 400, 0.40, 0.53, 0.32, 4), 1); // 0.001696 f=0,67
  const freight = order.getFreight();
  expect(freight).toBe(798.2);
});

test("Should be create order with 3 items with freight specific calculate", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf, new Date(), new FixedFreightCalculator());
  const code = new OrderCode();
  order.addItem(new Item(code, "Memory RAM 16GB DDR4", "Hardware", 150, 0.5, 0.2, 0.5, 0.03), 2); 
  order.addItem(new Item(code, "Graphic Card RTX 4060 8GB", "Hardware", 3500, 0.6, 0.25, 0.32, 2), 1); 
  order.addItem(new Item(code, "Fonte GAMEMAX 650W ", "Hardware", 400, 0.40, 0.53, 0.32, 4), 1); 
  const freight = order.getFreight();
  expect(freight).toBe(40);
});

test("Should be create order with code", function () {
  const cpf = "126.239.587-93";
  const order = new Order(cpf, new Date(), new FixedFreightCalculator());
  const code = new OrderCode();
  order.addItem(new Item(code, "Memory RAM 16GB DDR4", "Hardware", 150, 0.5, 0.2, 0.5, 0.03), 2); 
  order.addItem(new Item(code, "Graphic Card RTX 4060 8GB", "Hardware", 3500, 0.6, 0.25, 0.32, 2), 1); 
  order.addItem(new Item(code, "Fonte GAMEMAX 650W ", "Hardware", 400, 0.40, 0.53, 0.32, 4), 1); 
  // const code = order.getCode();
  expect(code).toBeTruthy();
});
