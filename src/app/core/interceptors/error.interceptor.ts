import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpEventType,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(catchError((err: HttpErrorResponse) => {
                this.toastr.error(err.error.description, 'Unsuccessful!')

                return throwError(err)
            }))
    }
}