'use strict';

//expression
// const isEven = function(param) {
//     const result = param % 2 === 0;
//     // console.log(result);
//     return result;
// };

// const adder = function(num1, num2) {
//   const result = num1 + num2;
//   return result;
// };


// const subtracter = function(num1, num2) {
//   const result = num1 - num2;
//   return result;
// };

// const wellIsIt = isEven(10);
// console.log(wellIsIt);

// const sum = adder(30, 15);
// const difference = subtracter(30, 15);
// console.log(sum);
// console.log(difference);


const mathTeacher = {
  name: 'Josh',
  good: false,
  adder: function(num1, num2) {
    const result = num1 + num2;
    return result;
  },
};

console.log(mathTeacher.adder(1, 2));
