import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "./models/login.model";
import { RegisterModel } from "./models/register.model";

const appKey = "" // APP KEY HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable()
export class AuthService {
    private currentAuthtoken: string

    constructor(private http: HttpClient) { }

    register(body: RegisterModel) {
        return this.http.post(registerUrl, JSON.stringify(body))
    }

    login(body : LoginModel){
        return this.http.post(loginUrl,JSON.stringify(body))
    }

    logout() {
        return this.http.post(logoutUrl, {})
    }

    checkedIfLogged() {
        return localStorage.getItem('username') !== null
    }
}