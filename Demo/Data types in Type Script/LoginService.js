"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginService {
    Login() {
        console.log("Successfully logged");
        let user = {
            id: 1,
            age: 22,
            name: "Deep",
            email: "deep@gmail.com"
        };
        return user;
    }
}
let loginService = new LoginService();
console.log(loginService.Login());
