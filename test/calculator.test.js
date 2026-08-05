const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract, divide } = require('../src/calculator');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('subtract finds the difference', () => {
  assert.strictEqual(subtract(10, 4), 6);
});

test('divide splits two numbers', () => {
  assert.strictEqual(divide(20, 5), 4);
});

test('divide throws on divide by zero', () => {
  assert.throws(() => divide(1, 0), /Cannot divide by zero/);
});
