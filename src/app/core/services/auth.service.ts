import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "../models/login.model";
import { RegisterModel } from "../models/register.model";
import { Kinvey } from "./remote";


@Injectable()
export class AuthService {
    //private currentAuthtoken: string

    constructor(private requester: Kinvey) { }

    register(body: RegisterModel) {

        return this.requester.post('user', '', body)
        //return this.http.post('register', JSON.stringify(body))
    }

    login(body: LoginModel) {
        return this.requester.post('user', 'login', body)
        //return this.http.post('login', JSON.stringify(body))
    }

    logout() {
        return this.requester.post('user', '_logout', {})
        //return this.http.post('_logout', {})
    }

    checkedIfLogged() {
        return localStorage.getItem('username') !== null
    }
}