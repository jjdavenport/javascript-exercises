const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	let res = num1 - num2
  return res
};

const sum = function() {
	const arr = [1 ,2, 3, 4]
  let sum = 0 
  for (let i = 0; i < arr; i++){
    cum += arr[i];
  }
};

const multiply = function(num1, num2) {
let res = num1 * num2
return res
};

const power = function(x, y) {
	let res = Math.pow(x, y)
  return res
};

const factorial = function(num) {
	if (num < 0){
    console.log('cannot return')
  } else if (num === 0){
    console.log(`factorial is 1`)
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++){
      fact *= i; 
    }
  }
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
