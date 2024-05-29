// Optional paramter is c
function add(a: number, b: number, c?: number): number {
    return c ? (a + b + c) : (a + b);
}

// Required params
const sub = (a: number, b: number, c = 10): number => {
    return a - b - c;
}

// Passes rest parameters
const mult = function (a: number, b: number, ...c: number[]): number {
    return a * b * c.reduce((num1, num2) => num1 * num2);
}

console.log(add(2, 3, 10));
console.log(sub(2, 3, -80));
console.log(mult(2, 3, 5, 10));

// Generic Funcions
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

console.log(getItems([1, 2, 3, 4, 5, 6]));
console.log(getItems(["a", "b", "c"]));