import PlaceOrder from '../../source/application/usecase/PlaceOrder';
import ItemRepositoryMemory from '../../source/infra/repository/memory/ItemRepositoryMemory'
import OrderRepositoryMemory from '../../source/infra/repository/memory/OrderRepositoryMemory'
import CouponRepositoryMemory from '../../source/infra/repository/memory/CouponRepositoryMemory'
import OrderCode from '../../source/domain/entity/OrderCode';


// Mock para a classe OrderCode
jest.mock('../../source/domain/entity/OrderCode', () => {
  const code = new OrderCode();
  return jest.fn().mockImplementation(() => ({
    // Supondo que OrderCode tenha um método generate
    generate: jest.fn().mockReturnValue(code)
  }));
});


test("Must be make order", async function () {
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const code = new OrderCode();
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: code, quantity: 1 },
      { idItem: code, quantity: 1 },
      { idItem: code, quantity: 3 },
    ],
    date: new Date("2023-10-31"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(360)
});

test("Must be make order with code", async function () {
  const mock = jest.fn();
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const code = new OrderCode();
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: code, quantity: 1 },
      { idItem: code, quantity: 1 },
      { idItem: code, quantity: 2 },
    ],
    date: new Date("2023-10-31"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  expect(output).toBeTruthy();
});

test("Must be make order with freight calculate", async function () {
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const code = new OrderCode();
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: code, quantity: 1 },
      { idItem: code, quantity: 1 },
      { idItem: code, quantity: 2 },
    ],
    date: new Date("2023-10-31"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  console.log(output);
  expect(output.code).toBeTruthy();
  // console.log(orderRepository.orders)
});

