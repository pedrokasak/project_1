import Cpf from "../../source/domain/entity/Cpf";

test("Should be valid cpf", function () {
  const cpf = new Cpf("935.411.347-80");
  expect(cpf).toBeTruthy();
});

test("Must be try valid cpf", function () {
  expect(() => new Cpf("123.456.789-99")).toThrow(new Error("Invalid Cpf!"));
});

test("Must be try valid cpf all equals digits", function () {
  expect(() => new Cpf("111.111.111-11")).toThrow(new Error("Invalid Cpf!"));
});

test("Must be try valid cpf big", function () {
  expect(() => new Cpf("111.111.111-1100")).toThrow(new Error("Invalid Cpf!"));
});

test("Must be try valid cpf little", function () {
  expect(() => new Cpf("111.456")).toThrow(new Error("Invalid Cpf!"));
});
