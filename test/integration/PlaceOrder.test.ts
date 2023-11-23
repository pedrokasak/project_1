import PlaceOrder from '../../source/application/usecase/PlaceOrder';
import ItemRepositoryMemory from '../../source/infra/repository/memory/ItemRepositoryMemory'
import OrderRepositoryMemory from '../../source/infra/repository/memory/OrderRepositoryMemory'
import CouponRepositoryMemory from '../../source/infra/repository/memory/CouponRepositoryMemory'


test("Must be make order", async function () {
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    date: new Date("2023-10-31"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(360)
});

test("Must be make order with code", async function () {
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: 4, quantity: 1 },
      { idItem: 5, quantity: 1 },
      { idItem: 6, quantity: 2 },
    ],
    date: new Date("2023-10-31"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  expect(output.code).toBe("202300000001")
});

test("Must be make order with freight calculate", async function () {
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
  const input = {
    cpf: "126.239.587-93",
    orderItems: [
      { idItem: 4, quantity: 1 },
      { idItem: 5, quantity: 1 },
      { idItem: 6, quantity: 2 },
    ],
    date: new Date("2023-10-31"),
    coupon:"VALE20"
  };
  const output = await placeOrder.execute(input);
  expect(output.total).toBe(5261.9)
  // console.log(orderRepository.orders)
});

