import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppErrorHandler} from '@app/core/error-handler/error-handler';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(public errorHandler: AppErrorHandler) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            tap(event => {
            }, error => {
                this.errorHandler.handleError(error);
            })
        );

    }
}