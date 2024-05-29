"use strict";
let lastName = "Patel";
let upperCaseLastName = lastName.toUpperCase();
console.log(lastName, upperCaseLastName);
let num = 25;
num = 25.13;
console.log(num);
let flag = false;
console.log(flag);
let arr = [1, 2, 3, 4, 5];
let arr1 = ["Deep", "Vishal"];
let resultOfArr = arr.filter((val, idx, arr) => {
    console.log(arr);
    return val > 3;
});
let sumOfArr = arr.reduce((prev, curr) => prev + curr);
console.log(sumOfArr);
let color = 0 /* Color.Red */;
console.log(color);
// Tuples
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
// any
let departmentName;
departmentName = "Computer Engineering";
departmentName = 20;
// void
// - Different ways to write functions
// 1 - Generic function
// 2 - Optional Parameters
// 3 - Required Parameters
// 4 - Rest Parameters
