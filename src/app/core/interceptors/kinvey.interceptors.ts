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
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const appKey = "kid_SkkFOgvUX"
const appSecret = "547f24fa79284e158a15ac8769796874"

@Injectable()
export class KinveyInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService,
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
        } else if (request.url.endsWith('login')) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else if (request.url.endsWith('_logout')) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        } else if (request.url.includes('appdata')) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }

        return next.handle(request)
            .pipe(tap((res: any) => {
                if (res instanceof HttpResponse && request.url.endsWith(appKey)) {
                    this.toastr.success('Register successful', 'Success!')
                    this.router.navigate(['/login'])
                } else if (res instanceof HttpResponse && request.url.endsWith('login')) {
                    localStorage.setItem('userId', res.body['_id'])
                    localStorage.setItem('authtoken', res.body['_kmd']['authtoken'])
                    localStorage.setItem('username', res.body['username'])
                    if (res.body._kmd.hasOwnProperty('roles')) {
                        localStorage.setItem('isAdmin', 'true')
                    }
                    this.toastr.success('Loged in successful', 'Success!')
                    this.router.navigate(['/home'])
                } else if (res instanceof HttpResponse && request.url.endsWith('_logout')) {
                    localStorage.clear()
                    this.toastr.success('Logout successful', 'Success!')
                    this.router.navigate(['/home'])
                }
            }))
    }
}