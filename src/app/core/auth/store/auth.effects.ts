import {Inject, Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, take, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppError, AppErrorHandler} from '@app/core/error-handler/error-handler';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import * as MenuActions from '@app/core/menu/store/menu.actions';
import * as UserActions from '@app/core/user/store/user.actions';
import {APP_CONFIG, AppConfig} from '@app/app.config';
import * as ApplicantsActions from '@app/core/applicants/store/applicants.actions';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthEffects {

    @Effect()
    authSignin = this.actions$
        .pipe(
            ofType(AuthActions.TRY_SIGNIN),
            switchMap((action: AuthActions.TrySignin) => {
                return this.http.get(`${this.appConfig.apiEndpoint}/users/1`);
            }),
            switchMap((res: any) => {
                if (res.success && res.user) {
                    return of(res.user);
                } else {
                    this.errorHandler.handleError(new AppError('Oops, can\'t fetch user'));
                    return EMPTY;
                }
            }),
            mergeMap((user) => {
                return [
                    {
                        type: AuthActions.SIGNIN,
                    },
                    {
                        type: UserActions.SET_USER,
                        payload: user
                    },
                    {
                        type: MenuActions.SET_MENU,
                        payload: true
                    }
                ];
            })
        );

    @Effect()
    authSignout = this.actions$
        .pipe(
            ofType(AuthActions.TRY_SIGNOUT),
            mergeMap(() => {
                return [
                    {
                        type: AuthActions.SIGNOUT,
                    },
                    {
                        type: UserActions.UNSET_USER,
                    },
                    {
                        type: MenuActions.SET_MENU,
                        payload: false
                    }
                ];
            })
        );

    @Effect()
    authSignup = this.actions$
        .pipe(
            ofType(AuthActions.TRY_SIGNUP),
            switchMap((action: AuthActions.TrySignup) => {
                const httpOptions = {
                    headers: new HttpHeaders({
                        'token': ''
                    })
                };
                return this.http.post(`${this.appConfig.apiEndpoint}/users`, action.payload, httpOptions);
            }),
            take(1),
            mergeMap((res: any) => {
                if (res.success) {
                    this.toastr.success(res.message);
                }
                return [
                    {
                        type: AuthActions.SIGNUP,
                    },
                    {
                        type: ApplicantsActions.UNSET_APPLICANTS,
                    },
                    {
                        type: ApplicantsActions.TRY_FETCH_APPLICANTS,
                    },
                ];
            })
        );

    @Effect()
    refreshToken = this.actions$
        .pipe(
            ofType(AuthActions.GET_TOKEN),
            switchMap((action: AuthActions.GetToken) => {
                const token = localStorage.getItem('token');
                if (token) {
                    return of({success: true, token: token});
                } else {
                    return this.http.get(`${this.appConfig.apiEndpoint}/token`);
                }
            }),
            switchMap((res: any) => {
                console.log('refreshToken: ', res);
                if (res.success && res.token) {
                    return of(res.token);
                } else {
                    this.errorHandler.handleError(new AppError('Oops, can\'t fetch token'));
                    return EMPTY;
                }
            }),
            mergeMap((token) => {
                return [
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ];
            })
        );

    constructor(
        private actions$: Actions,
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private errorHandler: AppErrorHandler,
        private http: HttpClient,
        private toastr: ToastrService,
    ) {

    }
}
