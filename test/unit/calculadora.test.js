const calculadora = require("../../models/caculadora.js");

test("somar 2 + 2 deveira retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 100 + 5 deveira retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("somar 'Banana' + 5 deveira retornar 'Erro'", () => {
  const resultado = calculadora.somar("Banana", 5);
  expect(resultado).toBe("Erro");
});
