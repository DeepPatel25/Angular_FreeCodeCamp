"use strict";
// Introduction to Class
// Creating class
// Class properties and Constructor
// Class Methods
// Creating instance of class
// Member visibility
// Static Members
class Employee {
    constructor(name, age, address) {
        this.id = Math.round(Math.random() * 100);
        this.name = name;
        this.age = age;
        this.address = address;
        Employee.count++;
    }
    getDetails() {
        console.log(this.id);
        console.log(`Name of employee is ${this.name} and age is ${this.age} and home town is ${this.address}.`);
    }
}
Employee.count = 0;
let Employee1 = new Employee("Deep Patel", 22, {
    street: "Ramkrushan Missin",
    state: "Gujarat",
    city: "Limbdi",
    pin: "363421"
});
let Employee2 = new Employee("Vishal Gohil", 22, {
    street: "Ramkrushan Missin",
    state: "Gujarat",
    city: "Limbdi",
    pin: "363421"
});
Employee1.getDetails();
console.log(Employee.count);
