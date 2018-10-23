import {Inject, Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {APP_CONFIG, AppConfig} from '@app/app.config';
import {AppError, AppErrorHandler} from '@app/core/error-handler/error-handler';
import {HttpClient} from '@angular/common/http';
import * as PositionsActions from '@app/views/home/registration/store/positions.actions';
import {switchMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

@Injectable()
export class PositionsEffects {

    @Effect()
    positionsGet = this.actions$
        .pipe(
            ofType(PositionsActions.TRY_GET_POSITIONS),
            switchMap((action: PositionsActions.PositionsActions) => {
                return this.http.get(`${this.appConfig.apiEndpoint}/positions`);
            }),
            switchMap((res: any) => {
                if (res.success && res.positions) {
                    return of(res.positions);
                } else {
                    this.errorHandler.handleError(new AppError('Oops, can\'t fetch positions'));
                    return EMPTY;
                }
            }),
            switchMap((positions) => {
                return [
                    {
                        type: PositionsActions.GET_POSITIONS,
                        payload: positions
                    }
                ];
            })
        );

    constructor(
        private actions$: Actions,
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private errorHandler: AppErrorHandler,
        private http: HttpClient,
    ) {
    }

}
