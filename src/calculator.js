// A deliberately tiny module — just enough to have something to build and test.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = { add, subtract, divide };

if (require.main === module) {
  console.log('add(2, 3) =', add(2, 3));
  console.log('subtract(9, 4) =', subtract(9, 4));
  console.log('divide(10, 2) =', divide(10, 2));
}
