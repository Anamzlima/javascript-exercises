const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((total, current) => total + current, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, current) => product * current);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
}
  return sum;
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
