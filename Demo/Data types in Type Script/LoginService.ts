import { IEmployee, ILogin } from "./InterfaceDemo";

class LoginService implements ILogin {
    Login(): IEmployee {
        console.log("Successfully logged");
        let user: IEmployee = {
            id: 1,
            age: 22,
            name: "Deep",
            email: "deep@gmail.com"
        }

        return user
    }
}

let loginService = new LoginService();
console.log(loginService.Login());