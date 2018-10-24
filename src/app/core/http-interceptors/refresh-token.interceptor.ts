import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {catchError, switchMap, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from '@app/store/app.reducers';
import * as fromAuth from '@app/core/auth/store/auth.reducers';
import * as AuthActions from '@app/core/auth/store/auth.actions';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromApp.AppState>) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('token')) {
            return next.handle(request);
        }
        console.log('HAVE TOKEN');
        return next.handle(request);
        // return this.store.select('auth')
        //     .pipe(
        //         take(1),
        //         switchMap((authState: fromAuth.State) => {
        //             console.log('TOK: ', authState.token);
        //             const reqCloned = request.clone({headers: request.headers.set('token', authState.token)});
        //             return next.handle(reqCloned)
        //                 .pipe(
        //                     catchError(err => {
        //                         console.log('EGG: ', err);
        //                         if (err.status === 401) {
        //                             this.store.dispatch(new AuthActions.GetToken());
        //                             return next.handle(reqCloned);
        //                         }
        //                         return EMPTY;
        //                     })
        //                 );
        //         })
        //     );
    }

}
