import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable, of} from 'rxjs';
import {
    catchError,
    distinctUntilChanged,
    map,
    skip,
    skipLast,
    switchMap,
    take,
    takeLast,
    takeUntil,
    tap,
    withLatestFrom
} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from '@app/store/app.reducers';
import * as fromAuth from '@app/core/auth/store/auth.reducers';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import {AppErrorHandler} from '@app/core/error-handler/error-handler';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

    constructor(
        private store: Store<fromApp.AppState>,
        private errorHandler: AppErrorHandler,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('token')) {
            return next.handle(request)
                .pipe(
                    catchError((error) => {
                        this.errorHandler.handleError(error);
                        return EMPTY;
                    })
                );
        }

        return this.store.select('auth')
            .pipe(
                take(1),
                switchMap((authState: fromAuth.State) => {
                    const fromLocalStorage = localStorage.getItem('token');
                    if (authState.tokenPristine) {
                        this.store.dispatch(new AuthActions.SetToken(fromLocalStorage));
                        return this.store.select('auth')
                            .pipe(
                                skip(1)
                            );
                    } else {
                        return of(authState);
                    }
                }),
                switchMap((authState: fromAuth.State) => {
                    const reqCloned = request.clone({headers: request.headers.set('token', authState.token || '')});
                    return next.handle(reqCloned);
                }),
                catchError((error) => {
                    if (error.status === 401) {
                        this.store.dispatch(new AuthActions.GetToken());
                        return this.store.select('auth')
                            .pipe(
                                skip(1),
                                switchMap((authState: fromAuth.State) => {
                                    const reqCloned = request.clone({headers: request.headers.set('token', authState.token || '')});
                                    return next.handle(reqCloned);
                                }),
                                catchError((err) => {
                                    this.errorHandler.handleError(err);
                                    return EMPTY;
                                })
                            );
                    } else {
                        this.errorHandler.handleError(error);
                        return EMPTY;
                    }
                }),
            );

    }

}
