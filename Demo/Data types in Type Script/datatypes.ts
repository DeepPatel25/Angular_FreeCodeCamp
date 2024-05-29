let lastName : string = "Patel";
let upperCaseLastName : string = lastName.toUpperCase();

console.log(lastName, upperCaseLastName);

let num : number = 25;
num = 25.13;
console.log(num);

let flag : boolean = false;
console.log(flag);

let arr : number[] = [1, 2, 3, 4, 5];
let arr1 : Array<string> = ["Deep", "Vishal"];

let resultOfArr = arr.filter((val, idx, arr) => {
    console.log(arr);
    return val > 3;
});

let sumOfArr = arr.reduce((prev, curr) => prev + curr);
console.log(sumOfArr);

// enum
// Remove the name using const if you are not using for the production.
const enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red;
console.log(color);

// Tuples
let swapNums: [firstNumber: number, secondNumber: number];

function swapNumbers(num1 : number, num2: number) : [number, number]{
    return [num2, num1];
}

swapNums = swapNumbers(10, 20);
console.log(swapNums);

// any
let departmentName : any;
departmentName = "Computer Engineering";
departmentName = 20;

// void

// - Different ways to write functions
// 1 - Generic function
// 2 - Optional Parameters
// 3 - Required Parameters
// 4 - Rest Parameters

