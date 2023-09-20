const calculadora = require("../../models/calculadora");

test("somar 2 + 2 deveiria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveiria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'erro' + 100 deveiria retornar erro", () => {
  const resultado = calculadora.somar("erro", 100);
  expect(resultado).toBe("erro");
});
