const add = function(...nums) {
  return nums.reduce((total, current) => total+current, 0);
};

const subtract = function(firstNum, secondNum) {
  return firstNum-secondNum;
};

const sum = function(nums) {
	return nums.reduce((total,current) => total+current, 0);
};

const multiply = function(nums) {
  return nums.reduce((total,current) => total*current, 1);
};

const power = function(a,b) {
  let ret = 1;
  for (let i=0; i<b; i++){
    ret = ret*a;
  }
	return ret;
};

const factorial = function(number) {
	let ret = 1;
  for (let i=1; i<=number; i++) {
    ret = ret*i;
  }
  return ret;
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
