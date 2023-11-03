import Coupon from "../../source/domain/entity/Coupon";

test("Should be create discount valid coupon", function () {
  const coupon = new Coupon("VALE20", 20, new Date("2023-07-29"));
  const today = new Date("2023-07-01")
  const isValid = coupon.isValid(today);
  expect(isValid).toBeTruthy();
});

test("Should be create discount expired coupon", function () {
  const coupon = new Coupon("VALE20", 20, new Date("2023-07-01"));
  const today = new Date("2023-07-29")
  const isExpired = coupon.isExpired(today);
  expect(isExpired).toBeTruthy();
});

test("Should be create discount and calculate discount", function () {
  const coupon = new Coupon("VALE20", 20);
  const discount  = coupon.calculateDiscount(1000);
  expect(discount).toBe(200);
});

test("Should be create discount and calculate discount not valid", function () {
  const coupon = new Coupon("BLACK10", 10);
  const today = new Date("2023-11-2")
  const discount  = coupon.calculateDiscount(1000, today);
  expect(discount).toBeTruthy();
});

