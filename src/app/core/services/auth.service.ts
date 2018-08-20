import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { RegisterModel } from "../models/register.model";
import { Kinvey } from "./remote";

@Injectable()
export class AuthService {
    constructor(private requester: Kinvey) { }

    register(body: RegisterModel) {
        return this.requester.post('user', '', body)
    }

    login(body: LoginModel) {
        return this.requester.post('user', 'login', body)
    }

    logout() {
        return this.requester.post('user', '_logout', {})
    }

    checkedIfLogged() {
        return localStorage.getItem('username') !== null
    }

    checkedIfAdmin() {
        return localStorage.getItem('isAdmin') !== null
    }
}