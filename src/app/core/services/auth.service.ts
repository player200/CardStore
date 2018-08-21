import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { RegisterModel } from "../models/auth/register.model";
import { LoginModel } from "../models/auth/login.model";

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

    getCurrentUserId() {
        return localStorage.getItem('userId')
    }

    checkedIfLogged() {
        return localStorage.getItem('username') !== null
    }

    checkedIfAdmin() {
        return localStorage.getItem('isAdmin') !== null
    }
}