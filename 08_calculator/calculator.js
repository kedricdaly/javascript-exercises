const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  return nums.reduce((total, num) => {return total + num}, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => {return total *= num}, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  // 0! and 1! defined to be 1. Can return early.
  if (n == 0 || n == 1) return 1;

  total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
