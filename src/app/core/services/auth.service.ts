import { Injectable } from "@angular/core";
import { Kinvey } from "./remote";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { RegisterModel } from "../models/auth/register.model";
import { LoginModel } from "../models/auth/login.model";

const module: string = 'user'

@Injectable()
export class AuthService {
    constructor(private requester: Kinvey,
        private http: HttpClient) { }

    register(body: RegisterModel): Observable<Object> {
        let url = this.requester.getUrl(module, '')
        let bodyToStr = JSON.stringify(body)

        return this.http.post(url, bodyToStr)
    }

    login(body: LoginModel): Observable<Object> {
        let url = this.requester.getUrl(module, 'login')
        let bodyToStr = JSON.stringify(body)

        return this.http.post(url, bodyToStr)
    }

    logout(): Observable<Object> {
        let url = this.requester.getUrl(module, '_logout')
        let bodyToStr = JSON.stringify({})
        
        return this.http.post(url, bodyToStr)
    }

    getCurrentUserId(): string {
        return localStorage.getItem('userId')
    }

    checkedIfLogged(): boolean {
        return localStorage.getItem('username') !== null
    }

    checkedIfAdmin(): boolean {
        return localStorage.getItem('isAdmin') !== null
    }
}