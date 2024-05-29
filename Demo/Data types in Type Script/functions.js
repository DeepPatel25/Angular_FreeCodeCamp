"use strict";
// Optional paramter is c
function add(a, b, c) {
    return c ? (a + b + c) : (a + b);
}
// Required params
const sub = (a, b, c = 10) => {
    return a - b - c;
};
// Passes rest parameters
const mult = function (a, b, ...c) {
    return a * b * c.reduce((num1, num2) => num1 * num2);
};
console.log(add(2, 3, 10));
console.log(sub(2, 3, -80));
console.log(mult(2, 3, 5, 10));
// Generic Funcions
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5, 6]));
console.log(getItems(["a", "b", "c"]));
