import {HttpClient} from '@angular/common/http';
import {AppError, AppErrorHandler} from '@app/core/error-handler/error-handler';
import {Inject, Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as ApplicantsActions from '@app/core/applicants/store/applicants.actions';
import {switchMap, take, withLatestFrom} from 'rxjs/operators';
import {APP_CONFIG, AppConfig} from '@app/app.config';
import {EMPTY, of} from 'rxjs';
import {ApplicantsState} from '@app/core/applicants/store/applicants.reducers';
import {Store} from '@ngrx/store';
import * as fromApp from '@app/store/app.reducers';

@Injectable()
export class ApplicantsEffects {

    @Effect()
    applicantsFetch = this.actions$
        .pipe(
            ofType(ApplicantsActions.TRY_FETCH_APPLICANTS),
            withLatestFrom(this.store$.select('applicants')),
            switchMap((arr) => {
                const state: ApplicantsState = arr[1];
                let url = `${this.appConfig.apiEndpoint}/users?page=1&count=6`;
                if (state.page && state.links.next_url) {
                    url = state.links.next_url;
                }
                return this.http.get(url);
            }),
            switchMap((res: any) => {
                if (res.success && res.users) {
                    return of(new ApplicantsState(res.users, res.page, res.links.next_url, res.links.prev_url));
                } else {
                    this.errorHandler.handleError(new AppError('Oops, can\'t fetch users'));
                    return EMPTY;
                }
            }),
            switchMap((applicantsState) => {
                return [
                    {
                        type: ApplicantsActions.FETCH_APPLICANTS,
                        payload: applicantsState
                    }
                ];
            })
        );

    constructor(
        private actions$: Actions,
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private errorHandler: AppErrorHandler,
        private http: HttpClient,
        private store$: Store<fromApp.AppState>
    ) {
    }

}
