// script.test.js

const { calculateTotalPrice, calculateTotalPriceWithTax } = require('./helperFunctions');

test('calculateTotalPrice calculates total price correctly', () => {
  const selectedDishes = [{ name: 'Italian pasta', quantity: 2 }];
  const totalPrice = calculateTotalPrice(selectedDishes);
  expect(totalPrice).toBe(19.10); // 2 * 9.55 = 19.10
});

test('calculateTotalPriceWithTax calculates total price with tax correctly', () => {
  const selectedDishes = [{ name: 'Rice with veggies', quantity: 1 }];
  const totalPriceWithTax = calculateTotalPriceWithTax(selectedDishes);
  expect(totalPriceWithTax).toBeCloseTo(10.38); // 8.65 * 1.2 = 10.38 (rounded to 2 decimal places)
});
