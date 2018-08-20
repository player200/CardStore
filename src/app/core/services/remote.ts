import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class Kinvey {
    private BASE_URL = 'https://baas.kinvey.com/';
    private APP_KEY = 'kid_SkkFOgvUX';

    constructor(private http: HttpClient) { }

    get(module, endpoint): Observable<Object> {
        return this.requester(module, endpoint, 'GET', null);
    }

    post(module, endpoint, data): Observable<Object> {
        return this.requester(module, endpoint, 'POST', data);
    }

    update(module, endpoint, data): Observable<Object> {
        return this.requester(module, endpoint, 'PUT', data);
    }

    delete(module, endpoint): Observable<Object> {
        return this.requester(module, endpoint, 'DELETE', null);

    }

    private getUrl(module, endpoint): string {
        if (endpoint === '') {
            return this.BASE_URL + module + '/' + this.APP_KEY
        }
        return this.BASE_URL + module + '/' + this.APP_KEY + '/' + endpoint
    }

    private requester(module, endpoint, method, data) {
        var url = this.getUrl(module, endpoint);

        data = JSON.stringify(data);

        if (method == 'GET') {
            return this.http.get(url);
        } else if (method == 'POST') {
            return this.http.post(url, data);
        } else if (method == 'PUT') {
            return this.http.put(url, data);
        } else if (method == 'DELETE') {
            return this.http.delete(url);
        }
    }
}