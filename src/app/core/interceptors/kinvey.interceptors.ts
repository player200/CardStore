import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


const appKey = "kid_SkkFOgvUX" // APP KEY HERE;
const appSecret = "547f24fa79284e158a15ac8769796874" // APP SECRET HERE;

@Injectable()
export class KinveyInterceptor implements HttpInterceptor {
    constructor(//private toastr: ToastrService,
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
        if (request.url.endsWith(appKey)) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
            this.router.navigate(['/login'])
        } else if (request.url.endsWith('login')) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
            this.router.navigate(['/home'])
        } else if (request.url.endsWith('_logout')) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
            this.router.navigate(['/home'])
        }

        return next.handle(request)
            .pipe(tap((res: any) => {
                if (res instanceof HttpResponse && request.url.endsWith('login')) {
                    localStorage.setItem('authtoken', res.body['_kmd']['authtoken'])
                    localStorage.setItem('username', res.body['username'])
                    if (res.body._kmd.hasOwnProperty('roles')) {
                        localStorage.setItem('isAdmin', 'true')
                    }
                }
                else if (res instanceof HttpResponse && request.url.endsWith('_logout')) {
                    localStorage.clear()
                }
            }))
    }
}