// Creating interface
// using interface as types
// implementing interface
// extending interface
// optional properties
// object destructuring
// array destructuring

export interface IEmployee {
    name: string
    age: number
    id: number
    email: string
}

let employee: IEmployee = {
    id: 1,
    age: 22,
    name: "Deep",
    email: "deep@gmail.com"
}

interface Employees extends IEmployee {
    salary: number
}

let employee1: Employees = {
    id: 1,
    age: 22,
    name: "Deep",
    email: "deep@gmail.com",
    salary: 10000
}

export interface ILogin {
    Login(): IEmployee
}