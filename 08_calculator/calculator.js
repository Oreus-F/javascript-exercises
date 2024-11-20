const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, numb) => total + numb, 0)
};

const multiply = function(array) {
  return array.reduce((total, numb) => total * numb, 1)
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
  let result = 1;
  if (a === 0 || a === 1){ return result};
  for (let x = a; x > 0; x--){
    result *= x;
  };
  return result;
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
